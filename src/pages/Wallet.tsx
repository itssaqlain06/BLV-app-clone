import { IonAvatar, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonLabel, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Wallet.css';
import { arrowDownCircleOutline, arrowUpCircleOutline, caretUpCircleOutline, heart, lockClosed, lockClosedSharp, wallet, walletSharp } from 'ionicons/icons';
import BFIC from '../assets/BFIC-token.png';
import BLV from '../assets/blv-token.png';
import BNB from '../assets/BNB-token.png';
import USDB from '../assets/usdb-token.png';
import USDT from '../assets/usdt-token.png';
import BUSD from '../assets/busd-token.png';
import Logo from '../assets/blove-logo.png'
const Wallet: React.FC = () => {

    return (
        <IonPage>
            <IonContent>
                <div className='header-area-wallet'>
                    <div className='rewards-statics rewards-wallet'>
                        <div className="row">
                            <IonList className='background'>
                                <IonLabel>00.00 BFIC</IonLabel> <br />
                                <IonText>BFIC Available</IonText>
                            </IonList>
                            <IonList className='background ion-text-end' >
                                <IonLabel  >00.00 BLV</IonLabel> <br />
                                <IonText>BLV Available</IonText>
                            </IonList>
                        </div>
                        <div className="row">
                            <IonList className='background'>
                                <IonLabel>$20.00</IonLabel> <br />
                                <IonText>BFIC Price</IonText>
                            </IonList>
                            <IonList className='background ion-text-end'>
                                <IonLabel>$0.20</IonLabel> <br />
                                <IonText>BLV Price</IonText>
                            </IonList>
                        </div>
                    </div>
                    <div className='logo'>
                        <IonIcon icon={wallet} />
                    </div>
                </div>
                <div>
                    <div className='total-stacked swap-section ion-margin-top'>
                        <IonList className='total-stacked-item ion-text-start heartText'>
                            <IonImg className='token-img' src={BFIC} alt='BLV token image...' />
                            <IonText>0.00</IonText>
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
                            <IonImg className='token-img' src={USDB} alt='BLV token image...' />
                            <IonText>0.00</IonText>
                        </IonList>
                        <IonList className='total-stacked-item ion-text-end'>
                            <IonLabel className='label'>USDB</IonLabel>
                        </IonList>
                    </div>
                    <div className='total-stacked swap-section ion-margin-top'>
                        <IonList className='total-stacked-item ion-text-start heartText'>
                            <IonImg className='token-img' src={BNB} alt='BLV token image...' />
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
        </IonPage>
    );
};

export default Wallet;