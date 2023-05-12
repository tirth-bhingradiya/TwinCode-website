import React, { useState } from "react";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const inputevent = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setInput((preVal) => {
      return { ...preVal, [name]: value };
    });
    console.log(input);
  };

  const printvalue =() =>{
    alert(`hello ${input.name} 
    your contact-number : ${input.number}
    your email:${input.email}
    your message: ${input.message}
    Thank you for your response we will be contact you as soon as possible`)
  }
  return (
    <>
      <div className="container-fluid form mb-4">
        <br />
        <br />

        <div className="fillinfo">
          <h1 className="text-center formheading">Contact Us</h1>
          <div className="row">
            <div className="col-10 mx-auto">
              <form>
                <div className="mb-3">
                  <label for="exampleInputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="NameHelp"
                    placeholder="Enter your Name"
                    onChange={inputevent}
                    name="name"
                    value={input.name}
                  />
                </div>
                <div>
                  <label for="exampleInputEmail1" className="form-label">
                    Contact no
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputnumber"
                    aria-describedby="NumberHelp"
                    placeholder="Enter your number"
                    onChange={inputevent}
                    name="number"
                    value={input.number}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Email"
                    onChange={inputevent}
                    name="email"
                    value={input.email}
                  />
                  <div id="emailHelp" className="form-text instruction">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputmessage" className="form-label">
                    message
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter your Name"
                    onChange={inputevent}
                    name="message"
                    value={input.message}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-light mb-4"
                  onClick={printvalue}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
