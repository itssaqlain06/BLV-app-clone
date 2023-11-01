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
  list,
  listSharp,
  logoWhatsapp,
} from "ionicons/icons";
import React from "react";
import "./Statistics.css";

const Statistics: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="header-area"></div>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="stat-container">
          <IonGrid>
            <IonRow>
              <IonCol>
                <b> Your Staking</b>
              </IonCol>
              <IonCol className="ion-text-end">
                <b> 100 BLV</b>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div className="stat-container avail">
          <IonGrid>
            <IonRow>
              <IonCol>
                <b> Available Rewards</b>
              </IonCol>
              <IonCol className="ion-text-end">
                <b>215 BLV</b>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="small-text">
                This is the amount of rewards that you can withdraw to your main
                wallet.
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div className="stat-container avail">
          <IonGrid>
            <IonRow>
              <IonCol>
                <b> Maximum Rewards</b>
              </IonCol>
              <IonCol className="ion-text-end">
                <b>500 BLV</b>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="small-text">
                This is the 5x Multiple of your staked amount, and includes
                staking rewards, direct rewards and team rewards.
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div className="stat-container available">
          <IonGrid>
            <IonRow>
              <IonCol>
                <b> Receivable Rewards</b>
              </IonCol>
              <IonCol className="ion-text-end">
                <b>285 BLV</b>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <b> Receivable Rewards</b>
              </IonCol>
              <IonCol className="ion-text-end">
                <b>285 BLV</b>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="small-text">
                This is the amount of rewards that you can receive after
                deducting already earned rewards from the maximum.
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div className="statWith">
          <IonGrid className="ion-text-center">
            <IonRow>
              <IonCol>
                <div className="statDet">
                  <IonTitle>Statement Details</IonTitle>
                  {/* <IonIcon icon={listSharp} /> */}
                </div>
                <div className="withRew">
                  <IonTitle>Withdrawal Rewards</IonTitle>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Statistics;
