// Indicative exchange rates (Rand per unit of foreign currency).
// Update these periodically — conversions are estimates only.
export const RANDS_PER = { USD: 17.5, EUR: 20.5 }
export const RATES_UPDATED = 'October 2026'

export function formatZar(zar: number) {
  return `R${zar % 1 === 0 ? zar.toFixed(0) : zar.toFixed(2)}`
}

export function formatUsd(zar: number) {
  return `US$${(zar / RANDS_PER.USD).toFixed(2)}`
}

export function formatEur(zar: number) {
  return `€${(zar / RANDS_PER.EUR).toFixed(2)}`
}

export function sumCosts(items: Array<{ costZar: number }>) {
  return Math.round(items.reduce((total, i) => total + i.costZar, 0) * 100) / 100
}
