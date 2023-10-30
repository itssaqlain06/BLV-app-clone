import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  arrowDownCircleOutline,
  arrowUpCircleOutline,
  logoWhatsapp,
} from "ionicons/icons";
import React from "react";
import "./Notification.css";

const Notification: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="header-area"></div>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="centered-container">
          <div className="div">
            <IonLabel>
              <h1>It's Empty</h1>
            </IonLabel>
            <br />
            Hmmm... Looks like you don't have any statements
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Notification;
