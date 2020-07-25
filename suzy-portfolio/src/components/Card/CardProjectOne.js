import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function CardProjectOne() {
    return (
<div className="card mb-3" style="max-width: 540px;">
  <div className="row no-gutters">
    <div className="hovereffect ">
        <img className="img-responsive" src="./Assets/Images/triva-generator.JPG" alt="Project#1" />
    <div className="overlay">
        {/* <div className="col-md-4">
            <img src="..." className="card-img" alt="...">
    <div className="col-md-8"> */}
      <div className="card-body">
        <h1 className="card-title">DAS FLIX</h1>
        <h2>Group Project</h2>
        <p className="card-text">DasFlix is a CRUD MVC project, built to help end users browse, create favorite TV shows and movies. This app was created by the University of Arizona Students: Azucena Gonzalez, Denzell Grant, and Stephen Studer.</p>
        <p className="card-text"><small className="text-muted">Technologies:</small></p>
        <a className="info" href="http://www.dasflix.com">Visit</a>
        <a className="info" href="https://github.com/denzgrant/DasFlix-">Github</a>
        </div>
        </div>
  </div>
</div>
</div>
    );
}

export default CardProjectOne; 
