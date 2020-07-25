import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function CardProjectThree() {
    return (
<div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="hovereffect ">
        <img class="img-responsive" src="./Assets/Images/work-day-scheduler.JPG" alt="Project#3" />
    <div class="overlay">
        {/* <div class="col-md-4">
            <img src="..." class="card-img" alt="...">
    <div class="col-md-8"> */}
      <div class="card-body">
        <h1 class="card-title">Work Day Scheduler</h1>
        <h2>Individual Project</h2>
        <p class="card-text">I have created a simple calendar application that allows the user to save events for each hour of the day.</p>
        <p class="card-text"><small class="text-muted">Technologies:</small></p>
        <a class="info" href="https://azu20.github.io/Work-Day-Scheduler/">Visit</a>
        <a class="info" href="https://github.com/azu20/Coding-Quiz">Github</a>
        </div>
        </div>
  </div>
</div>
</div>
    );
}

export default CardProjectThree; 
