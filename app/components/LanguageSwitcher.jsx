"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // ⚠️ Ändra till false när du vill aktivera engelska igen!
  const hideEnglishVersion = true;

  useEffect(() => {
    setIsClient(true);

    // ⚠️ Kör endast om vi är på engelska sidan och den är avstängd
    if (hideEnglishVersion && pathname.startsWith("/en")) {
      router.replace("/"); // 🚀 Säker omdirigering tillbaka till svenska startsidan
    }
  }, [pathname, router]);

  if (!isClient) return null; // Förhindra hydration error

  const isEnglish = pathname.startsWith("/en");
  const newPathname = isEnglish ? "/" : "/en";

  return (
    <button
      onClick={() => {
        if (!isEnglish && hideEnglishVersion) {
          alert("Den engelska versionen är inte tillgänglig just nu.");
        } else {
          router.push(newPathname);
        }
      }}
      style={{
        padding: "8px 16px",
        cursor: "pointer",
        backgroundColor: "#f0f0f0",
        border: "none",
        borderRadius: "5px",
        marginLeft: "10px",
      }}
    >
      {isEnglish ? "SV" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
