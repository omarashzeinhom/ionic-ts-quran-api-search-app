import {
  IonButton,
  IonCard,
  IonCardSubtitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect } from "react";
import "./Search.css";
import { useState } from "react";
import { search, book } from "ionicons/icons";

const Search = () => {
  const [userinput, setUserinput] = useState([]);
  //
  const [datasearched, setDatasearched] = useState([]);

  useEffect(() => {
    //debug userinput
    console.log(userinput);
  });

  //debug
  //console.log(setUserinput);

  const searchApi = () => {
    postSearchedAPIData().then((data) => {
      setDatasearched(data);

      const stringifiedData = JSON.stringify(data);
      console.log(stringifiedData);
    });
    console.log("api searched");
  };

  const stringDataDisplay = JSON.stringify([datasearched]);

  /** Button Search  */

  //1 async arrow function do a fetch request or a get request from the api
  //2 await
  //3 Pass the object from api as Stringied JSON to show the results

  // 4 Add function to onclick in button
  //searchapi [x]
  //display the data []

  async function postSearchedAPIData(
    url = `https://api.alquran.cloud/v1/search/${userinput}/all/en`
  ) {
    const response = await fetch(url, {
      method: "GET",
    });
    return response.json();
  }

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Quran API Search Page</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol size="12" class="ion-padding">
              <IonItem>
                <IonCard>
                  <IonCardSubtitle>
                    Page Made By Omar Abdelrahman.@2022 and Utilizing Quran
                    Cloud Free API .
                  </IonCardSubtitle>
                </IonCard>
              </IonItem>
            </IonCol>

            <IonCol size="12" class="ion-padding">
              <IonItem>
                <IonIcon icon={book} class="ion-center" />
                <IonInput
                  placeholder="Search Api here"
                  onIonChange={(event: any) =>
                    setUserinput(event.target.value!)
                  }
                />
                <IonIcon icon={search} />

                <IonButton onClick={searchApi}>Search</IonButton>
              </IonItem>
              <IonItemDivider />
            </IonCol>
            <IonCol size="12" class="ion-padding">
              <IonText class="ion-text-center">{[stringDataDisplay]}</IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Search;
