function Info(props) {
    return (
        <div className="info">
            <p>{props.data?.current.condition.text}</p>
        </div>
    )
}

export default Info;