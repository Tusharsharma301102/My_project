import React from 'react'
import "./Testimonials.css"
import ReviewCards from '../components/ReviewCards'

function Testimonials() {
    let cardInfoReview = [
        "'Fantastic experience! My first ride with Ezekeb was seamless—spotless car, courteous driver, and thoughtful details. Truly delightful!'",
        "'All of our employees now have access to Ezekeb rides for their daily commute, allowing them to reduce their environmental impact & contribute towards a #sustainable future'",
        "'Balancing family and my passion for tech, joining Ezekeb as a software engineer in 2024 has boosted my skills and confidence while contributing to innovative solutions.'"  ,
        "'Appreciation where it deserves! I just experienced my first ride with Ezekeb, and it was amazing. The car was spotless and well-maintained, and the driver was incredibly courteous. It's the little things that truly made the ride delightful!'"  
    ];

    let cardInfoName = ["Nitin", "Vikas", "Tushar", "Mohit"];

    let cardInfoPlace = ["Jaipur, Rajasthan", "Jaipur, Rajasthan", "Jaipur, Rajasthan","Bharatpur, Rajasthan"]

    let cardInfoSrc = [
        "https://ucarecdn.com/ee65184f-1210-4577-b239-929da8024c43/-/preview/803x803/",
        "https://ucarecdn.com/b27c40c9-eba7-48d5-8584-4e9c0dd544c8/-/preview/1000x1000/",
        "https://ucarecdn.com/ad35ae20-a70c-4a1a-ae76-08c5722331b7/-/preview/960x960/",
        "https://ucarecdn.com/e4f72e0a-45bf-49db-adea-058e832a1ed3/-/preview/1000x1000/"
    ]

    return (
        <div className='test'>
            <h2>" What People Say About Us "</h2>
            <p>Its not a Secret anymore</p>
            <div className='test-div1'>
                <ReviewCards review = {cardInfoReview[0]} name = {cardInfoName[0]} place = {cardInfoPlace[0]} src = {cardInfoSrc[0]} />
                <ReviewCards review = {cardInfoReview[1]} name = {cardInfoName[1]} place = {cardInfoPlace[1]} src = {cardInfoSrc[1]} />
                <ReviewCards review = {cardInfoReview[2]} name = {cardInfoName[2]} place = {cardInfoPlace[2]} src = {cardInfoSrc[2]} />
                <ReviewCards review = {cardInfoReview[3]} name = {cardInfoName[3]} place = {cardInfoPlace[3]} src = {cardInfoSrc[3]} />
            </div>
        </div>
    )
}

export default Testimonials