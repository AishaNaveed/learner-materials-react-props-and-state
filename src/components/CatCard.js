const CatCard = () => {
    return ( 
        <div className="card">
            <h2 className="card__text card__header">Little Miss Purrfect</h2>
            <img className="card__image" src="https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted.jpg" alt="A grumpy cat, frowning angrily"></img>
            <p className="card__text">Species: Cat</p>
            <p className="card__text">Favourite Food(s): wet food, dry food</p>
            <p className="card__text">Birth Year: 2016</p>
        </div>
     );
}
 
export default CatCard;