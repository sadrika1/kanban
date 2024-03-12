import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "./contexts/usercontext";

export default function ProtectedRoute() {
  const {user} =  useUserContext()
  return user ? <Outlet /> : <Navigate to="/login" />;
}
