import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardProjectOne from "../Card/CardProjectOne"; 
import CardProjectTwo from "../Card/CardProjectTwo"; 

function Carousel() {
return (

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
          <CardProjectOne /> 
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <CardProjectTwo /> 
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    ); 
}

export default Carousel;