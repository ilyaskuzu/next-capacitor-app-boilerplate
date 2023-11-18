import { IonHeader, IonToolbar, IonButton } from "@ionic/react";

export default function Home() {
  return (
    <>
      <IonHeader>
        <IonToolbar></IonToolbar>
      </IonHeader>
      <div className="startScreen">
        <IonButton shape="round" href="/start">
          Next
        </IonButton>
      </div>
    </>
  );
}
