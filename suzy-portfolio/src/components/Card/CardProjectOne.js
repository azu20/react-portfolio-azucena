import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function CardProjectOne() {
    return (
<div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="hovereffect ">
        <img class="img-responsive" src="./Assets/Images/triva-generator.JPG" alt="Project#1" />
    <div class="overlay">
        {/* <div class="col-md-4">
            <img src="..." class="card-img" alt="...">
    <div class="col-md-8"> */}
      <div class="card-body">
        <h1 class="card-title">DAS FLIX</h1>
        <h2>Group Project</h2>
        <p class="card-text">DasFlix is a CRUD MVC project, built to help end users browse, create favorite TV shows and movies. This app was created by the University of Arizona Students: Azucena Gonzalez, Denzell Grant, and Stephen Studer.</p>
        <p class="card-text"><small class="text-muted">Technologies:</small></p>
        <a class="info" href="http://www.dasflix.com">Visit</a>
        <a class="info" href="https://github.com/denzgrant/DasFlix-">Github</a>
        </div>
        </div>
  </div>
</div>
</div>
    );
}

export default CardProjectOne; 
