import "./BusinessCard.css"

export default function BusinessCard() {
    return (
        <div className="businessCard">
            <div className="card-content">
                <h2>Ezekeb For Business</h2>
                <p>Helping your business move forward, sustainably.</p>
                <div className="card-content-div">
                    <div className="card-content-div-div">
                        <h4>Effortless Booking</h4>
                        <p>Schedule up to 45 mins in advance</p>
                    </div>
                    <hr />
                    <div className="card-content-div-div">
                        <h4>Reliability</h4>
                        <p>Enjoy zero ride denials</p>
                    </div>
                    <hr />
                    <div className="card-content-div-div">
                        <h4>Payment</h4>
                        <p>Payment plans with hassle-free accounting</p>
                    </div>
                </div>
                <button>Get Started</button>
            </div>
        </div>
    );
}