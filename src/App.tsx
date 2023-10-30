import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Swap from "./pages/Swap";
import Wallet from "./pages/Wallet";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Team from "./pages/Team";
import Statistics from "./pages/Statistics";
import Notification from "./pages/Notification";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Header />
      <IonRouterOutlet>
        <Redirect exact path="/" to="/home" />
        <Route exact path="/home" component={Home} />
        <Route exact path="/swap" component={Swap} />
        <Route exact path="/wallet" component={Wallet} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/statistics" component={Statistics} />
        <Route exact path="/notification" component={Notification} />
      </IonRouterOutlet>
      <Footer />
    </IonReactRouter>
  </IonApp>
);

export default App;
