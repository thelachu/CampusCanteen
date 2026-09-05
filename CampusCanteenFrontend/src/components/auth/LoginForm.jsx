import { useState } from "react";
import InputField from "../common/InputFiled";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { loginUser } from "../../api/authService";

function LoginForm({ onSuccess }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const user = await loginUser(formData);
      localStorage.setItem("user", JSON.stringify(user));
      onSuccess(user);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error-text">{error}</p>}
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
        {loading ? "Sigining in..." : "Sign In"}
        <ArrowRight size={18} />
      </button>
    </form>
  );
}

export default LoginForm;
