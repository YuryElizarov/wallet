export interface IPnl {
  amount: string;
  percent: string;
  loss: boolean;
}

export interface IAccount {
  title: string;
  currency: string;
  amount: string;
  usd: string;
  pnl: IPnl;
}

const accounts: Array<IAccount> = [
  {
    amount: '0,00000',
    title: 'USDT',
    currency: 'USDT',
    usd: '0,00',
    pnl: {amount: '0.01', percent: '0.04', loss: true},
  },
  {
    amount: '0,00000',
    title: 'BTC',
    currency: 'BTC',
    usd: '0,00',
    pnl: {amount: '0.01', percent: '0.04', loss: false},
  },
  {
    amount: '0,00000',
    title: 'RUB',
    currency: 'RUB',
    usd: '0,00',
    pnl: {amount: '0.01', percent: '0.04', loss: false},
  },
  {
    amount: '0,00000',
    title: 'Token60',
    currency: 'token',
    usd: '0,00',
    pnl: {amount: '0.10', percent: '0.04', loss: false},
  },
];

export {accounts};
