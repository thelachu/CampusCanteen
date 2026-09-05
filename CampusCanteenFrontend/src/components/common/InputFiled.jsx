import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./InputField.css";

function InputField({
  label,
  icon: Icon,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  isPassword = false,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType =
    isPassword ?
      showPassword ? "text"
      : "password"
    : type;
  return (
    <div className="field-wrapper">
      <label>{label}</label>
      <div className="input-group">
        {Icon && <Icon size={18} className="input-icon"></Icon>}
        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
        />
        {isPassword && (
          <button
            type="button"
            className="eye-toggle"
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ?
              <EyeOff size={18} />
            : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}

export default InputField;
