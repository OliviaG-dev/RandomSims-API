"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const aspiration_json_1 = __importDefault(require("../data/aspiration.json"));
const challenge_json_1 = __importDefault(require("../data/challenge.json"));
const color_json_1 = __importDefault(require("../data/color.json"));
const defiTerrain_json_1 = __importDefault(require("../data/defiTerrain.json"));
const job_json_1 = __importDefault(require("../data/job.json"));
const map_json_1 = __importDefault(require("../data/map.json"));
const prefTue_json_1 = __importDefault(require("../data/prefTue.json"));
const trait_json_1 = __importDefault(require("../data/trait.json"));
const traitTerrain_json_1 = __importDefault(require("../data/traitTerrain.json"));
const app = (0, express_1.default)();
const PORT = 3000;
// Servir les fichiers d'images statiques
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../images")));
// Route pour les aspirations
app.get("/data/aspirations", (req, res) => {
    const updatedAspirations = aspiration_json_1.default.map((aspiration) => (Object.assign(Object.assign({}, aspiration), { image: `${req.protocol}://${req.get("host")}/images${aspiration.image}`, imgcat: `${req.protocol}://${req.get("host")}/images${aspiration.imgcat}` })));
    res.json(updatedAspirations);
});
// Route pour les challenges
app.get("/data/challenges", (req, res) => {
    const updatedChallenges = challenge_json_1.default.map((challenge) => (Object.assign(Object.assign({}, challenge), { img: `${req.protocol}://${req.get("host")}/images${challenge.img}` })));
    res.json(updatedChallenges);
});
// Route pour les couleurs
app.get("/data/colors", (req, res) => {
    const updatedColors = color_json_1.default.map((color) => (Object.assign({}, color)));
    res.json(updatedColors);
});
// Route pour les défis de terrain
app.get("/data/defis-terrain", (req, res) => {
    const updatedDefisTerrain = defiTerrain_json_1.default.map((defi) => (Object.assign(Object.assign({}, defi), { img: `${req.protocol}://${req.get("host")}/images${defi.img}` })));
    res.json(updatedDefisTerrain);
});
// Route pour les jobs
app.get("/data/jobs", (req, res) => {
    const updatedJobs = job_json_1.default.map((job) => (Object.assign(Object.assign({}, job), { img: `${req.protocol}://${req.get("host")}/images${job.img}` })));
    res.json(updatedJobs);
});
// Route pour les maps
app.get("/data/maps", (req, res) => {
    const updatedMaps = map_json_1.default.map((map) => (Object.assign(Object.assign({}, map), { img: `${req.protocol}://${req.get("host")}/images${map.img}` })));
    res.json(updatedMaps);
});
// Route pour les préférences de tueur
app.get("/data/preferences-tueur", (req, res) => {
    const updatedPrefTue = prefTue_json_1.default.map((pref) => (Object.assign(Object.assign({}, pref), { img: `${req.protocol}://${req.get("host")}/images${pref.img}` })));
    res.json(updatedPrefTue);
});
// Route pour les traits
app.get("/data/traits", (req, res) => {
    const updatedTraits = trait_json_1.default.map((trait) => (Object.assign(Object.assign({}, trait), { image: `${req.protocol}://${req.get("host")}/images${trait.image}` })));
    res.json(updatedTraits);
});
// Route pour les traits de terrain
app.get("/data/traits-terrain", (req, res) => {
    const updatedTraitsTerrain = traitTerrain_json_1.default.map((trait) => (Object.assign(Object.assign({}, trait), { img: `${req.protocol}://${req.get("host")}/images${trait.img}` })));
    res.json(updatedTraitsTerrain);
});
// Middleware pour gérer les erreurs 404
app.use((req, res) => {
    res.status(404).json({ error: "Route non trouvée" });
});
// Middleware pour gérer les erreurs globales
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Une erreur est survenue sur le serveur" });
});
// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map