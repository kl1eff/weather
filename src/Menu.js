function Menu(props) {
    return (
        <div className="input">
            <input type="text" placeholder="укажите регион..." onKeyUp={props.handler1} />
            <select onSelect={props.handler2}>
                <option value="0">в настоящее время</option>
                <option value="1">Прогноз</option>
            </select>
        </div>
    );
}

export default Menu;
