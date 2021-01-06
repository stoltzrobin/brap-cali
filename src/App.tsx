import "./App.css";
import { BrowserRouter, Route, RouteProps, Switch } from "react-router-dom";
import styled from "@emotion/styled";

import { Table } from "./pages/Table";
import { Logger } from "./pages/Logger";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { colors } from "./components/colors";

const FullScreenWrapper = styled.div`
  width: 100%;
  padding: 2rem;

  color: ${colors.white};
`;

interface MyRouterWrapperProps extends RouteProps {
  children: React.ReactNode;
}

const MyRouteWrapper = ({ path, exact, children }: MyRouterWrapperProps) => (
  <Route path={path} exact={exact}>
    <FullScreenWrapper>{children}</FullScreenWrapper>
  </Route>
);
function App() {
  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: colors.secondary }}
    >
      <BrowserRouter>
        <Navigation />
        <Switch>
          <MyRouteWrapper path="/logger/" exact>
            <Logger />
          </MyRouteWrapper>
          <MyRouteWrapper path="/Table/">
            <Table />
          </MyRouteWrapper>
          <MyRouteWrapper path={"/"}>
            <Home />
          </MyRouteWrapper>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
