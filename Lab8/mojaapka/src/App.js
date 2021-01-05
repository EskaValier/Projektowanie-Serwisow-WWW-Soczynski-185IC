import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

// klasa app inicjująca działanie całej aplikacji
// obsługuje przekierowania (za pomocą router oraz switch'a) na strony z wyszukiwanymi zdjęciami
// oraz obsługuje wyjątki zwracając "brak strony" a także puste przekierowanie
class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/Wyszukiwarka">
          <div className="container">
            <Route
              render={props => (
                <Header handleSubmit={this.handleSubmit} history={props.history} />
              )}
            />
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/mountain" />}/>
              <Route path="/mountain" render={() => <Item searchTerm="mountain" />} />
              <Route path="/beach" render={() => <Item searchTerm="beach" />} />
              <Route path="/bird" render={() => <Item searchTerm="bird" />} />
              <Route path="/food" render={() => <Item searchTerm="food" />} />
              <Route
                path="/search/:searchInput"
                render={props => ( <Search searchTerm={props.match.params.searchInput} /> )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;
