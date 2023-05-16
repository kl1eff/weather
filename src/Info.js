function Info(props) {
    const data = props.data;
    const days = [];
    
    if (!data) return <div className="info"></div>;
    if (data && !data.ok) return <div className="info">ERROR</div>;

    const getDayInfo = (dayInfo) => (
        <li>
            <div>
                <div className="morning daytime"><span>Утро: {dayInfo.hour[6].temp_c}°C</span>  <img src={dayInfo.hour[6].condition.icon}/></div>
                <div className="day daytime"><span>День: {dayInfo.hour[12].temp_c}°C</span> <img src={dayInfo.hour[12].condition.icon}/></div>
                <div className="afternoon daytime"><span>Вечер: {dayInfo.hour[18].temp_c}°C</span><img src={dayInfo.hour[18].condition.icon}/></div>
            </div>
            <h2>{dayInfo.date.split('-')[1] + '.' + dayInfo.date.split('-')[2]}</h2>
        </li>
    );
    

    data.forecast.forecastday.forEach(element => {
        days.push(getDayInfo(element));
    });

    // for (let i = 0; i < 7; i++) {
    //     days.push(getDayInfo(data.forecast?.forecastday[i]));
    // }


    return (
        <div className="info">
            <h2>Current weather: {data.current.temp_c}°C</h2>
            <ul>{days}</ul>
        </div>
    );
}

export default Info;
