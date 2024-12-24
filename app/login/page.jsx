export default function LoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === "Boomertank349%€") {
      localStorage.setItem("authenticated", "true");
      router.push("/admin"); // Redirect to an admin dashboard instead of the homepage
    } else {
      alert("Fel lösenord!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Admin Login</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: "20px", padding: "10px", fontSize: "16px" }}
      />
      <button onClick={handleLogin} style={{ padding: "10px 20px" }}>
        Log In
      </button>
    </div>
  );
}
