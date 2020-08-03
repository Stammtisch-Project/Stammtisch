import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonButton,
	IonButtons,
	IonBackButton,
	IonCard,
	IonCardContent,
	IonCardTitle,
	IonCardHeader,
	IonItem,
	IonLabel,
	IonInput,
	IonCardSubtitle,
	IonDatetime,
} from "@ionic/react";
import React, { useState } from "react";
// import "./Home.css";

const Home: React.FC = () => {
	const [userName, setUserName] = useState<string>();
	const [email, setEmail] = useState<string>();
	const [birthday, setBirthday] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [passwordConfirm, setPasswordConfirm] = useState<string>();

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
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>
							Hey{userName ? " " + userName : ""}! Nice to see
							you!
						</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						<IonItem>
							<IonLabel position="floating">Username</IonLabel>
							<IonInput
								type="text"
								value={userName}
								onIonChange={(e) =>
									setUserName(e.detail.value!)
								}
							></IonInput>
							<IonItem>
								<IonLabel position="floating">
									MM DD YY
								</IonLabel>
								<IonDatetime
									displayFormat="DD MM YY"
									placeholder="Select Date"
									value={birthday}
									onIonChange={(e) =>
										setBirthday(e.detail.value!)
									}
								></IonDatetime>
							</IonItem>
						</IonItem>
					</IonCardContent>

					<IonCardSubtitle>Password</IonCardSubtitle>
					<IonCardContent>
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
						<IonItem>
							<IonLabel position="floating">
								Confirm Password
							</IonLabel>
							<IonInput
								type="password"
								value={passwordConfirm}
								onIonChange={(e) =>
									setPasswordConfirm(e.detail.value!)
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
