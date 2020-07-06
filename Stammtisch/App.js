import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const Config = require("./utils/config");

export default function App() {
	const [helloWorldMessage, setHelloWorldMessage] = useState("");
	const [serverMessage, setServerMessage] = useState("");

	// fetch the message from the server and set it
	function fetchMessage() {
		fetch(`http://${Config.hostname}:${Config.port}/hello-stammtisch`)
			.then((response) => response.text())
			.then((text) => {
				setServerMessage(text);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	// initially load data from the server
	useEffect(() => {
		fetchMessage();
	}, []);

	// get fetch the message from the server
	function sendMessage() {
		fetch(`http://${Config.hostname}:${Config.port}/hello-stammtisch`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ message: helloWorldMessage }),
		}).catch((err) => {
			console.log(err);
		});
		setHelloWorldMessage("");
	}

	return (
		<View style={styles.container}>
			<Text>Server said: {serverMessage}</Text>
			<Button onPress={fetchMessage} title="Refresh"></Button>
			<TextInput
				placeholder="Enter hello world message"
				onChangeText={(text) => setHelloWorldMessage(text)}
				value={helloWorldMessage}
			></TextInput>
			<Button
				onPress={sendMessage}
				title="Send message to server"
			></Button>
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
