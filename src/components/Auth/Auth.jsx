
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sprout,
  ShieldCheck,
  Phone,
  User,
  Mail,
  Layers,
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

  const [district, setDistrict] = useState("");
  const [mandal, setMandal] = useState("");
  const [agentId, setAgentId] = useState("");

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const showMessage = (text, type = "error") => {
    setMessage(text);
    setMessageType(type);
  };

  // Mobile number validation
  const isValidMobile = /^[6-9]\d{9}$/.test(mobile);

  // Request OTP
  const sendOTP = () => {
    setMessage("");

    if (!isValidMobile) {
      showMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Frontend UI simulation. Real SMS integration will be added through Spring Boot.
    setOtpSent(true);
    setOtp("");

    showMessage(
      "OTP service is not connected yet. SMS verification will be enabled soon.",
      "success"
    );
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (!isValidMobile) {
      showMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (mode === "register") {
      if (!name.trim()) {
        showMessage("Please enter your full name.");
        return;
      }

      if (role === "agent" && (!district.trim() || !mandal.trim())) {
        showMessage("Please enter your district and mandal.");
        return;
      }

      if (!termsAccepted) {
        showMessage("Please accept the Terms of Service and Privacy Policy.");
        return;
      }
    }

    if (!otpSent) {
      showMessage("Please click Get OTP first.");
      return;
    }

    if (!/^\d{6}$/.test(otp)) {
      showMessage("Please enter a valid 6-digit OTP.");
      return;
    }

    // Backend authentication will be connected here.
    showMessage(
      "Authentication backend is not connected yet. Real OTP verification will be enabled soon.",
      "error"
    );
  };

  // Change login/register mode
  const changeMode = (newMode) => {
    setMode(newMode);
    setOtpSent(false);
    setOtp("");
    setMessage("");
    setTermsAccepted(false);
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
        <div className="auth-visual">

          <div
            className="auth-brand"
            onClick={() => navigate("/")}
            role="button"
            tabIndex={0}
          >
            <Sprout size={38} />

            <div>
              <h2>RaithuMitra</h2>
              <span>The Next Generation Farmer</span>
            </div>
          </div>

          <div className="auth-visual-content">

            <span className="auth-tagline">GROW WITH US</span>

            <h1>
              {mode === "register" ? (
                <>
                  Create your
                  <br />
                  <span>RaithuMitra</span>
                  <br />
                  account
                </>
              ) : (
                <>
                  Welcome back to
                  <br />
                  <span>RaithuMitra</span>
                </>
              )}
            </h1>

            <p className="auth-left-description">
              {mode === "register"
                ? "Join our farming community and discover new opportunities."
                : "One account. All farming services."}
            </p>

            {/* FEATURES - NO TRACTOR OR PLANT IMAGE */}

            <div className="auth-benefits">

              <div className="auth-benefit">
                <div className="auth-benefit-icon">
                  <Phone size={24} />
                </div>

                <div>
                  <h3>Phone & OTP Login</h3>
                  <p>Simple and secure mobile authentication.</p>
                </div>
              </div>

              <div className="auth-benefit">
                <div className="auth-benefit-icon">
                  <Layers size={24} />
                </div>

                <div>
                  <h3>Role-Based Access</h3>
                  <p>Access your dedicated Farmer or Agent dashboard.</p>
                </div>
              </div>

              <div className="auth-benefit">
                <div className="auth-benefit-icon">
                  <ShieldCheck size={24} />
                </div>

                <div>
                  <h3>Secure & Protected</h3>
                  <p>Your information stays safe and protected.</p>
                </div>
              </div>
            </div>

            <div className="auth-trust">
              <ShieldCheck size={20} />
              Safe, simple & farmer-friendly
            </div>

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="auth-form-section">
          <div className="auth-form-card">

            <div className="auth-mobile-brand">
              <Sprout size={32} color="#078638" />
              <h2>RaithuMitra</h2>
            </div>

            <h2 className="auth-heading">
              {mode === "register" ? "Create your account" : "Welcome Back"}
            </h2>

            <p className="auth-description">
              {mode === "register"
                ? "Start your journey with RaithuMitra."
                : "Enter your mobile number to sign in or get started."}
            </p>

            <form onSubmit={handleSubmit} className="auth-fields">

              {/* REGISTER FIELDS */}

              {mode === "register" && (
                <>
                  <label className="auth-label">Register as *</label>

                  <div className="role-selector">
                    <button
                      type="button"
                      className={role === "farmer" ? "selected" : ""}
                      onClick={() => {
                        setRole("farmer");
                        setMessage("");
                      }}
                    >
                      🌾 Farmer
                    </button>

                    <button
                      type="button"
                      className={role === "agent" ? "selected" : ""}
                      onClick={() => {
                        setRole("agent");
                        setMessage("");
                      }}
                    >
                      👨‍💼 Agent
                    </button>
                  </div>

                  {/* FULL NAME */}

                  <label className="auth-label">Full Name *</label>

                  <div className="auth-input-icon">
                    <User size={18} />

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  {/* EMAIL */}

                  <label className="auth-label">
                    Email Address <span>(Optional)</span>
                  </label>

                  <div className="auth-input-icon">
                    <Mail size={18} />

                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* AGENT DETAILS */}

                  {role === "agent" && (
                    <>
                      <label className="auth-label">District *</label>

                      <input
                        type="text"
                        placeholder="Enter your district"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        required
                      />

                      <label className="auth-label">Mandal *</label>

                      <input
                        type="text"
                        placeholder="Enter your mandal"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        required
                      />

                      <label className="auth-label">
                        Agent ID <span>(Optional)</span>
                      </label>

                      <input
                        type="text"
                        placeholder="Enter your agent ID"
                        value={agentId}
                        onChange={(e) => setAgentId(e.target.value)}
                      />
                    </>
                  )}
                </>
              )}

              {/* MOBILE NUMBER - BOTH LOGIN AND REGISTER */}

              <label className="auth-label">Phone Number *</label>

              <div className="auth-phone">

                <span>IN&nbsp; +91</span>

                <div className="auth-phone-input">
                  <Phone size={17} />

                  <input
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    placeholder="Enter 10-digit mobile number"
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => changeMobile(e.target.value)}
                    required
                  />
                </div>

              </div>

              {/* LOGIN HELPER TEXT */}

              {mode === "login" && !otpSent && (
                <p className="auth-phone-help">
                  We will send a 6-digit one-time verification code to this number.
                </p>
              )}

              {/* OTP FIELD */}

              {otpSent && (
                <>
                  <label className="auth-label">Verification Code *</label>

                  <input
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
                </>
              )}

              {/* TERMS AND CONDITIONS */}

              {mode === "register" && (
                <label className="auth-terms">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />

                  <span>
                    I agree to RaithuMitra{" "}
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

              {/* INLINE MESSAGE */}

              {message && (
                <div
                  className={`auth-message ${messageType}`}
                  role="status"
                  aria-live="polite"
                >
                  {message}
                </div>
              )}

              {/* GET OTP / RESEND OTP */}

              <button
                className="auth-get-otp"
                type="button"
                onClick={sendOTP}
              >
                {otpSent ? "Resend OTP" : "Get OTP"}
                <ArrowRight size={17} />
              </button>

              {/* VERIFY BUTTON - SHOW AFTER OTP REQUEST */}

              {otpSent && (
                <button className="auth-submit" type="submit">
                  {mode === "register" ? "Create Account" : "Verify & Login"}
                  <ArrowRight size={17} />
                </button>
              )}

              {/* REGISTER BUTTON BEFORE OTP */}

              {mode === "register" && !otpSent && (
                <button
                  className="auth-submit"
                  type="submit"
                  disabled={!termsAccepted}
                >
                  Create Account
                  <ArrowRight size={17} />
                </button>
              )}

            </form>

            {/* SECURITY MESSAGE */}

            <div className="auth-bottom">
              <ShieldCheck size={16} />
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
        </div>
      </div>
    </div>
  );
}
