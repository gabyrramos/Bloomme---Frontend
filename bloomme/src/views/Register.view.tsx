import "../styles/RegisterPage/Register.style.css";
/* import FirstStep from "../components/RegisterPage/FirstStep.component"; */
import SecondStep from "../components/RegisterPage/SecondStep.component";

function Register() {
  return (
    <main className="main-register">
      <div className="left-sidebar">Izquierda</div>
      <div className="right-sidebar">
        {/* <FirstStep /> */}
        <SecondStep />
      </div>
    </main>
  );
}

export default Register;
