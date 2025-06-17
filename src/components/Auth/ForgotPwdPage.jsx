import React from "react";
import { Card, CardContent } from "../Ui/Card";
import { Input } from "../Ui/Input";
import { Button } from "../Ui/Button";

const ForgotPwdPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black p-4">
    <Card className="w-full max-w-md bg-white dark:bg-gray-900 text-black dark:text-white">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center text-[#ca9728]">Mot de passe oublié</h2>
        <p className="text-sm text-white dark:text-gray-300 text-center">
          Entrez votre email pour recevoir un lien de réinitialisation.
        </p>
        <Input type="email" placeholder="E-mail" />
        <Button className="w-full">Envoyer le lien</Button>
      </CardContent>
    </Card>
  </div>
);

export default ForgotPwdPage;
