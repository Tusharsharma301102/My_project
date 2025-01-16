import "./ContactForm.css"
import emailjs from "emailjs-com";
import { useState } from "react";

function ContactForm() {

    let [contactDetails, setContactDetails] = useState({
        email: "",
        tel: ""
    });

    function handleChange(event) {
        setContactDetails((currData) => {return {...currData, [event.target.name]: event.target.value}});
    }

    function handleSubmit(event) {
        event.preventDefault();

        emailjs.send("service_upol71b","template_hi1nygk",{
            email: contactDetails.email,
            mobile: contactDetails.tel,
            }, "WV0xbd6UCc9fJYQlp")
        .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Form has submitted successfully!");
        })
        .catch((err) => {
            console.log("FAILD...", err);
            alert("An error occurred. Please try again.");
        });

        setContactDetails({
            email: "",
            tel: ""
        });
    }

    return (
        <form className="contactForm" onSubmit={handleSubmit} id="contactForm">
            <h2>Contact us for work or genarel quiries</h2>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="@gmail.com" name="email" value={contactDetails.email}  onChange={handleChange}required/>
            </div>
            <p>We will not share your contact details to anyone.</p>
            <div>
                <label htmlFor="tel">Mobile: </label>
                <input type="tel" id="tel" placeholder="1234567890" name="tel" value={contactDetails.tel} onChange={handleChange} required/>
            </div>
            <button>Submit</button>
        </form>
    );
}

export default ContactForm;