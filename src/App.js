import Menu from './Menu';

function App() {
    const baseURL = 'http://api.weatherapi.com/v1/';

    const currentPart = 'current.json?key=ddb3c04efbbc46ad9d6201356230905&q=';
    const forecastPart = 'forecast.json?key=ddb3c04efbbc46ad9d6201356230905&q=';

    const modes = ['current', 'forecast'];

    const selectHandle = (event) => (selectedMode = modes[event.target.value]);
    const inputHandle = (event) => event.key === 'Enter' && (region = event.target.value);

    let region;
    let selectedMode;

    return (
        <div id="app">
            <div className="wrapper">
                <Menu handler1={inputHandle} handler2={selectHandle} />
                <div className="info"></div>
            </div>
        </div>
    );
}

export default App;
