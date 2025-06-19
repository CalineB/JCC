import React, { useState } from "react";
import { Card, CardContent } from "./Ui/Card";
import { Button } from "./Ui/Button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Ui/Tabs";
import { Input } from "./Ui/Input";
import { Textarea } from "./Ui/Textarea";
import { Select, SelectItem, SelectTrigger, SelectContent } from "./Ui/Select";
import { CalendarDays, Car, User, FileText, MessageCircle, Star } from "lucide-react";

const userInfo = {
  nom: "Dupont",
  prenom: "Jean",
  email: "jean.dupont@example.com",
  telephone: "0601020304",
  adresse: "12 rue de Paris, Marseille"
};

const vehicles = [
  { marque: "Peugeot", modele: "208", immat: "AB-123-CD" },
  { marque: "Tesla", modele: "Model 3", immat: "XY-987-ZZ" }
];

const prestations = [
  { title: "Lavage intérieur", duration: "0h45" },
  { title: "Lavage extérieur", duration: "0h30" },
  { title: "Lavage complet", duration: "1h30" },
  { title: "Formule Express", duration: "1h00" },
  { title: "Formule Detailing", duration: "2h00" },
];

const heuresDisponibles = ["09:00", "10:00", "11:00", "14:00", "15:30", "17:00"];

const factures = [
  { date: "2025-06-10", prestation: "Lavage complet", lien: "/factures/1.pdf" },
  { date: "2025-05-28", prestation: "Formule Express", lien: "/factures/2.pdf" }
];

const ClientDashboard = () => {
  const [editingField, setEditingField] = useState(null);
  const [editedUserInfo, setEditedUserInfo] = useState({ ...userInfo });

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto text-gray-900 dark:text-gray-100">
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
              {Object.keys(userInfo).map(key => (
                <div key={key} className="flex items-center gap-4">
                  {editingField === key ? (
                    <>
                      <Input
                        value={editedUserInfo[key]}
                        onChange={(e) => setEditedUserInfo({ ...editedUserInfo, [key]: e.target.value })}
                      />
                      <Button onClick={() => setEditingField(null)}>Valider</Button>
                    </>
                  ) : (
                    <>
                      <span className="font-medium capitalize">{key} :</span>
                      <span>{editedUserInfo[key]}</span>
                      <Button onClick={() => setEditingField(key)}>Modifier</Button>
                    </>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button variant="destructive">Supprimer le compte</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Véhicules */}
        <TabsContent value="vehicules">
          <Card>
            <CardContent className="space-y-6 pt-6">
              {vehicles.map((veh, i) => (
                <div key={i} className="border p-4 rounded-md space-y-2">
                  <div><strong>Marque:</strong> {veh.marque}</div>
                  <div><strong>Modèle:</strong> {veh.modele}</div>
                  <div><strong>Immatriculation:</strong> {veh.immat}</div>
                  <Button>Modifier</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Rendez-vous */}
        <TabsContent value="rdv">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <Input type="date" />
              <Select>
                <SelectTrigger>Heure disponible</SelectTrigger>
                <SelectContent>
                  {heuresDisponibles.map((heure, i) => (
                    <SelectItem key={i} value={heure}>{heure}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>Choisir une prestation</SelectTrigger>
                <SelectContent>
                  {prestations.map((p, i) => (
                    <SelectItem key={i} value={p.title}>
                      {p.title} - {p.duration}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input placeholder="Lieu (domicile ou station)" />
              <Button>Réserver</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Factures */}
        <TabsContent value="factures">
          <Card>
            <CardContent className="space-y-4 pt-6">
              {factures.map((facture, i) => (
                <div key={i} className="flex items-center justify-between border-b py-2">
                  <div>
                    <p><strong>Date :</strong> {facture.date}</p>
                    <p><strong>Prestation :</strong> {facture.prestation}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => window.open(facture.lien, "_blank")}>Voir</Button>
                    <Button onClick={() => window.open(facture.lien, "_blank")} variant="outline">Télécharger</Button>
                  </div>
                </div>
              ))}
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
