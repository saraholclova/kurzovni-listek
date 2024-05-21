import { useEffect, useState } from 'react';
import './style.css';

const currencies = {
  USD: { CZK: 23.823 },
  EUR: { CZK: 24.74 },
  GBP: { CZK: 29.067 },
};

export const Rate = ({ from }) => {
  // const rate = currencies[from].CZK; //z úkolu č. 1 kurzovní lístek, základ
  const [rate, setRate] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const response =
        await fetch(`https://api.frankfurter.app/latest?from=${from}&to=CZK
  `);
      const data = await response.json();
      const newRate = data.rates.CZK;
      setRate(newRate);
    };

    fetchCurrencies();
  }, [from]);

  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value">{rate} CZK</div>
    </div>
  );
};
