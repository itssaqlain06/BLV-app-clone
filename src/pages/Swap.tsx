import { IonAvatar, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonLabel, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Swap.css';
import { arrowDownCircleOutline, arrowUpCircleOutline, caretUpCircleOutline, heart, lockClosed, lockClosedSharp } from 'ionicons/icons';
import BLV from '../assets/blv-token.png';
import USDB from '../assets/usdb-token.png';
import USDT from '../assets/usdt-token.png';
import BUSD from '../assets/busd-token.png';
const Swap: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <div className='header-area'>
                    </div>
                </IonToolbar>
            </IonHeader>
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
                <hr />
                <div>
                    <div className='total-stacked swap-section ion-margin-top'>
                        <IonList className='total-stacked-item ion-text-start heartText'>
                            <IonImg className='token-img' src={BLV} alt='BLV token image...' />
                            <IonText>0.00</IonText>
                            <div className="lockedIcon">
                                <IonIcon size='small' icon={lockClosedSharp} /><IonText>LOCKED</IonText>

                            </div>
                        </IonList>
                        <IonList className='total-stacked-item ion-text-end'>
                            <IonLabel className='label'>BLV</IonLabel>
                        </IonList>
                    </div>
                    <div className='total-stacked swap-section ion-margin-top'>
                        <IonList className='total-stacked-item ion-text-start heartText'>
                            <IonImg className='token-img' src={BLV} alt='BLV token image...' />
                            <IonText>0.00</IonText>
                        </IonList>
                        <IonList className='total-stacked-item ion-text-end'>
                            <IonLabel className='label'>BLV</IonLabel>
                        </IonList>
                    </div>
                    <div className='total-stacked swap-section ion-margin-top'>
                        <IonList className='total-stacked-item ion-text-start heartText'>
                            <IonImg className='token-img' src={BUSD} alt='BLV token image...' />
                            <IonText>0.00</IonText>
                        </IonList>
                        <IonList className='total-stacked-item ion-text-end'>
                            <IonLabel className='label'>USDB</IonLabel>
                        </IonList>
                    </div>
                    <div className='total-stacked swap-section ion-margin-top'>
                        <IonList className='total-stacked-item ion-text-start heartText'>
                            <IonImg className='token-img' src={USDT} alt='BLV token image...' />
                            <IonText>0.00</IonText>
                        </IonList>
                        <IonList className='total-stacked-item ion-text-end'>
                            <IonLabel className='label'>USDT</IonLabel>
                        </IonList>
                    </div>
                    <div className='total-stacked swap-section ion-margin-top'>
                        <IonList className='total-stacked-item ion-text-start heartText'>
                            <IonImg className='token-img' src={BUSD} alt='BLV token image...' />
                            <IonText>0.00</IonText>
                        </IonList>
                        <IonList className='total-stacked-item ion-text-end'>
                            <IonLabel className='label'>BUSD</IonLabel>
                        </IonList>
                    </div>

                </div>

            </IonContent>
            <div className="offers">
                <div className="offer1">
                    <IonTitle>Make Offer</IonTitle>
                </div>
                <div className="offer1">
                    <IonTitle>My Offer</IonTitle>
                </div>
            </div>
        </IonPage>
    );
};

export default Swap;