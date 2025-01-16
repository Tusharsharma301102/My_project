import "./ReviewCards.css"

export default function ReviewCards({review, name, place, src}) {
    return (
        <div className="review-card">
            <div className="card-div">
                <p>{review}</p>
                <div className="card-div-div">
                    <h4>{name}</h4>
                    <p>{place}</p>
                </div>
            </div>
            <img src={src} alt="" />
        </div>
    );
}