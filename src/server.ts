import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import path from "path";
import compression from "compression";

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
const PORT = process.env.PORT || 3000;

// Configuration CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://random-sims.vercel.app",
      "https://random-sims-m7ksft8nt-oliviag-devs-projects.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Accept",
      "Origin",
      "X-Requested-With",
    ],
    exposedHeaders: ["Content-Length", "Content-Type"],
    credentials: true,
    maxAge: 86400, // 24 heures
  })
);

// Ajouter des en-têtes CORS supplémentaires pour les ressources statiques
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Cross-Origin-Resource-Policy", "cross-origin");
  res.header("Cross-Origin-Embedder-Policy", "require-corp");
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  next();
});

// Ajouter la compression avec des options optimisées
app.use(
  compression({
    level: 6, // Niveau de compression équilibré
    threshold: 1024, // Compresser les réponses > 1KB
  })
);

// Servir les fichiers d'images statiques avec cache
app.use(
  "/images",
  express.static(path.join(__dirname, "../images"), {
    maxAge: "1d", // Cache les images pendant 1 jour
    etag: true,
  })
);

// Cache pour stocker les données transformées
const cache = new Map<string, any>();

// Fonction utilitaire pour transformer les URLs
const transformUrls = (data: any[], baseUrl: string) => {
  return data.map((item: any) => {
    const transformed = { ...item };
    if (item.image) transformed.image = `${baseUrl}${item.image}`;
    if (item.imgcat) transformed.imgcat = `${baseUrl}${item.imgcat}`;
    if (item.img) transformed.img = `${baseUrl}${item.img}`;
    return transformed;
  });
};

// Middleware pour ajouter les headers de cache
const addCacheHeaders = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.set("Cache-Control", "public, max-age=3600"); // Cache pendant 1 heure
  next();
};

// Route pour les aspirations
app.get(
  "/data/aspiration",
  addCacheHeaders,
  (req: Request, res: Response): void => {
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const cacheKey = `aspiration-${baseUrl}`;

    if (cache.has(cacheKey)) {
      res.json(cache.get(cacheKey));
      return;
    }

    const updatedAspirations = transformUrls(aspirations, baseUrl);
    cache.set(cacheKey, updatedAspirations);
    res.json(updatedAspirations);
  }
);

// Route pour les challenges
app.get(
  "/data/challenge",
  addCacheHeaders,
  (req: Request, res: Response): void => {
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const cacheKey = `challenge-${baseUrl}`;

    if (cache.has(cacheKey)) {
      res.json(cache.get(cacheKey));
      return;
    }

    const updatedChallenges = transformUrls(challenge, baseUrl);
    cache.set(cacheKey, updatedChallenges);
    res.json(updatedChallenges);
  }
);

// Route pour les couleurs
app.get("/data/color", addCacheHeaders, (req: Request, res: Response): void => {
  const cacheKey = "color";
  if (cache.has(cacheKey)) {
    res.json(cache.get(cacheKey));
    return;
  }
  cache.set(cacheKey, color);
  res.json(color);
});

// Route pour les défis de terrain
app.get(
  "/data/defiTerrain",
  addCacheHeaders,
  (req: Request, res: Response): void => {
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const cacheKey = `defiTerrain-${baseUrl}`;

    if (cache.has(cacheKey)) {
      res.json(cache.get(cacheKey));
      return;
    }

    const updatedDefisTerrain = transformUrls(defiTerrain, baseUrl);
    cache.set(cacheKey, updatedDefisTerrain);
    res.json(updatedDefisTerrain);
  }
);

// Route pour les jobs
app.get("/data/job", addCacheHeaders, (req: Request, res: Response): void => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  const cacheKey = `job-${baseUrl}`;

  if (cache.has(cacheKey)) {
    res.json(cache.get(cacheKey));
    return;
  }

  const updatedJobs = transformUrls(job, baseUrl);
  cache.set(cacheKey, updatedJobs);
  res.json(updatedJobs);
});

// Route pour les maps
app.get("/data/map", addCacheHeaders, (req: Request, res: Response): void => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  const cacheKey = `map-${baseUrl}`;

  if (cache.has(cacheKey)) {
    res.json(cache.get(cacheKey));
    return;
  }

  const updatedMaps = transformUrls(map, baseUrl);
  cache.set(cacheKey, updatedMaps);
  res.json(updatedMaps);
});

// Route pour les préférences de tueur
app.get(
  "/data/prefTue",
  addCacheHeaders,
  (req: Request, res: Response): void => {
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const cacheKey = `prefTue-${baseUrl}`;

    if (cache.has(cacheKey)) {
      res.json(cache.get(cacheKey));
      return;
    }

    const updatedPrefTue = transformUrls(prefTue, baseUrl);
    cache.set(cacheKey, updatedPrefTue);
    res.json(updatedPrefTue);
  }
);

// Route pour les traits
app.get("/data/trait", addCacheHeaders, (req: Request, res: Response): void => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  const cacheKey = `trait-${baseUrl}`;

  if (cache.has(cacheKey)) {
    res.json(cache.get(cacheKey));
    return;
  }

  const updatedTraits = transformUrls(trait, baseUrl);
  cache.set(cacheKey, updatedTraits);
  res.json(updatedTraits);
});

// Route pour les traits de terrain
app.get(
  "/data/traitTerrain",
  addCacheHeaders,
  (req: Request, res: Response): void => {
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const cacheKey = `traitTerrain-${baseUrl}`;

    if (cache.has(cacheKey)) {
      res.json(cache.get(cacheKey));
      return;
    }

    const updatedTraitsTerrain = transformUrls(traitTerrain, baseUrl);
    cache.set(cacheKey, updatedTraitsTerrain);
    res.json(updatedTraitsTerrain);
  }
);

// Middleware pour gérer les erreurs 404
app.use((req: Request, res: Response): void => {
  res.status(404).json({ error: "Route non trouvée" });
});

// Middleware pour gérer les erreurs globales
app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err.stack);
  res.status(500).json({ error: "Une erreur est survenue sur le serveur" });
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
