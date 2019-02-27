import { renderRoutes } from "react-router-config";

ReactDOM.render(
    <BrowserRouter>
      {/* kick it all off with the root route */}
      {renderRoutes(routes)}
    </BrowserRouter>,
    document.getElementById("root")
);