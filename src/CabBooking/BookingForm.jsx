import { useState } from "react";
import emailjs from "emailjs-com";
import "./BookingForm.css"
import SuggetionsCard from "../components/SuggetionsCard";

export default function BookingForm() {

    let [bookingDetails, setBookingDetails] = useState({
        departureDate: "",
        departureTime: "",
        fullName: "",
        contactNumber: "",
        luggage: "",
        travellers: ""
    });

    let [fromTo, setFromTo] = useState({
        from: "",
        to: "",
    });

    let destination = [
        {from: "Jaipur", to: "Package"},
        {from: "Jaipur", to: "Khatu Shyam"},
        {from: "----", to: "----"},
    ];

    let packages = [
        "Jaipur Darshan",
        "Jaipur To Khatu Shyam",
        "Hourly Rented",
    ];

    function handleChange(event) {
        setBookingDetails((currData) => {return {...currData, [event.target.name]: event.target.value}});
        setFromTo((currData) => {return {...currData, [event.target.name]: event.target.value}});
    }

    const handlePackageClick = (destination) => {
        setFromTo(destination);
    };

    function handleSubmit(event) {
        event.preventDefault();

        emailjs.send("service_upol71b","template_9h9d3xu",{
            name: bookingDetails.fullName,
            mobile: bookingDetails.contactNumber,
            from: fromTo.from,
            to: fromTo.to,
            departureDate: bookingDetails.departureDate,
            departureTime: bookingDetails.departureTime,
            luggage: bookingDetails.luggage,
            travellers: bookingDetails.travellers,
            }, "WV0xbd6UCc9fJYQlp")
        .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Form has submitted successfully!");
        })
        .catch((err) => {
            console.log("FAILD...", err);
            alert("An error occurred. Please try again.");
        });

        setBookingDetails({
            departureDate: "",
            departureTime: "",
            fullName: "",
            contactNumber: "",
            luggage: "",
            travellers: ""
        });
        setFromTo({
            from: "",
            to: "",
        });
    }

    return (
        <>
            <h1>Travel wherever you want with Ezekeb</h1>
            <div className="packages-div">
                <h2>Our Best Packages For You</h2>
                <div className="packages">
                    <span onClick={() => handlePackageClick(destination[0])}>
                        <SuggetionsCard packages = {packages[0]} />
                    </span>
                    <span onClick={() => handlePackageClick(destination[1])}>
                        <SuggetionsCard packages = {packages[1]} />
                    </span>
                    <span onClick={() => handlePackageClick(destination[2])}>
                        <SuggetionsCard packages = {packages[2]} />
                    </span>
                </div>
            </div>
            <form className="bookingForm" onSubmit={handleSubmit} id="bookingForm">
            <div className="input-div">
                <label htmlFor="from">Enter Source City</label>
                <input type="text" name="from" id="from" placeholder="ex. Jaipur" value={fromTo.from} onChange={handleChange} required />
            </div>
            <div className="input-div">
                <label htmlFor="to">Enter Destination city</label>
                <input type="text" name="to" id="to" placeholder="ex. Ajmer" value={fromTo.to} onChange={handleChange} required />
            </div>
            <div className="input-div">
                <label htmlFor="departureDate">Date of Departure</label>
                <input type="text" name="departureDate" id="departureDate" placeholder="01/01/2025" value={bookingDetails.departureDate} onChange={handleChange} required />
            </div>
            <div className="input-div">
                <label htmlFor="departureTime">Time of Departure</label>
                <input type="text" name="departureTime" id="departureTime" placeholder="01:30 AM" value={bookingDetails.departureTime} onChange={handleChange} required />
            </div>
            <div className="input-div">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" name="fullName" id="fullName" placeholder="ex. John" value={bookingDetails.fullName} onChange={handleChange} required />
            </div>
            <div className="input-div">
                <label htmlFor="contactNumber">Contact Number</label>
                <input type="text" name="contactNumber" id="contactNumber" placeholder="0123456789" value={bookingDetails.contactNumber} onChange={handleChange} required />
            </div>
            <div className="input-div">
                <label htmlFor="luggage">Luggage</label>
                <input type="text" name="luggage" id="luggage" value={bookingDetails.luggage} onChange={handleChange} required />
            </div>
            <div className="input-div">
                <label htmlFor="travellers">Travellers</label>
                <input type="text" name="travellers" id="travellers" value={bookingDetails.travellers} onChange={handleChange} required />
            </div>
            <button>Submit</button>
        </form>
        </>
    );
}