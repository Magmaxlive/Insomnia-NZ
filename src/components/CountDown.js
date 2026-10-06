'use client'

import { useEffect, useState } from 'react'

function getRemaining(target) {
  const diff = target - Date.now()
  if (diff <= 0) return { days: 0, hrs: 0, mins: 0, seconds: 0, done: true }
  return {
    days: Math.floor(diff / 86400000),
    hrs: Math.floor((diff / 3600000) % 24),
    mins: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  }
}

function Unit({ value, label }) {
  return (
    <span className="tabular-nums">
      {String(value).padStart(2, '0')}
      <span className="text-mute text-xs uppercase ml-0.5">{label}</span>
    </span>
  )
}



function CountDown({ target = '2026-10-17T18:00:00+13:00' }) {
  const targetMs = new Date(target).getTime()
  const [t, setT] = useState(null)

  useEffect(() => {
    setT(getRemaining(targetMs))
    const id = setInterval(() => setT(getRemaining(targetMs)), 1000)
    return () => clearInterval(id)
  }, [targetMs])

  if (!t) {
    return <div className="h-20" aria-hidden />
  }

  if (t.done) {
    return (
      <div className="font-cormorant text-gold text-2xl tracking-widest uppercase">
        The show has begun
      </div>
    )
  }

  return (
    <div className="font-highlight text-2xl text-light tracking-wide flex gap-3">
      <Unit value={t.days} label="d" />
      <Unit value={t.hrs} label="h" />
      <Unit value={t.mins} label="m" />
      <Unit value={t.seconds} label="s" />
    </div>
  )
}

export default CountDown