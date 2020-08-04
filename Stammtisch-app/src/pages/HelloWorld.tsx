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
} from "@ionic/react";
import React, { useEffect, useState } from "react";

const Waiter = require("./../utils/waiter");

const Home: React.FC = () => {
	const [helloWorldMessage, setHelloWorldMessage] = useState("");
	const [serverMessage, setServerMessage] = useState("");

	// fetch the message from the server and set it
	async function fetchMessage() {
		let variable = await Waiter.get("/hello-stammtisch");
		setServerMessage(variable);
	}

	// initially load data from the server
	useEffect(() => {
		fetchMessage();
	}, []);

	// get fetch the message from the server
	async function sendMessage() {
		await Waiter.post("/hello-stammtisch", helloWorldMessage);
		setHelloWorldMessage("");
	}
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton defaultHref="/" />
					</IonButtons>
					<IonTitle>Hello World</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<h3>Server said:</h3>
				<h1>{serverMessage}</h1>
				<IonButton onClick={fetchMessage}>Refresh</IonButton>
				<hr />
				<IonInput
					value={helloWorldMessage}
					placeholder="Enter Input"
					onIonChange={(e) => setHelloWorldMessage(e.detail.value!)}
					clearInput
				></IonInput>
				<IonButton onClick={sendMessage}>
					Send message to server
				</IonButton>
			</IonContent>
		</IonPage>
	);
};

export default Home;

// 	return (
// 		<View style={styles.container}>
// 			<Text>Server said: {serverMessage}</Text>
// 			<Button onPress={fetchMessage} title="Refresh"></Button>
// 			<TextInput
// 				placeholder="Enter hello world message"
// 				onChangeText={(text) => setHelloWorldMessage(text)}
// 				value={helloWorldMessage}
// 			></TextInput>
// 			<Button
// 				onPress={sendMessage}
// 				title="Send message to server"
// 			></Button>
// 		</View>
// 	);
