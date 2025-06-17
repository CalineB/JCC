import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "../Ui/Input";
import { Button } from "../Ui/Button";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ici, appeler API ou simuler connexion
    if(email && password){
      setUser({ email }); // simuler user connecté
      navigate("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Connexion</h2>
      <Input 
        placeholder="Email" 
        type="email" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        required 
      />
      <Input 
        placeholder="Mot de passe" 
        type="password" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        required 
      />
      <Button type="submit">Se connecter</Button>
      <div className="flex justify-between">
        <Link to="/register" className="text-blue-600 underline">S'inscrire</Link>
        <button type="button" className="text-blue-600 underline">Mot de passe oublié</button>
      </div>
    </form>
  );
};

export default Login;
