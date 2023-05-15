function Menu(props) {

    return (
        <div className="menu">
            <input type="text" placeholder="укажите регион..." onChange={(e) => props.setRegion(e.target.value)} />
            <button onClick={props.buttonHandle}>
                <img/>
            </button>
        </div>
    );
}

export default Menu;
