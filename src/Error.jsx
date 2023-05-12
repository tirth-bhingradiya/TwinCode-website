import react from "react";
import './index.css'
const Error = () => {
  return (
    <>
      <div class="error-container">
       
        <h1 class="error-code">404</h1>
        <p>Oops! The page you are looking for cannot be found.</p>
        <a href="/">Back to Home</a>
      </div>
    </>
  );
};
export default Error;
