import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-div">
                <div className="footer-div-div-1">
                    <img src="https://ucarecdn.com/21147689-46de-4882-a5cc-1795e6528531/-/preview/1000x409/" alt="" id="logo" />
                    <p>Ezekeb is India's first and largest EV ride hailing service and EV charging 
                        infrastructure network.</p>
                    <div className="footer-div-div-1-div">
                    <img src="https://ucarecdn.com/6e781e5c-6202-4172-ad51-21f2a0a53819/-/preview/170x50/" alt="" />
                        <img src="https://ucarecdn.com/59ccfdaf-8ddd-4252-af9e-b36bee9ac923/-/preview/167x49/" alt="" />
                     </div>
                </div>
                <div className="footer-div-div-2">
                    <p>PRODUCTS</p>
                    <a href="">Book a Ride</a>
                    <a href="">Apply to Drive</a>
                    <a href="">Ezekeb For Business</a>
                    <a href="">Invest with us</a>
                    <a href="">Charge</a>
                </div>
                <div className="footer-div-div-2">
                    <p>HELP</p>
                    <a href="">Terms & Conditions</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Cancellation & waiting policy</a>
                </div>
                <div className="footer-div-div-2">
                    <p>COMPANY</p>
                    <a href="">Announcement</a>
                    <a href="">Blog</a>
                    <a href="">Ezekeb EV Report</a>
                    <a href="">Investor Relations</a>
                    <a href="">About Us</a>
                </div>
                <div className="footer-div-div-3">
                    <p>CONTACT US</p>
                    <a href="">+91 9462357245, <br /> +91 8741810656</a>
                    <a href="">For Partnerships and Advertisements, write to us at: marketing@ezekeb.com </a>
                    <a href="">Corporate Office - Jaipur</a>
                    <a href="">Address: 146 A Gangavihar, Mangyawas, Mansarovar, Jaipur, Rajasthan, INDIA</a>
                </div>
            </div>
            <hr />
            <p id="copyright">© Copyright 2022, All Rights Reserved by Ezekeb Tech Pvt Ltd</p>
        </div>
    );
}