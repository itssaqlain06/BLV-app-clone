import React from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Header.css';
import { menu, notificationsSharp } from 'ionicons/icons';

const Header: React.FC = () => {
    return (
        
        <div className='header'>
            <IonHeader>
                <IonToolbar className='header-color' color={'--ion-color-danger'}>
                    <IonButtons slot="start">
                        <IonButton>
                            <IonIcon slot='icon-only' icon={notificationsSharp} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>B-Love Network</IonTitle>
                    <IonButtons slot="end">
                        <IonButton>
                            <IonIcon slot='icon-only' icon={menu} />
                        </IonButton>
                    </IonButtons>
                    
                </IonToolbar>
            </IonHeader>
        </div>
    );
};

export default Header;