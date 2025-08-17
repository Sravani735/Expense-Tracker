import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL, API_PATHS } from "../../utils/apiPaths";
import Input from "../../Components/Inputs/Input";
import { UserContext } from "../../Context/userContext";
import AuthLayout from "../../Components/layouts/AuthLayout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}${API_PATHS.AUTH.LOGIN}`,
        { email, password }
      );

      console.log("Login success:", response.data);

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
      }

      if (user) {
        localStorage.setItem("user", JSON.stringify(user)); // ✅ NEW
        updateUser(user); // ✅ EXISTING
      }

      setError(null);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <AuthLayout>
        <h3 className="text-2xl font-bold text-gray-800 mb-1">Welcome Back!</h3>
        <p className="text-sm text-gray-500 mb-6">
          Please enter your details to login.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="name@example.com"
            type="text"
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 Characters"
            type="password"
          />

          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-pink-600 transition-colors"
          >
            LOGIN
          </button>

          <p className="text-sm text-center mt-4 text-gray-600">
            Don't have an account?{" "}
            <Link
              className="text-pink-500 font-medium hover:underline"
              to="/signup"
            >
              SignUp
            </Link>
          </p>
        </form>
      </AuthLayout>
    </div>
  );
};

export default Login;








