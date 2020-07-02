import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
	const [helloWorldMessage, setHelloWorldMessage] = useState("");
	const [serverMessage, setServerMessage] = useState("");

	// fetch the helloWorldMessage from the server and set it
	useEffect(() => {
		fetchMessage();
	}, []);

	function sendMessage() {
		// TODO: don't log it, but write it to the server
		fetch("http://localhost:8090/hello-stammtisch", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ message: helloWorldMessage }),
		}).then(() => {
			fetchMessage();
		});
		setHelloWorldMessage("");
	}

	function fetchMessage() {
		fetch("http://localhost:8090/hello-stammtisch")
			.then((response) => response.text())
			.then((text) => {
				setServerMessage(text);
			});
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
