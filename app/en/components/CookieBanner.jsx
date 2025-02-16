"use client";
import React, { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true); // Visa bannern om inget samtycke har sparats
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowBanner(false); // Dölj bannern
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({ essential: true }));
    setShowBanner(false); // Dölj bannern
  };

  const handleShowPreferences = () => {
    setShowPreferences(true); // Visa urval för cookie-inställningar
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowPreferences(false);
    setShowBanner(false);
  };

  const handleCheckboxChange = (type) => {
    setPreferences((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <>
      {showBanner && (
        <div style={styles.alert}>
          <p style={styles.text}>
            This website uses cookies to enhance the user experience. By
            continuing to use our website, you agree to the use of cookies in
            accordance with our{" "}
            <a href="/privacy-policy" style={styles.link}>
              privacy policy.
            </a>
            .
          </p>
          <div style={styles.buttonGroup}>
            <button onClick={handleAcceptAll} style={styles.button}>
              Accept All{" "}
            </button>
            <button onClick={handleShowPreferences} style={styles.button}>
              Customize
            </button>
            <button onClick={handleAcceptEssential} style={styles.button}>
              Only Necessary
            </button>
          </div>
        </div>
      )}

      {showPreferences && (
        <div style={styles.modal}>
          <h2 style={styles.modalTitle}>Cookie Settings</h2>
          <p style={styles.modalText}>
            Select which types of cookies you want to allow:
          </p>
          <div style={styles.checkboxGroup}>
            <label style={styles.label}>
              <input type="checkbox" checked={preferences.essential} disabled />
              Necessary Cookies (Always Required)
            </label>
            <label style={styles.label}>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={() => handleCheckboxChange("analytics")}
              />
              Analytical Cookies
            </label>
            <label style={styles.label}>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={() => handleCheckboxChange("marketing")}
              />
              Marketing Cookies
            </label>
          </div>
          <button onClick={handleSavePreferences} style={styles.button}>
            Save Preferences
          </button>
        </div>
      )}
    </>
  );
}

const styles = {
  alert: {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#2e2e2e",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    zIndex: 1000,
    maxWidth: "90%",
    textAlign: "center",
  },
  text: {
    margin: "0 0 15px 0",
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#ffffff",
  },
  link: {
    color: "#00aaff",
    textDecoration: "underline",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  button: {
    backgroundColor: "#00aaff",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "14px",
  },
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    zIndex: 1001,
    textAlign: "center",
    maxWidth: "400px",
    width: "90%",
  },
  modalTitle: {
    margin: "0 0 20px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
  },
  modalText: {
    margin: "0 0 15px",
    fontSize: "16px",
    color: "#555",
  },
  checkboxGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "20px",
  },
  label: {
    marginBottom: "10px",
    fontSize: "14px",
    color: "#333",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};
