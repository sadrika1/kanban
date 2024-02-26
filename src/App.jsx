import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import NotFoundPage from "./pages/notfound/NotFoundPage";
import { useState } from "react";
import ProtectedRoute from "./protectedRoute";
import TaskPage from "./pages/taskitem/TaskPage";
import { appRoutes } from "./appRoutes";
import "./App.css";
import LogoutPage from "./pages/logout/LogoutPage";
import CreateTaskModal from "./components/header/taskmodal/CreateTaskModal";

export default function App() {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <Routes>
      <Route element={<ProtectedRoute isAuth={isAuth} />}>
        <Route path={appRoutes.HOME} element={<HomePage />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.LOGOUT} element={<LogoutPage />} />
          <Route path={appRoutes.NEWTASK} element={<CreateTaskModal />}/>
        </Route>
      </Route>
      <Route path={appRoutes.LOGIN} element={<LoginPage />} />
      <Route path={appRoutes.REGISTER} element={<RegisterPage />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}
