import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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
    if (username === dummyUsername && password === dummyPassword) {
      setIsAuthenticated(true);
      navigate("/home");
    } else {
      setMessage("Login Gagal");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-[#e6e6e6] p-8 rounded-xl flex flex-col gap-5"
      >
        <h2>Login</h2>
        <div className="flex flex-row gap-2 items-center justify-center">
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            required
          />
        </div>
        <div className="flex flex-row gap-2 items-center justify-center">
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Login</Button>
        <p className="text-center text-red-500 text-xs">{message}</p>
      </form>
    </div>
  );
};

export default Login;
