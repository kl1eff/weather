function Info(props) {
    const data = props.data;

    const getDayInfo = (dayInfo) => {
        console.log('getDayInfo call');
        return (
            <li>
                {dayInfo.date.split('-')[1] + '.' + dayInfo.date.split('-')[2]}
                <br />
                <div className="morning">Утро: {dayInfo.hour[6].temp_c}</div>
                <div className="day">День: {dayInfo.hour[12].temp_c}</div>
                <div className="afternoon">Вечер: {dayInfo.hour[18].temp_c}</div>
                <div className="night">Ночь (23:00): {dayInfo.hour[23].temp_c}</div>
            </li>
        );
    };

    if (data) {
        switch (props.mode) {
            case 0:
                return (
                    <div className="info">
                        <p>{data.current.temp_c}°C</p>
                        <div className="condition">
                            <p>{data.current.condition.text}</p>
                            <img src={data.current.condition.icon} alt="icon" />
                        </div>
                    </div>
                );
                break;
            case 1:
                if (data.currentMode === 1) {
                    const days = [];
                    for (let i = 0; i < 7; i++) {
                        days.push(getDayInfo(data.forecast?.forecastday[i]));
                        console.log(data.forecast?.forecastday[i]);
                    }

                    return (
                        <div className="info">
                            <p>{data.current.temp_c}°C</p>
                            <ul>{days}</ul>
                        </div>
                    );
                }
                break;
            default:
                break;
        }
    } else {
        return <div className="info">error</div>;
    }
}

export default Info;
