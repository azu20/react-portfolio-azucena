
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function ContactForm() {
    return (
      <div>
        <h1>Contact</h1>
        <hr className="my-4"></hr>
        <label for="exampleFormControlInput1">First and last name.</label>
            <div className="form-group mt-5 mb-5">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
            </div>
            <div className="form-row">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="form-group">
                <label for="comment">Comment:</label>
                <textarea className="form-control" rows="7" id="comment" name="text"></textarea>
            </div>
            <button type="submit" className="btn btn-dark">Submit</button>
      </div>
    );
  }
  
  export default ContactForm;
  