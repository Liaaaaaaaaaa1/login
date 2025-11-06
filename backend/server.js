import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js"; // importa tus rutas de autenticación

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/auth", authRoutes); // todas las rutas de login y registro estarán bajo /api/auth

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Backend corriendo ✅");
});

// Conexión a MongoDB
const mongoURI = "mongodb+srv://liagr0207_db_user:G8qLc9Dth2KzKOqW@cluster0.cbasltb.mongodb.net/?appName=Cluster0"; // reemplaza con tu URI de Atlas, incluyendo usuario y contraseña
mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB conectado ✅"))
  .catch((err) => console.error("Error al conectar MongoDB:", err));

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT} 🚀`);
});
