
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    role: "Farmer",
    mobile: "",
    email: "",
  });

  const [otp, setOtp] = useState("");
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [popup, setPopup] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setMessage("");
  };

  const handleGetOTP = () => {
    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    const newOTP = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    setGeneratedOTP(newOTP);
    setOtp("");
    setOtpSent(true);
    setMessage("");
    setPopup(true);
  };

  const handleCopyOTP = async () => {
    try {
      await navigator.clipboard.writeText(generatedOTP);
      setMessage("OTP copied successfully!");
    } catch {
      setMessage("Please copy the OTP manually.");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!otpSent || otp !== generatedOTP) {
      setMessage("Please enter a valid OTP.");
      return;
    }

    if (!agreed) {
      setMessage("Please accept the Terms and Conditions.");
      return;
    }

    setMessage(
      "Registration UI completed! Backend integration is pending."
    );
  };

  return (
    <div className="min-h-screen bg-[#f0faf3] px-4 py-10 md:px-8">
      <div className="mx-auto grid min-h-[85vh] max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">

        {/* LEFT SIDE - CLEAN BRANDING */}
        <div className="flex flex-col justify-center bg-gradient-to-br from-green-800 via-green-700 to-emerald-600 p-8 text-white md:p-16">

          <div className="mb-14">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              RaithuAnna
            </h1>

            <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-green-200">
              Smart Agriculture Platform
            </p>
          </div>

          <h2 className="max-w-md text-3xl font-bold leading-tight md:text-5xl">
            Empowering Farmers.
            <br />
            <span className="text-green-200">
              Growing Together.
            </span>
          </h2>

          <p className="mt-6 max-w-md text-base leading-8 text-green-50">
            Create your RaithuAnna account and connect with
            agricultural services, discover farming solutions,
            and explore new opportunities.
          </p>

          <div className="mt-14 border-t border-white/20 pt-6">
            <p className="text-sm tracking-wide text-green-100">
              Empowering farmers. Growing together.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - REGISTER FORM */}
        <div className="flex flex-col justify-center p-6 sm:p-10 md:p-14">

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Create Account
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Join RaithuAnna and get started today.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">

            {/* FULL NAME */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            {/* ROLE */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Register As <span className="text-red-500">*</span>
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              >
                <option value="Farmer">Farmer</option>
                <option value="Agent">Agent</option>
              </select>
            </div>

            {/* MOBILE NUMBER */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Mobile Number <span className="text-red-500">*</span>
              </label>

              <div className="flex gap-2">
                <div className="flex items-center rounded-xl border border-gray-300 bg-gray-50 px-3 text-gray-600">
                  +91
                </div>

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  required
                  className="min-w-0 flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>
            </div>

            {/* GET OTP */}
            <div>
              <button
                type="button"
                onClick={handleGetOTP}
                className="w-full rounded-xl border border-green-700 py-3 font-semibold text-green-700 transition hover:bg-green-50"
              >
                {otpSent ? "Resend OTP" : "Get OTP"}
              </button>

              {/* INLINE OTP CARD - NO BLUR */}
              {popup && (
                <div className="mt-4 rounded-xl border border-green-200 bg-white p-5 shadow-md">

                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">
                      Your Verification OTP
                    </h3>

                    <button
                      type="button"
                      onClick={() => setPopup(false)}
                      className="text-xl text-gray-400 hover:text-gray-700"
                    >
                      ×
                    </button>
                  </div>

                  <p className="mb-3 text-sm text-gray-500">
                    Use this OTP to verify your mobile number.
                  </p>

                  <div className="flex items-center justify-between gap-2 rounded-lg bg-green-50 px-3 py-3">
                    <span className="text-xl font-bold tracking-[0.25em] text-green-700">
                      {generatedOTP}
                    </span>

                    <button
                      type="button"
                      onClick={handleCopyOTP}
                      className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
                    >
                      Copy
                    </button>
                  </div>

                  <p className="mt-2 text-xs text-gray-400">
                    Demo OTP only. No actual SMS is sent.
                  </p>

                  <button
                    type="button"
                    onClick={() => setPopup(false)}
                    className="mt-3 w-full rounded-lg bg-green-700 py-2.5 font-semibold text-white transition hover:bg-green-800"
                  >
                    Continue
                  </button>
                </div>
              )}
            </div>

            {/* ENTER OTP */}
            {otpSent && (
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Enter OTP <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                    setMessage("");
                  }}
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 tracking-widest outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>
            )}

            {/* EMAIL */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email (optional)"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            {/* TERMS AND CONDITIONS */}
            <label className="flex cursor-pointer items-start gap-2.5">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 accent-green-700"
              />

              <span className="text-sm leading-5 text-gray-600">
                I agree to the{" "}
                <a
                  href="#terms"
                  className="font-medium text-green-700 hover:underline"
                >
                  Terms and Conditions
                </a>{" "}
                and Privacy Policy.
              </span>
            </label>

            {/* MESSAGE */}
            {message && (
              <p className="rounded-lg bg-green-50 px-3 py-2 text-center text-sm text-green-700">
                {message}
              </p>
            )}

            {/* REGISTER BUTTON */}
            <button
              type="submit"
              className="w-full rounded-xl bg-green-700 py-3.5 font-semibold text-white shadow-md transition hover:bg-green-800"
            >
              Create Account
            </button>
          </form>

          {/* LOGIN LINK */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-green-700 hover:underline"
            >
              Login
            </Link>
          </p>

          {/* HOME LINK */}
          <div className="mt-3 text-center">
            <Link
              to="/"
              className="text-sm text-gray-500 transition hover:text-green-700"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
