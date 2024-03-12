import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import NotFoundPage from "./pages/notfound/NotFoundPage";
import ProtectedRoute from "./protectedRoute";
import TaskPage from "./pages/taskitem/TaskPage";
import { appRoutes } from "./appRoutes";
import LogoutPage from "./pages/logout/LogoutPage";
import CreateTaskModal from "./components/header/taskmodal/CreateTaskModal";
import RegisterPage from "./pages/register/RegisterPage";
import EditTaskBrowse from "./components/taskbrowse/EditTaskBrowse";

export default function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path={appRoutes.HOME} element={<HomePage />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={"/task/:id/edit"} element={<EditTaskBrowse />} />
          <Route path={appRoutes.LOGOUT} element={<LogoutPage />} />
          <Route path={appRoutes.NEWTASK} element={<CreateTaskModal />} />
        </Route>
      </Route>
      <Route path={appRoutes.LOGIN} element={<LoginPage />} />
      <Route path={appRoutes.REGISTER} element={<RegisterPage />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}
