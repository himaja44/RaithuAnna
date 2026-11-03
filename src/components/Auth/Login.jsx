
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");

  const handleGetOTP = () => {
    if (mobile.length !== 10) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setOtpSent(true);
    setMessage("OTP service is not connected yet.");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("Backend OTP verification is not connected yet.");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left panel */}
      <div className="flex w-full flex-col justify-center bg-emerald-900 px-8 py-12 text-white md:w-1/2 md:px-16">
        <h1 className="mb-4 text-3xl font-bold md:text-5xl">
          Welcome back to RaithuMitra
        </h1>

        <p className="mb-8 max-w-md text-lg leading-8 text-emerald-100">
          Your trusted companion for smarter farming, better opportunities,
          and a brighter agricultural future.
        </p>

        <div className="space-y-4 text-emerald-50">
          <p>🌱 Smart farming solutions</p>
          <p>🤝 Connect with agricultural experts</p>
          <p>📈 Grow your farming opportunities</p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex w-full items-center justify-center px-6 py-12 md:w-1/2">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl md:p-10"
        >
          <h2 className="mb-2 text-3xl font-bold text-gray-800">
            Login
          </h2>

          <p className="mb-8 text-gray-500">
            Login using your registered mobile number
          </p>

          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Mobile Number
          </label>

          <div className="flex gap-2">
            <input
              type="tel"
              maxLength="10"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
              placeholder="Enter mobile number"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />

            <button
              type="button"
              onClick={handleGetOTP}
              className="shrink-0 rounded-lg bg-emerald-700 px-4 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              Get OTP
            </button>
          </div>

          {otpSent && (
            <>
              <label className="mb-2 mt-5 block text-sm font-semibold text-gray-700">
                Enter OTP
              </label>

              <input
                type="text"
                maxLength="6"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                placeholder="Enter OTP"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </>
          )}

          {message && (
            <p className="mt-4 text-sm text-red-600">{message}</p>
          )}

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-emerald-700 py-3 font-semibold text-white transition hover:bg-emerald-800"
          >
            Login
          </button>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-emerald-700 hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
