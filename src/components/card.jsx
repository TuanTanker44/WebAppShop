function Card(props){
    return (
        <div className="card">
            <h2>{props.cardName}</h2>
            <p>{props.description}</p>
            <button className="btn">
                <span style={{ fontWeight: "bold" }}>Click Me</span>
            </button>
        </div>
    );
}


export default Card;