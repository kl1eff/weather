function Info(props) {
    const data = props.data;
    const days = [];

    if (!data) return <div className="info"></div>;
    if (data && !data.ok) return <div className="info">ERROR</div>;

    const getDayInfo = (dayInfo) => (
        <li>
            <div>
                <div className="night daytime">
                    <span>{dayInfo.hour[1].temp_c}°C</span> <img src={dayInfo.hour[1].condition.icon} />
                </div>
                <div className="morning daytime">
                    <span>{dayInfo.hour[6].temp_c}°C</span> <img src={dayInfo.hour[6].condition.icon} />
                </div>
                <div className="day daytime">
                    <span>{dayInfo.hour[12].temp_c}°C</span> <img src={dayInfo.hour[12].condition.icon} />
                </div>
                <div className="evening daytime">
                    <span>{dayInfo.hour[18].temp_c}°C</span> <img src={dayInfo.hour[18].condition.icon} />
                </div>
            </div>
            <span className="time" id="date" >{dayInfo.date.split('-')[1] + '.' + dayInfo.date.split('-')[2]}</span>
        </li>
    );

    data.forecast.forecastday.forEach((element) => {
        days.push(getDayInfo(element));
    });

    return (
        <div className="info">
            <ul>
                {/* <li>
                    <div id="daytime">
                        <span className="time">1:00</span>
                        <span className="time">6:00</span>
                        <span className="time">12:00</span>
                        <span className="time">18:00</span>
                    </div>
                </li> */}
                {days}
            </ul>
        </div>
    );
}

export default Info;
