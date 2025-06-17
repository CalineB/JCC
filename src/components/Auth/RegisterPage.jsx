import React from "react";
import { Card, CardContent } from "../Ui/Card";
import { Input } from "../Ui/Input";
import { Button } from "../Ui/Button";

const RegisterPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black p-4">
    <Card className="w-full max-w-md bg-white dark:bg-gray-900 text-black dark:text-white">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center text-[#ca9728]">Créer un compte</h2>
        <div className="space-y-4">
          <Input placeholder="Nom" />
          <Input placeholder="Prénom" />
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Mot de passe" />
          <Button className="w-full">S'inscrire</Button>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default RegisterPage;
