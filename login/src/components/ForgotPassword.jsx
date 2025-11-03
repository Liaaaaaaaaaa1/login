import React, { useState } from "react";
import { Link } from "react-router-dom";


function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleForgot = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Por favor, ingresa tu correo electrónico.");
      return;
    }

    // Simulación de como aparecería luego del envío de correo
    alert(`📧 Se ha enviado un correo con instrucciones a: ${email}`);

    // Aquí se conectaría al backend después 
    // fetch("/api/forgot-password", { method: "POST", body: JSON.stringify({ email }) })

    // Redirige al login después de enviar
    window.location.href = "/login";
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleForgot}>
        <h1>Recuperar contraseña</h1>
        <div className="input-box">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn">Enviar correo</button>

        <div className="register-link">
          <p>
            <Link to="/login">Volver al inicio de sesión</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
