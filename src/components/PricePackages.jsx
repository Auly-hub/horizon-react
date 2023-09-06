import React from 'react'
import PriceCards from './PriceCards'

function PricePackages() {
  return (
    <div>
        <div class="container price">
            <h1 class="display-5 fw-normal text-center">Price Packages</h1>
            <div class="row">
                <div class="col-md-3">
                    <PriceCards 
                    title="Luxurious"
                    text="Odio dolores voluptatum ullam facilis nulla voluptatibus sed itaque excepturi eius molestiae qui fugit."
                    imgSrc="/images/apartment 9.jpg"
                    price="$65/night"/>
                </div>
                <div class="col-md-3">
                    <PriceCards 
                    title="Affordable"
                    text="Doloremque consequuntur, illo, molestias sequi incidunt ex neque blanditiis dignissimos?" 
                    imgSrc="/images/apartment7 (1).jpg"
                    price="$35/night"/>
                </div>
                <div class="col-md-3">
                    <PriceCards 
                    title="Heavenly"
                    text="Ipsum, dolor sit amet consectetur adipisicing elit. Possimus, error. Lorem ipsum dolor sit amet." 
                    imgSrc="/images/apartment 13.jpeg"
                    price="$45/night"/>
                </div>
                <div class="col-md-3">
                    <PriceCards 
                    title="Spacious" 
                    text="Some quick example text to build on the card title and make up the bulk of the card's content."
                    imgSrc="/images/apartment8.jpg"
                    price="$30/night"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PricePackages