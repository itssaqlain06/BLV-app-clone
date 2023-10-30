import { IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { arrowDownCircleOutline, arrowUpCircleOutline, logoWhatsapp } from 'ionicons/icons';
import React from 'react';
import './Team.css';

const Team: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <div className='header-area'>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div className="team-container">
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <b>  Saqlain Mushtaq</b>
                            </IonCol>
                            <IonCol className='ion-text-end'>
                                Up-Line
                            </IonCol>
                        </IonRow>
                        <IonRow className='teamText'>
                            <IonCol>
                                <IonIcon icon={logoWhatsapp} />
                                <IonText className='num'> +923415802244</IonText>
                            </IonCol>
                            <IonCol className='ion-text-end'>
                                <IonText> User id: YUGHPZ13EZ</IonText>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
                <hr />
                <div className="icon-label-container">
                    <div className="icon-label-item">
                        <IonIcon icon={arrowDownCircleOutline} />
                        <IonLabel>Deposit</IonLabel>
                    </div>
                    <div className="icon-label-item">
                        <IonIcon icon={arrowUpCircleOutline} />
                        <IonLabel>Withdraw</IonLabel>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Team;