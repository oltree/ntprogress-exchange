import { RootState } from '../../store/store';

export const tikerSelector = (state: RootState) => state.tiker.balance;
