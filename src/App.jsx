import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";

import NotFoundPage from "./pages/notfound/NotFoundPage";
import { useState } from "react";
import ProtectedRoute from "./protectedRoute";
import TaskPage from "./pages/taskitem/TaskPage";
import { appRoutes } from "./appRoutes";
import "./App.css";
import LogoutPage from "./pages/logout/LogoutPage";
import CreateTaskModal from "./components/header/taskmodal/CreateTaskModal";
import RegisterPage from "./pages/register/RegisterPage";

export default function App() {
  const [user, setIsUser] = useState(null);
  const navigate = useNavigate();
  function login(newUser) {
    setIsUser(newUser);
    navigate(appRoutes.HOME);
  }
  function logout() {
    setIsUser(null);
  }

  return (
    <Routes>
      <Route element={<ProtectedRoute user={user} />}>
        <Route path={appRoutes.HOME} element={<HomePage user={user} />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route
            path={appRoutes.LOGOUT}
            element={<LogoutPage logout={logout} />}
          />
          <Route path={appRoutes.NEWTASK} element={<CreateTaskModal />} />
        </Route>
      </Route>
      <Route path={appRoutes.LOGIN} element={<LoginPage login={login} />} />
      <Route path={appRoutes.REGISTER} element={<RegisterPage login={login} />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}
