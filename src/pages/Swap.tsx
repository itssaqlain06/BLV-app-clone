import { IonAvatar, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Header from './Header';
import './Swap.css';
import { arrowDown, arrowDownCircleOutline, arrowUpCircleOutline } from 'ionicons/icons';

const Swap: React.FC = () => {

    return (
        <IonPage>
            <IonContent>
                <div className='header-area'>
                    <Header />
                </div>
                <IonContent className="ion-padding">
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

            </IonContent>
        </IonPage>
    );
};

export default Swap;