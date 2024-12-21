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
      <p className="login-subheading">
        Vänligen logga in för att få tillgång till sidan.
      </p>
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
