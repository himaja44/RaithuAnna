
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sprout,
  ShieldCheck,
  Phone,
  Layers,
  UserRound,
  Mail,
  ArrowRight,
} from "lucide-react";
import "./Auth.css";

export default function Auth({ initialMode = "login" }) {
  const navigate = useNavigate();

  const [mode, setMode] = useState(initialMode);
  const [role, setRole] = useState("farmer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("error");

  const showMessage = (text, type = "error") => {
    setMessage(text);
    setMessageType(type);
  };

  // Request OTP
  const sendOTP = () => {
    setMessage("");

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      showMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Frontend simulation until backend SMS integration
    setOtpSent(true);
    setOtp("");

    showMessage(
      "OTP service is not connected yet. SMS verification will be enabled soon.",
      "success"
    );
  };

  // Submit login / registration
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (!otpSent) {
      showMessage("Please request an OTP first.");
      return;
    }

    if (!/^\d{6}$/.test(otp)) {
      showMessage("Please enter a valid 6-digit verification code.");
      return;
    }

    if (mode === "register") {
      if (!name.trim()) {
        showMessage("Please enter your full name.");
        return;
      }

      if (!termsAccepted) {
        showMessage(
          "Please accept the Terms of Service and Privacy Policy."
        );
        return;
      }
    }

    showMessage(
      "Authentication service is not connected yet. Please try again after verification is enabled.",
      "error"
    );
  };

  // Switch between Login and Register
  const changeMode = (newMode) => {
    setMode(newMode);
    setOtpSent(false);
    setOtp("");
    setMessage("");
  };

  // Update mobile number
  const changeMobile = (value) => {
    setMobile(value.replace(/\D/g, "").slice(0, 10));
    setOtpSent(false);
    setOtp("");
    setMessage("");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">

        {/* LEFT PANEL */}
        <section className="auth-visual">
          <div
            className="auth-brand"
            onClick={() => navigate("/")}
            role="button"
            tabIndex={0}
          >
            <Sprout size={42} strokeWidth={2} />

            <div>
              <h2>RaithuAnna</h2>
              <span>The Next Generation Farmer</span>
            </div>
          </div>

          <div className="auth-visual-content">
            <span className="auth-tagline">GROW WITH US</span>

            {/* LEFT HEADING */}
            <h1 className="auth-main-heading">
              {mode === "register" ? (
                <>
                  Create your
                  <br />
                  <span>RaithuAnna</span>
                  <br />
                  account
                </>
              ) : (
                <>
                  Welcome back to
                  <br />
                  <span>RaithuAnna</span>
                </>
              )}
            </h1>

            <p className="auth-left-description">
              {mode === "register"
                ? "Join our farming community and discover new opportunities."
                : "One account. All farming services."}
            </p>

            <div className="auth-benefits">
              <div className="auth-benefit">
                <div className="auth-benefit-icon">
                  <Phone size={22} />
                </div>

                <div>
                  <h3>Phone & OTP Login</h3>
                  <p>Simple and secure mobile authentication.</p>
                </div>
              </div>

              <div className="auth-benefit">
                <div className="auth-benefit-icon">
                  <Layers size={22} />
                </div>

                <div>
                  <h3>Role-Based Access</h3>
                  <p>Access your dedicated Farmer or Agent dashboard.</p>
                </div>
              </div>

              <div className="auth-benefit">
                <div className="auth-benefit-icon">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <h3>Secure & Protected</h3>
                  <p>Your information stays safe and protected.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="auth-trust">
            <ShieldCheck size={20} />
            Safe, simple & farmer-friendly
          </div>
        </section>

        {/* RIGHT PANEL */}
        <section className="auth-form-section">
          <div className="auth-form-card">

            <div className="auth-mobile-brand">
              <Sprout size={34} color="#078638" />
              <h2>RaithuAnna</h2>
            </div>

            <h2 className="auth-heading">
              {mode === "register"
                ? "Create your account"
                : "Welcome Back"}
            </h2>

            <p className="auth-description">
              {mode === "register"
                ? "Start your journey with RaithuAnna."
                : "Enter your mobile number to sign in or get started."}
            </p>

            <form onSubmit={handleSubmit} className="auth-fields">

              {/* ROLE SELECTION - REGISTER ONLY */}
              {mode === "register" && (
                <>
                  <label className="auth-label">Register as *</label>

                  <div className="role-selector">
                    <button
                      type="button"
                      className={role === "farmer" ? "selected" : ""}
                      onClick={() => setRole("farmer")}
                    >
                      🌾 Farmer
                    </button>

                    <button
                      type="button"
                      className={role === "agent" ? "selected" : ""}
                      onClick={() => setRole("agent")}
                    >
                      👨‍💼 Agent
                    </button>
                  </div>

                  {/* FULL NAME */}
                  <label className="auth-label">Full Name *</label>

                  <div className="auth-input-icon">
                    <UserRound size={19} />

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setMessage("");
                      }}
                      required
                    />
                  </div>

                  {/* EMAIL */}
                  <label className="auth-label">
                    Email Address 
                  </label>

                  <div className="auth-input-icon">
                    <Mail size={19} />

                    <input
                      type="email"
                      placeholder="your@email.com"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setMessage("");
                      }}
                    />
                  </div>
                </>
              )}

              {/* MOBILE NUMBER */}
              <label className="auth-label">Phone Number *</label>

              <div className="auth-phone">
                <span>IN&nbsp; +91</span>

                <div className="auth-phone-input">
                  <Phone size={18} />

                  <input
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    autoComplete="tel-national"
                    inputMode="numeric"
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => changeMobile(e.target.value)}
                    required
                  />
                </div>
              </div>

              <p className="auth-phone-help">
                We will send a 6-digit one-time verification code to this number.
              </p>

              {/* TERMS - REGISTER ONLY */}
              {mode === "register" && (
                <label className="auth-terms">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />

                  <span>
                    I agree to RaithuAnna{" "}
                    <a href="/terms" target="_blank" rel="noreferrer">
                      Terms of Service
                    </a>{" "}
                    &{" "}
                    <a href="/privacy" target="_blank" rel="noreferrer">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              )}

              {/* GET OTP */}
              {!otpSent && (
                <button
                  type="button"
                  className="auth-get-otp"
                  onClick={sendOTP}
                >
                  Get OTP <ArrowRight size={17} />
                </button>
              )}

              {/* OTP FIELD */}
              {otpSent && (
                <>
                  <label className="auth-label">
                    Enter Verification Code *
                  </label>

                  <input
                    className="auth-otp-input"
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    placeholder="Enter 6-digit OTP"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => {
                      setOtp(
                        e.target.value.replace(/\D/g, "").slice(0, 6)
                      );
                      setMessage("");
                    }}
                    required
                  />

                  <p className="auth-resend-text">
                    Didn't receive the code?{" "}
                    <button type="button" onClick={sendOTP}>
                      Resend OTP
                    </button>
                  </p>

                  <button
                    className="auth-submit"
                    type="submit"
                    disabled={
                      otp.length !== 6 ||
                      (mode === "register" && !termsAccepted)
                    }
                  >
                    {mode === "register"
                      ? "Create Account"
                      : "Verify & Login"}
                    <ArrowRight size={17} />
                  </button>
                </>
              )}

              {/* INLINE FEEDBACK */}
              {message && (
                <div
                  className={`auth-message ${messageType}`}
                  role="status"
                  aria-live="polite"
                >
                  {message}
                </div>
              )}
            </form>

            {/* SECURITY MESSAGE */}
            <div className="auth-bottom">
              <ShieldCheck size={17} />
              Your information is safe and secure
            </div>

            {/* LOGIN / REGISTER SWITCH */}
            <p className="auth-switch">
              {mode === "register"
                ? "Already have an account? "
                : "Don't have an account? "}

              <span
                onClick={() =>
                  changeMode(mode === "register" ? "login" : "register")
                }
                role="button"
                tabIndex={0}
              >
                {mode === "register" ? "Sign in" : "Register"}
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
