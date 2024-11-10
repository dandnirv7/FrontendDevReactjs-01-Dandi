import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const loginSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .regex(/^\S*$/, { message: "Password cannot contain spaces" }),
});

interface LoginProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const dummyUsername = "admin";
  const dummyPassword = "1234";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const result = loginSchema.safeParse({ username, password });
    if (result.success) {
      if (username === dummyUsername && password === dummyPassword) {
        setIsAuthenticated(true);
        navigate("/home");
      } else {
        setMessage("Incorrect username or password");
      }
    } else {
      setMessage(result.error.errors.map((err) => err.message).join(", "));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e6e6e6]">
      <div className="w-full max-w-sm p-10 bg-white shadow-xl rounded-xl">
        <h2 className="mb-8 text-3xl font-semibold text-center text-gray-800">
          Login
        </h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002b56]"
            />
          </div>
          <div>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002b56]"
            />
          </div>
          <Button
            type="submit"
            className="w-full py-3 text-white bg-[#002b56] rounded-lg hover:bg-[#001f3e] focus:ring-2 focus:ring-[#00142c]"
          >
            Login
          </Button>
          {message && (
            <p className="mt-2 text-xs text-center text-red-500">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
