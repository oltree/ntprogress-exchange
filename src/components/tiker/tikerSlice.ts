import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export interface ITiker {
  id: string;
  creationTime?: Date;
  changeTime?: Date;
  status: 'Active' | 'Filled' | 'Rejected' | 'Canceled';
  side: 'Buy' | 'Sell';
  price: number;
  amount: number;
  instrument: string;
}

export interface Balance {
  byn: number;
  rub: number;
  usd: number;
}

export interface TikerState {
  deals: ITiker[];
  balance: any;
}

const initialState: TikerState = {
  deals: [],
  balance: {
    byn: 100000,
    rub: 0,
    usd: 0,
  },
};

export const tikerSlice = createSlice({
  name: 'tiker',
  initialState,
  reducers: {
    createDeal: (
      state,
      {
        payload: {
          status,
          side,
          price,
          amount,
          instrument,
          currentCurrency,
          exchangeCurrency,
        },
      }
    ) => {
      const deal = {
        id: uuid(),
        status,
        side,
        price,
        amount,
        instrument,
      };

      if (side === 'Buy') {
        state.balance[exchangeCurrency] = amount * price;
        state.balance[currentCurrency] =
          state.balance[currentCurrency] -
          state.balance[exchangeCurrency] / price;
      }

      if (side === 'Sell') {
        state.balance[exchangeCurrency] =
          state.balance[exchangeCurrency] + amount * price;
        state.balance[currentCurrency] =
          state.balance[currentCurrency] - amount;
      }

      state.deals.unshift(deal);
    },
  },
});

export const { createDeal } = tikerSlice.actions;

export default tikerSlice.reducer;
