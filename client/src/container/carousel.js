import React, {useState, useEffect} from  "react"
import { getMarciAuto, getModeleAutoByMarca } from "../apiFunctions/getProducts"
import { OwnCarousel, SelectCar } from "../components"
import * as ROUTES from "../constants/routes"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

export function CarouselContainer(){
return(
<Carousel>
  <Carousel.Item>
      <OwnCarousel.Image  src={require("../images/carousel/img1.png")} alt="First slide"/>
    <Carousel.Caption>
      <h3>Reduceri 29%</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <OwnCarousel.Image  src={require("../images/carousel/img2.png")} alt="First slide"/>

    <Carousel.Caption>
      <h3>Reduceri 29%</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <OwnCarousel.Image  src={require("../images/carousel/img3.png")} alt="First slide"/>

    <Carousel.Caption>
      <h3>Reduceri 29%</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
}