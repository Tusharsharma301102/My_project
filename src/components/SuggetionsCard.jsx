import "./SuggetionsCard.css"

export default function SuggetionsCard({packages}) {
    return (
        <div className="suggetion">
            <p>{packages}</p>
        </div>
    );
}