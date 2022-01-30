const cardList  = (props) => {
    return ( 
    <div className='card--item'>
    {cards.map((card) => (
        <div className='card--item' key={card.id}>
        <div className='picture'><img src= {props.locationPicture} /></div>
        <div className="Content">
        <span><div><img src= {Icon}/></div> <h4>{props.location}</h4> <a href="#">View On Google Map</a></span>
        <h1></h1>
        <h4>{props.date}</h4>
        <p>{props.paragraph}</p>
        </div>
    </div>
    ))}
</div>
);
}

export default cardList