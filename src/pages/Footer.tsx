import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { homeSharp, swapVerticalSharp, walletSharp, paw, statsChartSharp } from 'ionicons/icons';
import React from 'react';
import './Footer.css';
import { Redirect, Route, useLocation } from 'react-router';
import Home from './Home';
import Swap from './Swap';

const Footer: React.FC = () => {
    const location = useLocation();
    const currentLocation = location.pathname;

    return (
        <IonTabs>
            <IonTabBar className='icon-color' slot="bottom">
                <IonTabButton tab="home" href="/home">
                    <IonIcon style={currentLocation === '/home' ? { opacity: '1' } : {}} icon={homeSharp} />
                    <IonLabel style={currentLocation === '/home' ? { opacity: '1' } : {}} >Home</IonLabel>
                </IonTabButton>

                <IonTabButton tab="swap" href="/swap">
                    <IonIcon style={currentLocation === '/swap' ? { opacity: '1' } : {}} icon={swapVerticalSharp} />
                    <IonLabel style={currentLocation === '/swap' ? { opacity: '1' } : {}} >Swap</IonLabel>
                </IonTabButton>

                <IonTabButton tab="wallet" href="/wallet">
                    <IonIcon style={currentLocation === '/wallet' ? { opacity: '1' } : {}} icon={walletSharp} />
                    <IonLabel style={currentLocation === '/wallet' ? { opacity: '1' } : {}} >Wallet</IonLabel>
                </IonTabButton>

                <IonTabButton tab="team" href="/team">
                    <IonIcon style={currentLocation === '/team' ? { opacity: '1' } : {}} icon={paw} />
                    <IonLabel style={currentLocation === '/team' ? { opacity: '1' } : {}} >Team</IonLabel>
                </IonTabButton>
                <IonTabButton tab="statics" href="/statics">
                    <IonIcon style={currentLocation === '/statics' ? { opacity: '1' } : {}} icon={statsChartSharp} />
                    <IonLabel style={currentLocation === '/statics' ? { opacity: '1' } : {}} >Statics</IonLabel>
                </IonTabButton>
            </IonTabBar>
            <IonRouterOutlet>
                <Route exact path="/home" component={Home} />
                <Route exact path="/swap" component={Swap} />
            </IonRouterOutlet>

        </IonTabs>
    );
};

export default Footer;