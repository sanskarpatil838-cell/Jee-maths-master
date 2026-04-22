window.firebaseConfig = {
  apiKey: "AIzaSyA0c_sAloWTVSBYpKHtAp2LOvCurWzTGEw",
  authDomain: "earnlearn-68952.firebaseapp.com",
  projectId: "earnlearn-68952",
  storageBucket: "earnlearn-68952.firebasestorage.app",
  messagingSenderId: "865834260760",
  appId: "1:865834260760:web:50cf5227fd46458af5666d"
};

window.isFirebaseConfigured = function isFirebaseConfigured(config) {
  if (!config) return false;

  const requiredKeys = ["apiKey", "authDomain", "projectId", "appId"];
  return requiredKeys.every((key) => {
    const value = String(config[key] || "").trim();
    return value && !value.startsWith("YOUR_");
  });
};
