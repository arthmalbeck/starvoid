import React from "react";
import RoutesApp from "./config/routes";
import { AuthProvider } from "./config/auth/auth";

function App() {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
}

export default App;