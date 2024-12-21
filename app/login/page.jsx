"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../login/index.module.css";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === "Boomertank349%€") {
      // Ändra "ditt-lösenord" till ett valfritt lösenord
      localStorage.setItem("authenticated", "true");
      router.push("/"); // Skicka användaren till startsidan
    } else {
      alert("Fel lösenord!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Sidan är under konstruktion</h1>
      <p>Vi arbetar hårt för att förbättra din upplevelse.</p>
      <input
        type="password"
        placeholder="Ange lösenord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: "20px", padding: "10px", fontSize: "16px" }}
      />
      <button onClick={handleLogin} style={{ padding: "10px 20px" }}>
        Logga in
      </button>
    </div>
  );
}
