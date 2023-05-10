function Menu(props) {
    return (
        <div className="input">
            <input type="text" placeholder="укажите регион..." onChange={(e) => props.setRegion(e.target.value)} />
            <select onChange={props.selectHandle}>
                <option value="0">в настоящее время</option>
                <option value="1">Прогноз</option>
            </select>
            <button onClick={props.buttonHandle}>Готово</button>
        </div>
    );
}

export default Menu;
