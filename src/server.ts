import express, { Request, Response } from "express";
import path from "path";
import {
  Color,
  Aspiration,
  Challenge,
  DefiTerrain,
  Job,
  Map,
  PrefTue,
  Trait,
  TraitTerrain,
} from "../interface/interfaces";

import aspirations from "../data/aspiration.json";
import challenge from "../data/challenge.json";
import color from "../data/color.json";
import defiTerrain from "../data/defiTerrain.json";
import job from "../data/job.json";
import map from "../data/map.json";
import prefTue from "../data/prefTue.json";
import trait from "../data/trait.json";
import traitTerrain from "../data/traitTerrain.json";

const app = express();
const PORT = 3000;

// Servir les fichiers d'images statiques
app.use("/images", express.static(path.join(__dirname, "../images")));

// Route pour les aspirations
app.get("/data/aspirations", (req: Request, res: Response) => {
  const updatedAspirations = aspirations.map((aspiration: Aspiration) => ({
    ...aspiration,
    image: `${req.protocol}://${req.get("host")}/images${aspiration.image}`,
    imgcat: `${req.protocol}://${req.get("host")}/images${aspiration.imgcat}`,
  }));
  res.json(updatedAspirations);
});

// Route pour les challenges
app.get("/data/challenges", (req: Request, res: Response) => {
  const updatedChallenges = challenge.map((challenge: Challenge) => ({
    ...challenge,
    img: `${req.protocol}://${req.get("host")}/images${challenge.img}`,
  }));
  res.json(updatedChallenges);
});

// Route pour les couleurs
app.get("/data/colors", (req: Request, res: Response) => {
  const updatedColors = color.map((color: Color) => ({
    ...color,
  }));
  res.json(updatedColors);
});

// Route pour les défis de terrain
app.get("/data/defis-terrain", (req: Request, res: Response) => {
  const updatedDefisTerrain = defiTerrain.map((defi: DefiTerrain) => ({
    ...defi,
    img: `${req.protocol}://${req.get("host")}/images${defi.img}`,
  }));
  res.json(updatedDefisTerrain);
});

// Route pour les jobs
app.get("/data/jobs", (req: Request, res: Response) => {
  const updatedJobs = job.map((job: Job) => ({
    ...job,
    img: `${req.protocol}://${req.get("host")}/images${job.img}`,
  }));
  res.json(updatedJobs);
});

// Route pour les maps
app.get("/data/maps", (req: Request, res: Response) => {
  const updatedMaps = map.map((map: Map) => ({
    ...map,
    img: `${req.protocol}://${req.get("host")}/images${map.img}`,
  }));
  res.json(updatedMaps);
});

// Route pour les préférences de tueur
app.get("/data/preferences-tueur", (req: Request, res: Response) => {
  const updatedPrefTue = prefTue.map((pref: PrefTue) => ({
    ...pref,
    img: `${req.protocol}://${req.get("host")}/images${pref.img}`,
  }));
  res.json(updatedPrefTue);
});

// Route pour les traits
app.get("/data/traits", (req: Request, res: Response) => {
  const updatedTraits = trait.map((trait: Trait) => ({
    ...trait,
    image: `${req.protocol}://${req.get("host")}/images${trait.image}`,
  }));
  res.json(updatedTraits);
});

// Route pour les traits de terrain
app.get("/data/traits-terrain", (req: Request, res: Response) => {
  const updatedTraitsTerrain = traitTerrain.map((trait: TraitTerrain) => ({
    ...trait,
    img: `${req.protocol}://${req.get("host")}/images${trait.img}`,
  }));
  res.json(updatedTraitsTerrain);
});

// Middleware pour gérer les erreurs 404
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Route non trouvée" });
});

// Middleware pour gérer les erreurs globales
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).json({ error: "Une erreur est survenue sur le serveur" });
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
