function Info(props) {
    const data = props.data;
    const days = [];

    if (!data) return <div className="info"></div>;
    if (data && !data.ok) return <div className="info">ERROR</div>;

    const getDayInfo = (dayInfo) => (
        <li>
            <div>
                <div className="night daytime">
                    <img src={dayInfo.hour[1].condition.icon} /> <span>{dayInfo.hour[1].temp_c}°C</span>
                </div>
                <div className="morning daytime">
                    <img src={dayInfo.hour[6].condition.icon} /> <span>{dayInfo.hour[6].temp_c}°C</span>
                </div>
                <div className="day daytime">
                    <img src={dayInfo.hour[12].condition.icon} /> <span>{dayInfo.hour[12].temp_c}°C</span> 
                </div>
                <div className="evening daytime">
                    <img src={dayInfo.hour[18].condition.icon} /> <span>{dayInfo.hour[18].temp_c}°C</span>
                </div>
            </div>
            <span className="time" id="date" >{dayInfo.date.split('-')[2] + '.' + dayInfo.date.split('-')[1]}</span>
        </li>
    );

    data.forecast.forecastday.forEach((element) => {
        days.push(getDayInfo(element));
    });

    return (
        <div className="info">
            <ul>
                {days}
            </ul>
        </div>
    );
}

export default Info;
