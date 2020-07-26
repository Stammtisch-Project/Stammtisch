import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const Waiter = require("../utils/waiter");

export default function HelloWorldScreen() {
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
	screenButton: {
		width: 20,
	},
});
