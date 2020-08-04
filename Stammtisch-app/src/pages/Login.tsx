import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonButton,
	IonButtons,
	IonBackButton,
	IonInput,
	IonLabel,
	IonItem,
	IonCard,
	IonCardHeader,
	IonCardContent,
	IonCardTitle,
} from "@ionic/react";
import React, { useState } from "react";
// import "./Home.css";

const Home: React.FC = () => {
	const [login, setLogin] = useState<string>();
	const [password, setPassword] = useState<string>();

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton defaultHref="/" />
					</IonButtons>
					<IonTitle>Login</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>Nice to see you again!</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						<IonItem>
							<IonLabel position="floating">
								Email or username
							</IonLabel>
							<IonInput
								type="text"
								value={login}
								onIonChange={(e) => setLogin(e.detail.value!)}
							></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel position="floating">Password</IonLabel>
							<IonInput
								type="password"
								value={password}
								onIonChange={(e) =>
									setPassword(e.detail.value!)
								}
							></IonInput>
						</IonItem>
						<IonButton>Login</IonButton>
					</IonCardContent>
				</IonCard>
			</IonContent>
		</IonPage>
	);
};

export default Home;
