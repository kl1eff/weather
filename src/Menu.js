function Menu(props) {
    const inputHandle = (e) => e.key === 'Enter' && props.buttonHandle();


    return (
        <div className="menu">
            <input type="text" placeholder="Enter city name..." onChange={(e) => props.setRegion(e.target.value)} onKeyUp={inputHandle}/>
            <button onClick={props.buttonHandle}>
                <img/>
            </button>
        </div>
    );
}

export default Menu;
