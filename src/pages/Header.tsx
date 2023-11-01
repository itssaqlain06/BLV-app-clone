import React, { useEffect, useRef, useState } from "react";
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar,
  IonRouterLink,
  IonBackButton,
} from "@ionic/react";
import "./Header.css";
import {
  alertCircle,
  analyticsSharp,
  arrowBack,
  caretBack,
  clipboardSharp,
  close,
  documentText,
  helpCircle,
  keySharp,
  listCircle,
  lockClosedSharp,
  logOut,
  menu,
  newspaperSharp,
  notificationsSharp,
  personCircle,
  personSharp,
  pricetagsSharp,
} from "ionicons/icons";
import { useLocation } from "react-router";

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="header">
      <IonHeader>
        <IonToolbar className="header-color" color={"--ion-color-danger"}>
          <IonButtons slot="start">
            {currentPath === "/notification" ? (
              <IonBackButton defaultHref="/home" />
            ) : (
              <IonButton routerLink="/notification" routerDirection="forward">
                <IonIcon slot="icon-only" icon={notificationsSharp} />
              </IonButton>
            )}
          </IonButtons>

          <IonTitle
            className="ion-text-center"
            style={{
              marginRight: currentPath === "/notification" ? "40px" : "0",
            }}
          >
            {currentPath === "/home"
              ? "B-Love Network"
              : currentPath === "/swap"
              ? "Swap"
              : currentPath === "/wallet"
              ? "Wallet"
              : currentPath === "/team"
              ? "team"
              : currentPath === "/statistics"
              ? "Statistics"
              : currentPath === "/notification"
              ? "Notifications"
              : null}
          </IonTitle>
          <IonButtons slot="end">
            {currentPath === "/notification" ? (
              ""
            ) : (
              <IonButton onClick={openModal}>
                <IonIcon slot="icon-only" icon={menu} />
              </IonButton>
            )}
          </IonButtons>
        </IonToolbar>
        <IonModal className="modal-setting" isOpen={isModalOpen}>
          <IonHeader>
            <IonToolbar>
              <div className="setthings">
                <IonAvatar>
                  <IonImg src={personCircle} />
                </IonAvatar>
                <IonTitle>Saqlain Mushtaq</IonTitle>
              </div>
              <IonButtons slot="end">
                <IonButton onClick={closeModal}>
                  <IonIcon size="large" icon={close} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonList className="setting-icons">
              <IonItem>
                <IonAvatar slot="start">
                  {/* <IonImg src={personSharp} /> */}
                  <IonIcon size="large" icon={personSharp} />
                </IonAvatar>
                <IonLabel>
                  <h2>My Profile</h2>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonIcon size="large" icon={lockClosedSharp} />
                </IonAvatar>
                <IonLabel>
                  <h2>Change Password</h2>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonIcon size="large" icon={newspaperSharp} />
                </IonAvatar>
                <IonLabel>
                  <h2>News</h2>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonIcon size="large" icon={keySharp} />
                </IonAvatar>
                <IonLabel>
                  <h2>Private Key</h2>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonIcon size="large" icon={alertCircle} />
                </IonAvatar>
                <IonLabel>
                  <h2>About</h2>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonIcon size="large" icon={pricetagsSharp} />
                </IonAvatar>
                <IonLabel>
                  <h2>Promotions</h2>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonIcon size="large" icon={helpCircle} />
                </IonAvatar>
                <IonLabel>
                  <h2>FAQ's</h2>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonIcon size="large" icon={clipboardSharp} />
                </IonAvatar>
                <IonLabel>
                  <h2>Support</h2>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonIcon size="large" icon={documentText} />
                </IonAvatar>
                <IonLabel>
                  <h2>B-Love Network PDF</h2>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonIcon size="large" icon={analyticsSharp} />
                </IonAvatar>
                <IonLabel>
                  <h2>Connect with Us</h2>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonIcon size="large" icon={listCircle} />
                </IonAvatar>
                <IonLabel>
                  <h2>Privacy Policy</h2>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonIcon size="large" icon={logOut} />
                </IonAvatar>
                <IonLabel>
                  <h2>Logout</h2>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonModal>
      </IonHeader>
    </div>
  );
};

export default Header;
