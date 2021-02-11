export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'EUR',
    minimunFractionDigits: 2,
  }

  if (amount % 100 === 0) {
    options.minimunFractionDigits = 0
  }

  const formatter = Intl.NumberFormat('en-UK', options)

  return formatter.format(amount / 100)
}
