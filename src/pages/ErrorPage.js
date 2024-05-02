import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
  const location = useLocation();

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Oops! Looks like something went wrong.</h1>
        <p>No route matches URL "{location.pathname}"</p>
      </main>
    </>
  );
}

export default ErrorPage;
