import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [currencyData, setCurrencyData] = useState({});
    useEffect(()=>{
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
        fetch(url)
        .then((response) => (response.json()))
        .then((response) => setCurrencyData(response[currency]))
        
    }, [currency]);
    return currencyData;
}

export default useCurrencyInfo;