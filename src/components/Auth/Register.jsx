
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    role: "Farmer",
  });

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGetOTP = () => {
    if (formData.mobile.length !== 10) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }
    setOtpSent(true);
    setMessage("OTP service is not connected yet.");
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!agreed) {
      setMessage("Please accept the terms and conditions.");
      return;
    }

    setMessage("Backend registration and OTP verification are not connected yet.");
  };

  const inputStyle =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50";

  const labelStyle = "mb-2 block text-sm font-semibold text-gray-700";

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 md:flex-row">

      {/* Left Panel */}
      <section className="flex w-full flex-col justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800 px-8 py-12 text-white md:min-h-screen md:w-1/2 md:px-12 lg:px-20">

        <Link to="/" className="mb-10 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-2xl">
            🌿
          </span>
          <span>
            <span className="block text-2xl font-bold">RaithuMitra</span>
            <span className="text-xs tracking-wider text-emerald-200">
              THE NEXT GENERATION FARMER
            </span>
          </span>
        </Link>

        <span className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-emerald-300">
          Join Our Community
        </span>

        <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Create your
          <br />
          <span className="text-emerald-300">RaithuAnna</span>
          <br />
          account.
        </h1>

        <p className="max-w-lg text-lg leading-8 text-emerald-100">
          Join RaithuMitra and discover smarter agricultural services designed
          to support farmers and agents.
        </p>

        <div className="mt-10 space-y-4 text-emerald-50">
          <p>🌱 Access farming services</p>
          <p>🤝 Connect with your community</p>
          <p>🚀 Discover new opportunities</p>
        </div>

        <p className="mt-12 text-sm text-emerald-300">
          Together, let's build a better farming future.
        </p>
      </section>

      {/* Right Panel */}
      <section className="flex w-full items-center justify-center px-5 py-10 sm:px-10 md:w-1/2 lg:px-14">
        <form
          onSubmit={handleRegister}
          className="w-full max-w-lg rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl shadow-emerald-900/10 sm:p-9"
        >
          <div className="mb-7">
           
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Create Account
            </h2>
            <p className="mt-2 text-gray-500">
              Fill in your details to get started.
            </p>
          </div>

          <div className="space-y-4">

            {/* Full Name */}
            <div>
              <label className={labelStyle}>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className={inputStyle}
              />
            </div>

            {/* Email */}
            <div>
              <label className={labelStyle}>Email Address </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={inputStyle}
              />
            </div>

            {/* Role */}
            <div>
              <label className={labelStyle}>Register As</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={`${inputStyle} cursor-pointer`}
              >
                <option value="Farmer">🌾 Farmer</option>
                <option value="Agent">🧑‍💼 Agent</option>
              </select>
            </div>

            {/* Mobile */}
            <div>
              <label className={labelStyle}>Mobile Number</label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex min-w-0 flex-1 items-center rounded-xl border border-gray-200 bg-gray-50 px-3 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-50">
                  <span className="border-r border-gray-200 pr-3 text-sm font-medium text-gray-500">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="mobile"
                    maxLength={10}
                    value={formData.mobile}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        mobile: e.target.value.replace(/\D/g, ""),
                      });
                      setMessage("");
                    }}
                    required
                    placeholder="10-digit mobile number"
                    className="w-full bg-transparent px-3 py-3.5 text-gray-800 outline-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleGetOTP}
                  className="rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white shadow-md shadow-emerald-700/20 transition hover:bg-emerald-800"
                >
                  Get OTP
                </button>
              </div>
            </div>

            {/* OTP */}
            {otpSent && (
              <div>
                <label className={labelStyle}>Enter OTP</label>
                <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  placeholder="Enter 6-digit OTP"
                  className={inputStyle}
                />
              </div>
            )}

            {/* Terms */}
            <label className="flex cursor-pointer items-start gap-3 pt-1">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 accent-emerald-700"
              />
              <span className="text-sm leading-5 text-gray-600">
                I agree to the <a href="#terms" className="font-semibold text-emerald-700 hover:underline">Terms and Conditions</a> and privacy policy.
              </span>
            </label>

            {/* Message */}
            {message && (
              <p className="rounded-lg bg-amber-50 p-3 text-sm text-amber-700">
                {message}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-700 py-3.5 font-bold text-white shadow-lg shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
            >
              Create My Account →
            </button>
          </div>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs text-gray-400">ALREADY REGISTERED?</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-emerald-700 hover:text-emerald-900">
              Login
            </Link>
          </p>

          <Link to="/" className="mt-5 block text-center text-sm text-gray-400 hover:text-emerald-700">
            ← Back to Home
          </Link>
        </form>
      </section>
    </div>
  );
}
