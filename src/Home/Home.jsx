import Front from "./Front";
import Testimonials from "./Testimonials";
import ElectricRides from "./ElectricRides";
import BusinessCard from "./BusinessCard";
import ApplyToDrive from "./ApplyToDrive";
import Charge from "./Charge";
import RideSafe from "./RideSafe";
import Partners from "./Partners";

export default function Home() {
    return (
        <>
            <Front />
            <ElectricRides />
            <BusinessCard />
            <Testimonials/>
            
            <RideSafe />
            <Charge />
            <ApplyToDrive />
            <Partners />
        </>
    );
}