import React from "react-dom";

const RegisterPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <Card className="w-full max-w-md">
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