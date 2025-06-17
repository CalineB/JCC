import React from "react";
import { Card, CardContent } from "../Ui/Card";
import { Button } from "../Ui/Button";
import { Input } from "../Ui/Input";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center text-[#ca9728]">Connexion</h2>

          <div className="space-y-4">
            <Input type="email" placeholder="E-mail" />
            <Input type="password" placeholder="Mot de passe" />
            <Button className="w-full">Se connecter</Button>
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <a href="" className="hover:underline">Mot de passe oublié ?</a>
            <a href="" className="hover:underline text-[#ca9728]">Créer un compte</a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
