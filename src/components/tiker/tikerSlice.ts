import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export interface Tiker {
  id: string;
  creationTime: Date;
  changeTime: Date;
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
  deals: Tiker[];
  balance: Balance;
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
      { payload: { status, side, price, amount, instrument } }
    ) => {
      const deal = {
        id: uuid(),
        creationTime: new Date(),
        changeTime: new Date(),
        status: status,
        side: side,
        price: price,
        amount: amount,
        instrument: instrument,
      };

      state.deals.unshift(deal);
    },
  },
});

export const { createDeal } = tikerSlice.actions;

export default tikerSlice.reducer;
