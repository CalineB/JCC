import React from "react";
import { Card, CardContent } from "./Ui/Card";
import { Button } from "./Ui/Button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Ui/Tabs";
import { Input } from "./Ui/Input";
import { Textarea } from "./Ui/Textarea";
import { CalendarDays, Car, User, FileText, MessageCircle, Star } from "lucide-react";

const ClientDashboard = () => {
  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#ca9728]">Espace Client</h1>
      <Tabs defaultValue="infos" className="space-y-4">
        <TabsList className="flex flex-wrap gap-2">
          <TabsTrigger value="infos"><User className="mr-2 h-4 w-4" /> Infos perso</TabsTrigger>
          <TabsTrigger value="vehicules"><Car className="mr-2 h-4 w-4" /> Véhicules</TabsTrigger>
          <TabsTrigger value="rdv"><CalendarDays className="mr-2 h-4 w-4" /> Rendez-vous</TabsTrigger>
          <TabsTrigger value="factures"><FileText className="mr-2 h-4 w-4" /> Factures</TabsTrigger>
          <TabsTrigger value="avis"><Star className="mr-2 h-4 w-4" /> Avis</TabsTrigger>
          <TabsTrigger value="support"><MessageCircle className="mr-2 h-4 w-4" /> Support</TabsTrigger>
        </TabsList>

        {/* Infos perso */}
        <TabsContent value="infos">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <Input placeholder="Nom" />
              <Input placeholder="Prénom" />
              <Input placeholder="E-mail" />
              <Input placeholder="Téléphone" />
              <Input placeholder="Adresse (facultatif)" />
              <Button>Enregistrer</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Véhicules */}
        <TabsContent value="vehicules">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <Input placeholder="Marque" />
              <Input placeholder="Modèle" />
              <Input placeholder="Immatriculation" />
              <Button>Ajouter un véhicule</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Rendez-vous */}
        <TabsContent value="rdv">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <Input type="date" />
              <Input placeholder="Type de prestation (ex: lavage complet)" />
              <Input placeholder="Lieu (domicile ou station)" />
              <Button>Réserver</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Factures */}
        <TabsContent value="factures">
          <Card>
            <CardContent className="pt-6">
              <p>Télécharger vos factures en PDF.</p>
              <Button>Télécharger</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Avis */}
        <TabsContent value="avis">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <Textarea placeholder="Laissez votre avis ici..." />
              <Button>Envoyer</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Support */}
        <TabsContent value="support">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <Textarea placeholder="Décrivez votre problème ou question..." />
              <Button>Contacter le support</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClientDashboard;
