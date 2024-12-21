"use client";

import { useState } from "react"; // Se till att useState importeras korrekt
import { useRouter } from "next/navigation";
import "../globals.css"; // Importera globala CSS-stilar

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === "Boomertank349%€") {
      localStorage.setItem("authenticated", "true");
      router.push("/"); // Skicka användaren till startsidan
    } else {
      setError("Fel lösenord! Försök igen.");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Sidan är under konstruktion</h1>
      <p className="login-subheading"></p>
      <input
        type="password"
        placeholder="Ange lösenord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">
        Logga in
      </button>
      {error && <p className="login-error">{error}</p>}
    </div>
  );
}
