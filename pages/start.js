import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonButtons,
  IonBackButton,
} from "@ionic/react";

export default function Home() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <div>
        <h1>Content</h1>
      </div>
    </>
  );
}
