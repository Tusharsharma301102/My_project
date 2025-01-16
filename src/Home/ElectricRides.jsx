import "./ElectricRides.css"
import RidesCard from "../components/RidesCard";

export default function ElectricRides() {
    return (
        <div className="rides">
            <img src="https://ucarecdn.com/fa910a56-cb26-4707-bcc5-a1672af3344b/-/preview/135x134/" alt="" />
            <h2>100% Electric Rides</h2>
            <p>Reliable, Safe & Premium</p>
            <div className="rides-div">
                <span>Reliable Pricing</span>
                <hr />
                <span>Zero Driver Cancellations</span>
                <hr />
                <span>Zero Emissions</span>
            </div>
            <div className="cards-div">
                <RidesCard type = "Book" rides = "City Rides" src = "https://ucarecdn.com/0cc3cee5-fabb-45b4-a506-924db6044eaa/-/preview/850x544/" />
                <RidesCard type = "Hourly" rides = "Rental Rides" src = "https://ucarecdn.com/4a969c3a-3e59-4c14-abfd-74fec999493a/-/preview/1000x494/" />
                <RidesCard type = "Book" rides = "Long Ride" src = "https://ucarecdn.com/4ce69405-43e2-4fe9-b306-9e84f4c14d46/-/preview/1000x433/" />
            </div>
        </div>
    );
}