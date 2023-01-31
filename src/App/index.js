import { useState } from 'react';
import './App.css';
import { Form } from './Form';
import { currencies } from './currencies';
import Header from "./Header"; 

function App() {

    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = currencies
          .find(({ short }) => short === currency)
          .rate;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    }

    return (
        <div className="app">
            <Header title = "Przelicznik walut"/>
            <Form
              result={result}
              calculateResult={calculateResult}
            />
        </div>
    );
}

export default App;
