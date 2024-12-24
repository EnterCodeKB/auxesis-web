useEffect(() => {
  // Remove the under-construction redirect logic
  if (process.env.NODE_ENV === "production") {
    const bypass = localStorage.getItem("bypassConstruction");
    if (!bypass) {
      localStorage.setItem("bypassConstruction", "true");
    }
  }
}, []);
