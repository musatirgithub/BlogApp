import AppRouter from "./app-router/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";
import { Toaster } from "react-hot-toast";
import BlogContextProvider from "./contexts/BlogContext";

function App() {
  return (
    <AuthContextProvider>
      <BlogContextProvider>
        <Toaster position="top-right" />
          <AppRouter />
      </BlogContextProvider>
    </AuthContextProvider>
  );
}

export default App;
