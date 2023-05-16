import { useEffect, useState } from 'react';
import Menu from './Menu';
import Info from './Info';

function App() {
    const baseURL = 'http://api.weatherapi.com/v1/';

    const currentPart = 'current.json?key=ddb3c04efbbc46ad9d6201356230905&q=';
    const forecastPart = 'forecast.json?key=ddb3c04efbbc46ad9d6201356230905&q=';

    const modes = [(p) => currentPart, (p) => forecastPart + p + '&days=7&aqi=no&alerts=no'];

    const [region, setRegion] = useState('');
    const [data, setData] = useState(null);

    const selectHandle = (event) => {
        
    };

    const buttonHandle = async () => {
        console.log('BUTTON CLICKED LISTENER');
        const response = await fetch(baseURL + modes[1](region) + region);
        const jsonData = await response.json();
        jsonData.ok = response.ok;

        setData(jsonData);
    };

    return (
        <div id="app">
            <Menu selectHandle={selectHandle} buttonHandle={buttonHandle} setRegion={setRegion} />
            <Info data={data} mode={1} />
        </div>
    );
}

export default App;
