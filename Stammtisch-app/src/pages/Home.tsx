import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonButton,
} from "@ionic/react";
import React from "react";
import "./Home.css";

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Blank</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Blank</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonButton routerLink="/login">Login</IonButton>
				<IonButton routerLink="/registration">Register</IonButton>
				<IonButton routerLink="/hello-world">Hello world</IonButton>
			</IonContent>
		</IonPage>
	);
};

export default Home;
