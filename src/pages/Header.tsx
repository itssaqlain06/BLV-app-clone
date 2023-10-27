import React from 'react';
import { IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
import './Header.css';
import { menu, notificationsSharp } from 'ionicons/icons';
import { useLocation } from 'react-router';

const Header: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return (

        <div className='header'>
            <IonHeader>
                <IonToolbar className='header-color' color={'--ion-color-danger'}>
                    <IonButtons slot="start">
                        <IonButton>
                            <IonIcon slot='icon-only' icon={notificationsSharp} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle className='ion-text-center'>
                        {currentPath === '/home' ? 'B-Love Network' : currentPath === '/swap' ? 'Swap' :
                            currentPath === '/wallet' ? 'Wallet' : null}
                    </IonTitle>
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