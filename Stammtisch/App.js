import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
	const [helloWorldMessage, setHelloWorldMessage] = useState("");

	// TODO: query and set the helloWorldMessage from the server

	function sendMessage() {
		// TODO: don't log it, but write it to the server
		console.log(helloWorldMessage);
		setHelloWorldMessage("");
	}

	return (
		<View style={styles.container}>
			<TextInput
				placeholder="Enter hello world message"
				onChangeText={(text) => setHelloWorldMessage(text)}
				value={helloWorldMessage}
			></TextInput>
			<Button onPress={sendMessage} title="Send message (to console)"></Button>
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
