import React, { useState } from "react";
import { Input } from "../Ui/Input";
import { Button } from "../Ui/Button";

const Register = () => {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    pseudo: "",
    email: "",
    telephone: "",
    adresse: "",
    modeleVoiture: "",
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // envoyer données à backend, etc.
    alert("Inscription envoyée");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Inscription</h2>
      {["nom", "prenom", "pseudo", "email", "telephone", "adresse", "modeleVoiture"].map(field => (
        <Input
          key={field}
          name={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
          value={form[field]}
          onChange={handleChange}
          required
        />
      ))}
      <Button type="submit">S'inscrire</Button>
    </form>
  );
};

export default Register;
