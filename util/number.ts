interface CurrencyFormatOptions {
    significantDigits?: number
    thousandsSeparator?: string,
    decimalSeparator?: string;
    symbol?: string;
}

const defaultOptions: CurrencyFormatOptions = {
    significantDigits: 2,
    thousandsSeparator: ',',
    decimalSeparator: '.',
    symbol: 'FCFA'
  }
  
export const currencyFormatter = (value, options = defaultOptions) => {
    if (typeof value !== 'number') value = 0.0
    options = { ...defaultOptions, ...options }
    value = value.toFixed(options.significantDigits)
  
    const [currency, decimal] = value.split('.')
    return `${options.symbol} ${currency.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      options.thousandsSeparator
    )}`
  }