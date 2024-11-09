import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import {
  FaUser,
  FaEnvelope,
  FaBirthdayCake,
  FaGlobe,
  FaLock,
} from "react-icons/fa"; // Importamos los íconos
import { GrInstagram } from "react-icons/gr";


function FirstStep() {
  return (
    <>
      <h1>Sign Up</h1>
      <h3>
        Already have an account?
        <a> Sign In</a>
      </h3>
      <div className="register-social-icons">
        <FaGoogle size={24} className="social-icon" />
        <FaFacebookF size={24} className="social-icon" />
        <GrInstagram size={24} className="social-icon" />
      </div>
      <div className="form-register-container">
        <form>
          <div className="input-container">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-container">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-container">
            <FaBirthdayCake className="input-icon" />
            <input type="number" placeholder="Age" />
          </div>
          <div className="input-container">
            <FaGlobe className="input-icon" />
            <input type="text" placeholder="Country" />
          </div>
          <div className="input-container">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Password" />
          </div>
          <button className="register-button-submit" type="submit">
            Next
          </button>
        </form>
      </div>
    </>
  );
}

export default FirstStep;
