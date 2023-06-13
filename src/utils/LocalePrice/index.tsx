type Debounce = (amount: number, currency?: string) => string;

const localePrice: Debounce = (amount, currency = 'GBP') => {
  const options = {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const locale =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    'en-US';

  try {
    return new Intl.NumberFormat(locale, options).format(amount);
  } catch (error) {
    return 'Invalid currency';
  }
};

export default localePrice;
