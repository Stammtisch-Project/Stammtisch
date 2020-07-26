import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonButton,
	IonButtons,
	IonBackButton,
} from "@ionic/react";
import React from "react";
import "./Home.css";

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton defaultHref="/" />
					</IonButtons>
					<IonTitle>Registration</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonButton>Refresh</IonButton>
			</IonContent>
		</IonPage>
	);
};

export default Home;
