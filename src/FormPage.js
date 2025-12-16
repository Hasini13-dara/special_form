import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    city: "",
    pan: "",
    aadhaar: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const isValid = Object.values(form).every(
    (val) => val.trim() !== ""
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      navigate("/details", { state: form });
    }
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>✨ Special Registration Form</h2>

      {/* First Name */}
      <div>
        <input
          name="firstName"
          placeholder="FIRST NAME"
          value={form.firstName}
          onChange={handleChange}
          className={!form.firstName ? "error" : ""}
        />
        {!form.firstName && <span className="error-text">Required</span>}
      </div>

      {/* Last Name */}
      <div>
        <input
          name="lastName"
          placeholder="LAST NAME"
          value={form.lastName}
          onChange={handleChange}
          className={!form.lastName ? "error" : ""}
        />
        {!form.lastName && <span className="error-text">Required</span>}
      </div>

      {/* Username */}
      <div>
        <input
          name="username"
          placeholder="USERNAME"
          value={form.username}
          onChange={handleChange}
          className={!form.username ? "error" : ""}
        />
        {!form.username && <span className="error-text">Required</span>}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="EMAIL"
          value={form.email}
          onChange={handleChange}
          className={!form.email ? "error" : ""}
        />
        {!form.email && <span className="error-text">Required</span>}
      </div>

      {/* Password */}
      <div>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="PASSWORD"
          value={form.password}
          onChange={handleChange}
          className={!form.password ? "error" : ""}
        />
        {!form.password && <span className="error-text">Required</span>}
      </div>

      {/* Show Password */}
      <div className="show-password">
        <input
          type="checkbox"
          id="showPwd"
          onChange={() => setShowPassword(!showPassword)}
        />
        <label htmlFor="showPwd">Show Password</label>
      </div>

      {/* Phone */}
      <div>
        <input
          name="phone"
          placeholder="PHONE"
          value={form.phone}
          onChange={handleChange}
          className={!form.phone ? "error" : ""}
        />
        {!form.phone && <span className="error-text">Required</span>}
      </div>

      {/* Country */}
      <div>
        <input
          name="country"
          placeholder="COUNTRY"
          value={form.country}
          onChange={handleChange}
          className={!form.country ? "error" : ""}
        />
        {!form.country && <span className="error-text">Required</span>}
      </div>

      {/* City */}
      <div>
        <input
          name="city"
          placeholder="CITY"
          value={form.city}
          onChange={handleChange}
          className={!form.city ? "error" : ""}
        />
        {!form.city && <span className="error-text">Required</span>}
      </div>

      {/* PAN */}
      <div>
        <input
          name="pan"
          placeholder="PAN"
          value={form.pan}
          onChange={handleChange}
          className={!form.pan ? "error" : ""}
        />
        {!form.pan && <span className="error-text">Required</span>}
      </div>

      {/* Aadhaar */}
      <div>
        <input
          name="aadhaar"
          placeholder="AADHAAR"
          value={form.aadhaar}
          onChange={handleChange}
          className={!form.aadhaar ? "error" : ""}
        />
        {!form.aadhaar && <span className="error-text">Required</span>}
      </div>

      <button disabled={!isValid}>Submit</button>
    </form>
  );
}
