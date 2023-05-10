import { useState } from 'react';
import Menu from './Menu';
import Info from './Info';


function App() {
    const baseURL = 'http://api.weatherapi.com/v1/';

    const currentPart = 'current.json?key=ddb3c04efbbc46ad9d6201356230905&q=';
    const forecastPart = 'forecast.json?key=ddb3c04efbbc46ad9d6201356230905&q=';
    
    const modes = [currentPart, forecastPart];

    
    const [selectedMode, setSelectedMode] = useState(null);
    const [region, setRegion] = useState(null);
    const [data, setData] = useState(null);



    
    const selectHandle = (event) => {
        console.log('select value: ', event.target.selectedIndex);
        setSelectedMode(event.target.selectedIndex);
    };
    
    const load = async (event) => {
        console.log('mode: ', selectedMode)
        const request = baseURL + modes[selectedMode] + region;
        console.log(request);
        const response = await fetch(request);
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
        console.log(response.status);
        
    };

    

    return (
        <div id="app">
            <div className="wrapper">
                <Menu selectHandle={selectHandle} buttonHandle={load} setRegion={setRegion}/>
                <Info data={data}/>
            </div>
        </div>
    );
}

export default App;