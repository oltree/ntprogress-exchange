export interface IOdds {
  'BYN/RUB': number;
  'RUB/BYN': number;
  'RUB/USD': number;
  'USD/RUB': number;
  'BYN/USD': number;
  'USD/BYN': number;
}

export const oddsForCurrencies: any = {
  'BYN/RUB': {
    currentCurrency: 'byn',
    exchangeCurrency: 'rub',
    coefficient: 0.5,
  },
  'RUB/BYN': {
    currentCurrency: 'rub',
    exchangeCurrency: 'byn',
    coefficient: 2,
  },
  'RUB/USD': {
    currentCurrency: 'rub',
    exchangeCurrency: 'usd',
    coefficient: 0.5,
  },
  'USD/RUB': {
    currentCurrency: 'usd',
    exchangeCurrency: 'rub',
    coefficient: 2,
  },
  'BYN/USD': {
    currentCurrency: 'byn',
    exchangeCurrency: 'usd',
    coefficient: 0.25,
  },
  'USD/BYN': {
    currentCurrency: 'usd',
    exchangeCurrency: 'byn',
    coefficient: 4,
  },
};
