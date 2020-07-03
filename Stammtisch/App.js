import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function App() {
	const [helloWorldMessage, setHelloWorldMessage] = useState("");
	const [serverMessage, setServerMessage] = useState("");

	// fetch the message from the server and set it
	function fetchMessage() {
		fetch("http://localhost:8090/hello-stammtisch")
			.then((response) => response.text())
			.then((text) => {
				setServerMessage(text);
			});
	}

	// initially load data from the server
	useEffect(() => {
		fetchMessage();
	}, []);

	// get fetch the message from the server
	function sendMessage() {
		fetch("http://localhost:8090/hello-stammtisch", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ message: helloWorldMessage }),
		}).then(() => {
			// after new message is written, fetch the message from the server
			fetchMessage();
		});
		setHelloWorldMessage("");
	}

	return (
		<View style={styles.container}>
			<h3>Server says: {serverMessage}</h3>
			<TextInput
				placeholder="Enter hello world message"
				onChangeText={(text) => setHelloWorldMessage(text)}
				value={helloWorldMessage}
			></TextInput>
			<Button onPress={sendMessage} title="Send message to server"></Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		alignItems: "center",
		justifyContent: "center",
	},
});
