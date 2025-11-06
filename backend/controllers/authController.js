import User from "../models/User.js";
import bcrypt from "bcryptjs";

// Registrar usuario
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Verificar si ya existe el usuario
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "Usuario ya registrado" });

    // Hashear contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Crear usuario
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ msg: "Usuario registrado correctamente" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Login de usuario
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar usuario
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Usuario no encontrado" });

    // Validar contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Contraseña incorrecta" });

    res.status(200).json({ msg: "Login exitoso", userId: user._id, username: user.username });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
