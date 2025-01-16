import "./RidesCard.css"

export default function RidesCard({type, rides, src}) {
    return (
        <div className="card">
            <p>{type}</p>
            <h3>{rides}</h3>
            <img src={src} alt="" />
        </div>
    );
}