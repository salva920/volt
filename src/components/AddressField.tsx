'use client'

import { KeyboardEvent, useEffect, useId, useRef, useState } from 'react'
import { FiExternalLink, FiMapPin } from 'react-icons/fi'
import { mapsEmbedUrl, mapsSearchUrl, type PlaceDetails, type PlaceSuggestion } from '@/lib/places'
import styles from './AddressField.module.css'

type Props = {
  required?: boolean
}

export default function AddressField({ required = true }: Props) {
  const listId = useId()
  const wrapRef = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<number>()
  const abortRef = useRef<AbortController>()

  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<PlaceSuggestion[]>([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState(0)
  const [selected, setSelected] = useState<PlaceDetails | null>(null)

  useEffect(() => {
    const onPointer = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onPointer)
    return () => document.removeEventListener('mousedown', onPointer)
  }, [])

  useEffect(() => {
    const value = query.trim()
    if (value.length < 3) {
      setSuggestions([])
      setLoading(false)
      return
    }
    if (selected && value === selected.address) return

    window.clearTimeout(debounceRef.current)
    debounceRef.current = window.setTimeout(async () => {
      abortRef.current?.abort()
      const controller = new AbortController()
      abortRef.current = controller
      setLoading(true)
      try {
        const res = await fetch(`/api/places/suggest?q=${encodeURIComponent(value)}`, {
          signal: controller.signal,
        })
        const data = (await res.json()) as { suggestions?: PlaceSuggestion[] }
        setSuggestions(data.suggestions ?? [])
        setActive(0)
        setOpen(true)
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          setSuggestions([])
        }
      } finally {
        setLoading(false)
      }
    }, 280)

    return () => window.clearTimeout(debounceRef.current)
  }, [query, selected])

  const applyPlace = (place: PlaceDetails) => {
    setSelected(place)
    setQuery(place.address)
    setSuggestions([])
    setOpen(false)
  }

  const pick = async (item: PlaceSuggestion) => {
    if (item.provider === 'osm' && item.lat != null && item.lng != null) {
      applyPlace({
        id: item.id,
        address: item.address || [item.label, item.secondary].filter(Boolean).join(', '),
        lat: item.lat,
        lng: item.lng,
        mapsUrl: mapsSearchUrl(item.lat, item.lng, item.address || item.label),
      })
      return
    }

    const res = await fetch(`/api/places/details?id=${encodeURIComponent(item.id)}`)
    if (!res.ok) {
      applyPlace({
        id: item.id,
        address: [item.label, item.secondary].filter(Boolean).join(', '),
        lat: 0,
        lng: 0,
        mapsUrl: mapsSearchUrl(0, 0, item.label),
      })
      return
    }
    applyPlace((await res.json()) as PlaceDetails)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!open || suggestions.length === 0) {
      if (event.key === 'Escape') setOpen(false)
      return
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((i) => (i + 1) % suggestions.length)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((i) => (i - 1 + suggestions.length) % suggestions.length)
    } else if (event.key === 'Enter' && suggestions[active]) {
      event.preventDefault()
      void pick(suggestions[active])
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  const confirmTyped = () => {
    const address = query.trim()
    if (address.length < 3) return
    applyPlace({
      id: 'typed',
      address,
      lat: 0,
      lng: 0,
      mapsUrl: mapsSearchUrl(undefined, undefined, address),
    })
  }

  const mapsUrl = selected?.mapsUrl || ''
  const showMap = Boolean(selected?.address)
  const showEmpty = open && !loading && query.trim().length >= 5 && suggestions.length === 0 && !selected

  return (
    <div className={styles.field} ref={wrapRef}>
      <span>Dirección de la obra o faena</span>
      <div className={styles.inputWrap}>
        <FiMapPin className={styles.pin} size={16} aria-hidden />
        <input
          name="address"
          required={required}
          autoComplete="off"
          placeholder="Ej: Buseta 4220, Cerrillos"
          value={query}
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          onChange={(event) => {
            setSelected(null)
            setQuery(event.target.value)
            setOpen(true)
          }}
          onFocus={() => (suggestions.length > 0 || query.trim().length >= 5) && setOpen(true)}
          onKeyDown={onKeyDown}
        />
        {loading && <span className={styles.hint}>Buscando…</span>}
      </div>

      {open && suggestions.length > 0 && (
        <ul id={listId} className={styles.list} role="listbox">
          {suggestions.map((item, index) => (
            <li key={item.id} role="option" aria-selected={index === active}>
              <button
                type="button"
                className={index === active ? styles.optionActive : styles.option}
                onMouseEnter={() => setActive(index)}
                onClick={() => void pick(item)}
              >
                <strong>{item.label}</strong>
                {item.secondary && <small>{item.secondary}</small>}
              </button>
            </li>
          ))}
        </ul>
      )}

      {showEmpty && (
        <div className={styles.empty} role="status">
          <p>No aparece esa calle en el buscador. Puedes enviarla igual.</p>
          <button type="button" onClick={confirmTyped}>
            Usar “{query.trim()}”
          </button>
        </div>
      )}

      <input type="hidden" name="lat" value={selected?.lat ? String(selected.lat) : ''} />
      <input type="hidden" name="lng" value={selected?.lng ? String(selected.lng) : ''} />
      <input type="hidden" name="mapsUrl" value={mapsUrl} />

      {showMap && selected && (
        <div className={styles.mapBox}>
          <iframe
            title="Ubicación en Google Maps"
            src={mapsEmbedUrl(selected.lat, selected.lng, selected.address)}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a href={selected.mapsUrl} target="_blank" rel="noopener noreferrer">
            Abrir en Google Maps
            <FiExternalLink size={14} />
          </a>
        </div>
      )}
    </div>
  )
}
