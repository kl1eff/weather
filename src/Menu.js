function Menu(props) {
    return (
        <div className="menu">
            <input type="text" placeholder="укажите регион..." onChange={(e) => props.setRegion(e.target.value)} />
            <button onClick={props.buttonHandle}>
                <img src="./search.png" alt="huy"/>
            </button>
        </div>
    );
}

export default Menu;
