export interface IDeal {
  creationTime: Date;
  changeTime: Date | null;
  status: 'Active' | 'Filled' | 'Rejected' | 'Canceled';
  side: 'Buy' | 'Sell';
  price: number;
  amount: number;
  instrument: string;
}
