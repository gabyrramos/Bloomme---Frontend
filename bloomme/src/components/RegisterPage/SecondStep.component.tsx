import { useState } from "react";
import {  FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

function SecondStep({ setData, handleRegisterApi }) {
  const [assistant, setAssistant] = useState(null);
  const handleSetAssistant = (value) => {
    setAssistant(value);
    setData((prevValue) => ({ ...prevValue, assistant_id: value }));
  };

  const handleButtonSubmit = () => {
    const assistant_name = document.getElementById("assistant_name").value;

    if (!assistant_name || !assistant) {
      Swal.fire({
        title: "Error!",
        text: "You must fill in all the information of your assistant",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    handleRegisterApi();
  };

  return (
    <>
      <h1 className="text-4xl text-white text-center">
        Select your personal assistant
      </h1>
      <div className="grid grid-cols-2 gap-4 w-full items-center justify-items-center mt-14 mb-4">
        <div
          className={`blob-wrapper pointer relative ${
            assistant === 2 && "assistant-selected"
          }`}
          onClick={() => handleSetAssistant(2)}
        >
          <svg
            width="204"
            height="189"
            viewBox="0 0 204 189"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_514_103)">
              <path
                className="change"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M93.3508 1.95319C116.122 4.00701 136.37 12.8626 154.106 26.7412C174.509 42.7071 197.025 59.9703 199.648 85.1314C202.443 111.936 188.291 138.315 167.637 156.526C147.762 174.05 120.281 177.431 93.3508 178.855C64.2145 180.396 28.1749 187.092 10.4136 164.841C-7.16313 142.821 16.7689 112.833 18.5392 85.1314C20.0975 60.748 3.38934 33.1286 20.012 14.6469C36.8986 -4.12823 67.6414 -0.365609 93.3508 1.95319Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_514_103"
                x="0"
                y="0"
                width="204"
                height="189"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_514_103"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_514_103"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <img
            src="src/assets/RegisterPage/cat.png"
            alt=""
            className="absolute cursor-pointer top-[20px] left-[25px] w-[160px]"
          />
        </div>
        <div
          className={`blob-wrapper pointer relative ${
            assistant === 1 && "assistant-selected"
          }`}
          onClick={() => handleSetAssistant(1)}
        >
          <svg
            width="194"
            height="184"
            viewBox="0 0 194 184"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_dd_514_104)">
              <path
                className="change"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M88.2771 1.46235C123.428 -1.43482 168.089 -2.97481 185.418 26.6931C202.219 55.4568 168.373 85.7348 155.334 116.263C146.525 136.885 144.194 162.18 123.397 171.896C102.571 181.627 78.5612 172.373 58.2919 161.602C39.6624 151.703 27.1278 135.798 19.4405 116.655C9.45366 91.787 -3.88274 64.2607 9.92299 41.1578C25.4309 15.2065 57.3577 4.0108 88.2771 1.46235Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_dd_514_104"
                x="0"
                y="0"
                width="194"
                height="184"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_514_104"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_514_104"
                  result="effect2_dropShadow_514_104"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_514_104"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <img
            src="src/assets/RegisterPage/bunny.png"
            alt=""
            className="absolute cursor-pointer top-[24px] left-[42px]"
          />
        </div>
      </div>
      <h3 className="text-white text-lg text-center mb-14">
        It will be your partner during this adventure
      </h3>
      <div className="relative mb-4 w-full max-w-[400px]">
        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          id="assistant_name"
          placeholder="assistant name"
          autoComplete="off"
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          onChange={(e) => {
            setData((prevValue) => ({ ...prevValue, assistant_name: e.target.value }))
          }}
        />
      </div>
      <button className="register-button-submit mt-6 max-w-56" onClick={handleButtonSubmit}>next</button>
      <h3 className="text-white text-md text-center mt-20">
        You will be able to unlock other pets / assistants later on, don't
        worry.
      </h3>
    </>
  );
}

export default SecondStep;
