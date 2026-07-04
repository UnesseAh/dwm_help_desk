import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles }: {children: React.ReactNode, allowedRoles?: string[]}) {
  const { isAuthenticated, user } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    // Redirect to home if they don't have the right role
    return <Navigate to="/" replace />;
  }

  return children;
}