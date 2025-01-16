import "./Front.css"
import frontImg from '../assets/homeSlider.jpg';

export default function Front() {
    return (
        <div className="front">
            <img  style={{borderRadius: "2%"}} src="https://ucarecdn.com/5c70ebc3-3147-4e4e-99b9-9baae382406d/-/preview/1000x500/" alt="img" id="frontImg" />
            <div className="front-div">
                <div>
                    {/* <h2>4Million+</h2>
                     */}
                       <img style={{height: "70px"}} src="https://ucarecdn.com/21147689-46de-4882-a5cc-1795e6528531/-/preview/1000x409/" alt="" />
                    {/* <p>Happy Riders</p> */}
                </div>
                <div>
                    {/* <h2>100 Million+</h2>
                    <p>Clean Kms Covered</p> */}
                     <img style={{height: "70px"}} src="https://ucarecdn.com/21147689-46de-4882-a5cc-1795e6528531/-/preview/1000x409/" alt="" />
                </div>
                <div>
                    {/* <h2>10k+ tonnes</h2>
                    <p>Carbon Dioxide Saved</p> */}
                     <img style={{height: "70px"}} src="https://ucarecdn.com/21147689-46de-4882-a5cc-1795e6528531/-/preview/1000x409/" alt="" />
                </div>
            </div>
        </div>
    );
}