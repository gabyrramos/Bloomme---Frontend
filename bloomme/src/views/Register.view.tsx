import "../styles/RegisterPage/Register.style.css";
import FirstStep from "../components/RegisterPage/FirstStep.component";
import SecondStep from "../components/RegisterPage/SecondStep.component";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerPost } from "../services/Register.service";
import girlRegister from '../assets/RegisterPage/girl-register.png'

function Register() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleRegisterApi = async() => {
    const response = await registerPost(data);
    //TODO: validar si te mandan accesstoken para que guardes eso en el localstorage sino enviar al login
    // todo bien
    navigate("/login");
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <main className="min-h-screen grid grid-cols-12">
      <div className="hidden sm:col-span-7 sm:block">
        <img className='absolute max-h-[40rem] bottom-0 left-[5%] 2xl:max-h-[55rem] 2xl:left-[8%]' src={girlRegister} alt="girl"/>
      </div>
      <div className="bg-[#f29fb3] col-span-12 sm:col-span-5 flex flex-col px-16 py-20 items-center gap-3 main-content">
        {data ? (
          <SecondStep setData={setData} handleRegisterApi={handleRegisterApi} />
        ) : (
          <FirstStep setData={setData} />
        )}
      </div>
    </main>
  );
}

export default Register;
