import React from "react";
import { Card, CardContent } from "../Ui/Card";
import { Button } from "../Ui/Button";
import { Input } from "../Ui/Input";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black p-4">
      <Card className="w-full max-w-md shadow-lg bg-white dark:bg-gray-900 text-black dark:text-white">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center text-[#ca9728]">Connexion</h2>

          <div className="space-y-4">
            <Input type="email" placeholder="E-mail" />
            <Input type="password" placeholder="Mot de passe" />
            <Button className="w-full"><a href="/tableaudebord">Se connecter</a></Button>
          </div>

          <div className="flex justify-between text-sm text-red dark:text-gray-300">
            <a href="/reset" className="hover:underline">Mot de passe oublié ?</a>
            <a href="/demarrage" className="hover:underline text-[#ca9728]">Créer un compte</a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
