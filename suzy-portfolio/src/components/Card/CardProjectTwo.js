import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function CardProjectTwo() {
    return (
<div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="hovereffect ">
        <img class="img-responsive" src="./Assets/Images/work-day-scheduler.JPG" alt="Project#2" />
    <div class="overlay">
        {/* <div class="col-md-4">
            <img src="..." class="card-img" alt="...">
    <div class="col-md-8"> */}
      <div class="card-body">
        <h1 class="card-title">Trivia Generator</h1>
        <h2>Group Project</h2>
        <p class="card-text"> This app generates random trivia quizzes from a category of your choice. You can then determine the number of questions each quiz will have. Each question is timed to ensure quick response and guarantee group participation and fun! Once your quiz is generated you can both print that quiz and or execute it to be displayed on a screen. This Project was created by Azucena Gonzalez, Tom Black, and Schwyn Francis.</p>
        <p class="card-text"><small class="text-muted">Technologies:</small></p>
        <a class="info" href="https://tomtimusprime.github.io/Trivia-game-builder/">Visit</a>
        <a class="info" href="https://github.com/tomtimusprime/Trivia-game-builder">Github</a>
        </div>
    </div>
    </div>
  </div>
</div>
    );
}

export default CardProjectTwo; 
