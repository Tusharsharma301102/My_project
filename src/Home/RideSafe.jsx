import "./RideSafe.css"

export default function RideSafe() {
    return (
        <div className="ride-safe">
            <img src="https://ucarecdn.com/64120f26-1542-42d1-90cd-96d9d4da3636/-/preview/130x130/" alt="" id="safe" />
            <h2>Ride Safe with Ezekeb</h2>
            <p>Your safety is our priority. Trust us for safe rides, screened & trained driver-partners,
                and 24/7 support, ensuring worry-free travel.</p>
            <div className="ride-safe-div">
                <div className="ride-safe-div-div1">
                    <div className="inner-div1">
                        <h4>Rider Safety</h4>
                        <p>Keep Loved Ones in the Loop: Share Your Journey Details!</p>
                    </div>
                    <img src="https://ucarecdn.com/f2fd3558-77ab-4b1b-ba7a-346d0e152eb1/-/preview/612x364/" alt="" />
                </div>
                <div  className="ride-safe-div-div2">
                    <div  className="inner-div2" style={{overflow: 'hidden',borderRadius: "50%", display: "flex", alignItems: "center", border: "1px solid rgb(106, 255, 165)"}}>
                        <img style={{transform: "scale(1.5)",
                               width: "18rem",
                               height: "15rem",
                               marginTop: "1.5rem",
                              
                        }} src="https://ucarecdn.com/57556366-051c-4e4d-9025-5e5048bfefa4/-/preview/1000x1000/" alt="" />
                    </div>
                    <div className="inner-div2">
                        <h4>Driver Partner Safety:</h4>
                        <p>Guaranteed: No Rash Driving -- Safety First!</p>
                    </div>
                </div>
            </div>
        </div>

    );
}