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
    coefficientBuy: 0.5,
    coefficientSell: 1.98,
  },
  'BYN/USD': {
    currentCurrency: 'byn',
    exchangeCurrency: 'usd',
    coefficientBuy: 0.25,
    coefficientSell: 3.95,
  },
};
