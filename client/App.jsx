import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectRoute from "./src/components/auth/ProtectRoute.jsx";
import Title from "./src/shared/Title.jsx";


const Home = lazy(() => import("./src/components/pages/Home.jsx"));
const Login = lazy(() => import("./src/components/pages/Login.jsx"));
const Groups = lazy(() => import("./src/components/pages/Groups.jsx"));
const Chats = lazy(() => import("./src/components/pages/Chats.jsx"));
const Loader = lazy(() => import("./src/components/layout/Loader.jsx"))
function App() {
  const [user, setUser] = useState(true);

  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>

            {/* Home */}
            <Route
              path="/"
              element={
                <>
                  <Title title="Waffle | Home" />
                  <Home />
                </>
              }
            />
            
            {/* Groups */}
            <Route
              path="/groups"
              element={
                <>
                  <Title title="Waffle | Groups" />
                  <Groups />
                </>
              }
            />
            
            {/* Chats */}
            <Route
              path="/chats/:chatID"
              element={
                <>
                  <Title title="Waffle | Chats" />
                  <Chats />
                </>
              }
            />
          </Route>

          {/* Login */}
          <Route
            path="/login"
            element={
              <>
                <Title title="Waffle | Login" />
                <Login user={user} setUser={setUser} />
              </>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;