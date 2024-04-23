/* eslint-disable react/prop-types */
import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false
}) {

    const amountInputId = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex`}>
            <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block w-14">{label}</label>
            <input 
                id={amountInputId}
                type="number"
                className="outline-none w-full bg-transparent py-1 focus:border-b-2 border-b-sky-500"
                value={amount}
                onChange = {(e)=> onAmountChange && onAmountChange(e.target.value)}
                disabled={amountDisable}
            />
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select 
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {
                        currencyOptions.map((currency)=>(<option key={currency} value={currency}>{currency}</option>))
                    }
                </select>
            </div>
        </div>
    );
}


export default InputBox;