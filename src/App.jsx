import { useState } from 'react'
import { useCurrencyInfo } from './hooks';
import { InputBox } from './components';


function App() {
	const [fromCurrency, setFromCurrency] = useState('inr');
	const [toCurrency, setToCurrency] = useState('usd');
	const [fromAmount, setFromAmount] = useState(1);
	const [toAmount, setToAmount] = useState(0);

	const currencyInfo = useCurrencyInfo(fromCurrency);

	const currencies = Object.keys(currencyInfo);

	const swap = () => {
		setFromCurrency(toCurrency);
		setToCurrency(fromCurrency);
		setFromAmount(toAmount);
		setToAmount(fromAmount);
		
	}

	const convert = () =>{
		setToAmount(+fromAmount * +currencyInfo[toCurrency]);
	}

	const reset = () => {
		setFromCurrency("inr");
		setToCurrency("usd");
		setFromAmount(0);
		setToAmount(0);
	}

	return (
		<div className='w-full h-screen p-0 m-0 flex flex-wrap flex-col justify-center items-center bg-sky-500 space-y-2'>
			<div className='text-white font-semibold text-2xl'><span>CURRENCY CONVERTER</span></div>
			<div className='w-1/2 flex justify-center items-center max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
				<form onSubmit={(e)=>{e.preventDefault(); convert()}}>
					<div className="w-full mb-1">
						<InputBox 
							label="From"
							amount={fromAmount}
							onCurrencyChange={(currency) => setFromCurrency(currency)}
							selectCurrency={fromCurrency}
							onAmountChange={(amount)=>setFromAmount(amount)}
							currencyOptions={currencies}
						/>
					</div>
					<div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
					<div className="w-full mt-1 mb-4">
						<InputBox 
							label="To"
							amount={toAmount}
							onCurrencyChange={(currency) => setToCurrency(currency)}
							selectCurrency={toCurrency}
							currencyOptions={currencies}
							amountDisable={true}
						/>
					</div>
					<div className='flex gap-2'>
						<button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">Conver {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()} </button>
						<button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={reset} >clear</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default App
