import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <Header initialTheme={"dark"} />
      <main style={{ paddingBlock: "4rem", paddingInline: "min(8vw, 3rem)" }}>
        <div className="container">
          <div className="button-container">
            <Link to="/rest-countries-api/">
              <span className="primary-btn btn">
                <FontAwesomeIcon icon={icon({ name: "chevron-left" })} />
                Back
              </span>
            </Link>
          </div>
          <div
            className="error-message"
            style={{ textAlign: "center", marginBlock: "5rem" }}
          >
            <h2 style={{ marginBlock: "2rem" }}>Oops! Something went wrong!</h2>
            <p>Sorry, an unexpected error ocurred. Try refreshing the page.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
