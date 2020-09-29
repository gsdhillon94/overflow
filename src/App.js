import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import headerData from "./data/header/headerData";
import Footer from "./components/footer/Footer";
import SectionContainer from "./components/Sections/SectionContainer";
import { sectionsData } from "./data/SectionsData/sectionsData";
import Home from "./Pages/Home";
import GetStarted from "./Pages/GetStarted";
import { questionsData } from "./data/Questions/questionsData";

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
    sectionsData: sectionsData,
    questions: questionsData,
  };

  drawertoggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backDropClickHandler} />;
    }

    return (
      <Router>
        <div style={{ height: "100%" }}>
          <Header
            drawerClickHandeler={this.drawertoggleClickHandler}
            headerData={headerData}
          ></Header>
          <SideDrawer
            show={this.state.sideDrawerOpen}
            headerData={headerData}
          />
          {backDrop}
          <main>
            <Switch>
              <Route exact path="/overflow">
                <Home sectionsData={this.state.sectionsData}></Home>
              </Route>
              <Route exact path="/get-started">
                <GetStarted />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
