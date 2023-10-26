import React, { useEffect, useState } from 'react';
import { IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonLabel, IonList, IonPage, IonRow, IonText } from '@ionic/react';
import './Home.css';
import Logo from '../assets/blove-logo.png';
import Banner from '../assets/blove-banner.png';
import { chevronDownOutline, chevronUpOutline, heart, personAdd } from 'ionicons/icons';
import Header from './Header';
import Footer from './Footer';

const Home: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showItem, setShowItem] = useState(false);
  const [remainingTime, setRemainingTime] = useState(24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [remainingTime]);

  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;
  const formattedSeconds = seconds.toString().padStart(2, '0');

  const handleStats = () => {
    if (expanded) {
      setTimeout(() => {
        setShowContent(false);
      }, 100);
      setTimeout(() => {
        setShowItem(false);
      }, 220);
    } else {
      setTimeout(() => {
        setShowContent(true);
      }, 100);
      setTimeout(() => {
        setShowItem(true);
      }, 220);
    }
    setExpanded(!expanded);
  };
  return (

    <IonPage>
      <IonContent>
        <div className={`container ${expanded ? 'expanded' : ''}`}>

          <Header />

          <div className='rewards-statics'>
            <div className="row">
              <IonList className='background'>
                <IonLabel>100 BLV</IonLabel> <br />
                <IonText>My Staking</IonText>
              </IonList>
              <IonList className='background ion-text-end' >
                <IonLabel  >145.00 BLV</IonLabel> <br />
                <IonText>Staking Rewards</IonText>
              </IonList>
            </div>
            <div className="row">
              <IonList className='background'>
                <IonLabel>13</IonLabel> <br />
                <IonText>My Team</IonText>
              </IonList>
              <IonList className='background ion-text-end'>
                <IonLabel>70.00 BLV</IonLabel> <br />
                <IonText>Direct Rewards</IonText>
              </IonList>
            </div>
            <div className="row">
              <IonList className='background'>
                <IonLabel>215.00 BLV</IonLabel> <br />
                <IonText>My Rewards</IonText>
              </IonList>
              <IonList className='background ion-text-end'>
                <IonLabel>00 BLV</IonLabel> <br />
                <IonText>Team Rewards</IonText>
              </IonList>
            </div>
          </div>
          <div className='logo'>
            <IonAvatar >
              <IonImg src={Logo} />
            </IonAvatar>
          </div>
          <IonButtons className={`downArrow ${expanded ? 'upIcon' : 'downIcon'}`}>
            <IonButton onClick={handleStats}>
              <IonIcon size='large' icon={expanded ? chevronUpOutline : chevronDownOutline} />
            </IonButton>
          </IonButtons>
          {expanded ?
            <div className='expandedSection' style={{ opacity: showContent ? 1 : 0 }}>
              {showContent && (
                <div className='scrollable-content'>
                  <IonList className='background ion-text-center'>
                    <IonLabel><h1>Global Stats</h1></IonLabel>
                  </IonList>
                  <IonList className='background ion-text-center'>
                    <IonLabel>16,342,409</IonLabel> <br />
                    <IonText>Total Participants</IonText>
                  </IonList>
                  <IonList className='background ion-text-center'>
                    <IonLabel>205</IonLabel> <br />
                    <IonText>Countries</IonText>
                  </IonList>
                  <div className='total-stacked'>
                    <IonList className='total-stacked-item ion-text-start'>
                      <IonLabel>11,264,165,173 BLV</IonLabel><br />
                      <IonText>Total Staked in Pool</IonText>
                    </IonList>
                    <IonList className='total-stacked-item ion-text-end'>
                      <IonLabel>$2,252,833,035</IonLabel><br />
                      <IonText>Total Staked in Pool (USD)</IonText>
                    </IonList>
                  </div>
                  <div className='stacked'>
                    <IonList className='stacked-item ion-text-start'>
                      <IonLabel>11,264,165,173 BLV</IonLabel><br />
                      <IonText>Total Staked in Pool</IonText>
                    </IonList>
                    <IonList className='stacked-item ion-text-end'>
                      <IonLabel>$2,252,833,035</IonLabel><br />
                      <IonText>Total Staked in Pool (USD)</IonText>
                    </IonList>
                  </div>
                  <div className='total-stacked'>
                    <IonList className='total-stacked-item ion-text-start'>
                      <IonLabel>11,281,511,023 BLV</IonLabel><br />
                      <IonText>Total Withdrawals</IonText>
                    </IonList>
                    <IonList className='total-stacked-item ion-text-end'>
                      <IonLabel>$2,256,302,205</IonLabel><br />
                      <IonText>Total Withdrawals (USD)</IonText>
                    </IonList>
                  </div>
                </div>
              )}
            </div>
            : null}
        </div>
        <div className='body'>
          {expanded ? null : (
            <IonGrid>
              {showItem ? null : (
                <IonRow className='ion-margin-top' style={{ alignItems: 'center' }}>
                  <IonCol size="7.7">
                    <IonButtons>
                      <IonButton>
                        <IonIcon className='addPerson icons' size='medium' icon={personAdd} />
                        <IonLabel className='addReferralColor'>Add Referral</IonLabel>
                      </IonButton>
                    </IonButtons>
                  </IonCol>
                  <IonCol size="4">
                    <IonButtons>
                      <IonButton>
                        <IonIcon className='addPerson icons' size='medium' icon={heart} />
                        <IonLabel className='addReferralColor'>Stake BLV</IonLabel>
                      </IonButton>
                    </IonButtons>
                  </IonCol>
                  <IonCol class='body-parts'>
                    <IonList>{`${hours} h :${minutes} m :${formattedSeconds} s`}</IonList>
                    <IonLabel><h6>Time Left</h6></IonLabel>
                  </IonCol>
                  <IonCol size='12' className='bannerHead'>
                    <IonAvatar className='banner-container'>
                      <IonImg className='banner' src={Banner} alt='Tap to earn' />
                    </IonAvatar>
                  </IonCol>
                </IonRow>
              )}
            </IonGrid>
          )}

        </div>
      </IonContent>
      <Footer />
    </IonPage>

  );
};

export default Home;