import { useState } from 'react';
import Menu from './Menu';
import Info from './Info';


function App() {
    const baseURL = 'http://api.weatherapi.com/v1/';

    const currentPart = 'current.json?key=ddb3c04efbbc46ad9d6201356230905&q=';
    const forecastPart = 'forecast.json?key=ddb3c04efbbc46ad9d6201356230905&q=';
    
    const modes = [(p) => currentPart, (p) => forecastPart + p + '&days=7&aqi=no&alerts=no'];

    
    const [selectedMode, setSelectedMode] = useState(0);
    const [region, setRegion] = useState(null);
    const [data, setData] = useState(null);



    
    const selectHandle = (event) => {
        console.log('select value: ', event.target.selectedIndex);
        setSelectedMode(event.target.selectedIndex);
    };
    
    const buttonHandle = async () => {
        console.log('BUTTON CLICKED LISTENER')
        const response = await fetch(baseURL + modes[selectedMode](region) + region);
        const jsonData = await response.json();
        jsonData.currentMode = selectedMode;

        setData(jsonData);
    };

    

    return (
        <div id="app">
            <div className="wrapper">
                <Menu selectHandle={selectHandle} buttonHandle={buttonHandle} setRegion={setRegion}/>
                <Info data={data} mode={selectedMode}/>
            </div>
        </div>
    );
}

export default App;