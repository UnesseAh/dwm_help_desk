import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, roles }: {children: React.ReactNode, roles?: string[]}) {
  const { user, isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }


  if (roles && !roles.includes(user?.role)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}