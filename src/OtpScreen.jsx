import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import { publicApi } from "./utils/api";

const OtpScreen = ({ email }) => {
  const [otp, setOtp] = useState("");
  const [otpTime, setOtpTime] = useState(600);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setOtpTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const handleClick = async (otp, email) => {
    try {
      const res = await publicApi.get(`/auth/otp/verify/${email}/${otp}`);
      if (res.status === 200) {
        navigate("/");
      }
    } catch (ex) {
      console.error("Error verifying OTP:", ex);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#152331]">
      <div className="p-10 border-2 border-zinc-800 rounded-md max-w-lg flex flex-col justify-center items-center bg-zinc-900 shadow-lg">
        <h1 className="font-bold pb-10 text-3xl text-white">
          Verification Code
        </h1>
        <p className="pb-5 text-zinc-500 font-semibold text-center">
          Please enter the verification code sent to{" "}
          <span className="text-white">{email}</span>
        </p>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span className="text-zinc-500 w-[25px]">-</span>}
          renderInput={(props) => (
            <input
              {...props}
              className="outline-none text-center w-full h-12 bg-zinc-800 text-white text-2xl rounded-md"
              type={"text"} // Change to "text" to avoid spinners
              inputMode="numeric" // Ensures numeric input without spinners
            />
          )}
          containerStyle={{ fontSize: "25px", marginBottom: "20px" }}
        />
        <hr className="h-[1px] w-[100%] bg-zinc-700 mt-2"></hr>
        <p className="pb-5 text-zinc-500 font-semibold w-[100%] text-sm pt-5 text-center">
          OTP valid for{" "}
          <span className="text-white">{formatTime(otpTime)}</span>
        </p>
        <div className="pt-5 w-[100%] flex gap-2 text-sm">
          <button
            type={"button"}
            className="bg-green-600 px-3 py-2 w-[100%] text-white font-semibold rounded-md hover:bg-green-500 transition-all duration-200"
            onClick={() => handleClick(otp, email)}
          >
            Verify
          </button>
          <button
            type={"button"}
            className="bg-blue-600 px-3 py-2 w-[100%] text-white font-semibold rounded-md hover:bg-blue-500 transition-all duration-200"
          >
            <Link to="#" onClick={() => console.log("Resend OTP")}>
              Resend OTP
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpScreen;
