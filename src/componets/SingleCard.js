import './SingleCard.css'

export default function singleCard({card, handleChoice, flipped, disabled }) {
    const handleClick = () => {
        if(!disabled){
            handleChoice(card)
        }
    }
    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img src={card.src} className="card-img front" alt="Card Front" />
                <img 
                    src="/img/cover.png" 
                    className="card-img back" 
                    onClick={handleClick} 
                    alt="Card Back" 
                />
            </div>
        </div>
    )
}
