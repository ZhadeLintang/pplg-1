import { Navigate } from "react-router-dom";

export default function Projects() {
  // Page removed — redirect users to Students
  return <Navigate to="/students" replace />;
}
