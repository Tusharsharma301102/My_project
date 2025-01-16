import "./Partners.css"

export default function Partners() {
    return (
        <>
            <hr id="partners-hr" />
            <div className="partners">
                <h2>Our Partners</h2>
                <div className="tech-partners">
                    <h3>Technology Partner</h3>
                    <div className="img-div">
                        <img src="https://ucarecdn.com/0b4102f0-70bf-4f65-b9de-fab86351499a/-/preview/920x500/" alt="" />
                        <img src="https://ucarecdn.com/90687bf2-8f75-4c98-af05-c7bec9522cf1/-/preview/1000x633/" alt="" />
                    </div>
                </div>
                <div className="charging-infra-partners">
                    <h3>Charging Infra Partner</h3>
                    <div className="img-div">
                        {/* <img src="https://ucarecdn.com/87a08504-5a07-4da6-bf19-fe506c841640/-/preview/1000x540/" alt="" /> */}
                        <img src="https://ucarecdn.com/a52e90e8-d32b-4024-b440-651c2e1a2f71/-/preview/1000x118/" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}