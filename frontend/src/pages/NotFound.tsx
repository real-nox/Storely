import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound Center">
      <h1>404</h1>
      <h4>Page not found</h4>
      <span>
        We could not find what you are looking for. It may have moved, or the
        link might be broken.
      </span>
      <div className="actions">
        <button onClick={() => navigate(-2)} className="view border">
          <ArrowLeft /> Go back
        </button>
        <button onClick={() => navigate("/")} className="add border">Take me home</button>
      </div>
    </div>
  );
}
