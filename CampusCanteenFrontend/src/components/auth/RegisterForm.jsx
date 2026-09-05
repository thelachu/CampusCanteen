import { Lock, Mail, User } from "lucide-react";
import InputField from "../common/InputFiled";
import { useState } from "react";
import { registerUser } from "../../api/authService";

function RegisterForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await registerUser(formData);
      onSuccess();
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Try again.",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error-text">{error}</p>}
      <InputField
        label="Name"
        icon={User}
        name="name"
        placeholder="Brad Pitt"
        value={formData.name}
        onChange={handleChange}
      />
      <InputField
        label="Email"
        icon={Mail}
        type="email"
        name="email"
        placeholder="you@college.in"
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        label="Password"
        icon={Lock}
        name="password"
        placeholder="●●●●●●●●"
        value={formData.password}
        onChange={handleChange}
        isPassword
      />
      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? "Creating account..." : "Create account"}
      </button>
    </form>
  );
}

export default RegisterForm;
