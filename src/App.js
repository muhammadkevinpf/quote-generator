import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import RandomButton from "./component/RandomButton";
import List from "./component/List";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="relative">
          <Switch>
            <Route path="/" exact>
              <RandomButton />
              <div class="flex justify-center items-center lg:mt-24">
                <List />
              </div>
            </Route>
            <Route path="/quote/:author">
              <RandomButton />
              <div class="flex justify-center items-center lg:mt-24">
                <List />
              </div>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
