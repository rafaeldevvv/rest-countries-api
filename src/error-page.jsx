import { useRouteError } from "react-router-dom";
import Header from "./Header";

import React from "react";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <Header initialTheme={"dark"} />
      <main>
        <div className="error-message">
          <h2>Oops! Something went wrong!</h2>
          <p>Sorry, an unexpected error ocurred. Try refreshing the page.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </main>
    </div>
  );
}
