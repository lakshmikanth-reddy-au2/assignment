import post from './api-post';

export const getCurrencyList = () => post<any>
({ url: `https://api.exchangeratesapi.io/latest?base=INR` }, {});