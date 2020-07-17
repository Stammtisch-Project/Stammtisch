import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Waiter = require("./utils/waiter");
const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="ScreenSelection"
					component={ScreenSelector}
					options={{ title: "Geh scheissn" }}
				/>
				<Stack.Screen
					name="HelloWorld"
					component={HelloWorldScreen}
					title="Hello World"
				/>
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					title="Login"
				/>
				<Stack.Screen
					name="Registration"
					component={RegistrationScreen}
					title="Registration"
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const ScreenSelector = function ({ navigation }) {
	return (
		<View>
			<Button
				onPress={() => navigation.navigate("HelloWorld")}
				title="Hello World"
			/>
			<Button
				onPress={() => navigation.navigate("Login")}
				title="Login"
			/>
			<Button
				onPress={() => navigation.navigate("Registration")}
				title="Register"
			/>
		</View>
	);
};

const LoginScreen = function () {
	return (
		<View>
			<Text>Deis is da Login, oida!</Text>
		</View>
	);
};
const RegistrationScreen = function () {
	return (
		<View>
			<Text>Registrier di, hawi!</Text>
		</View>
	);
};

const HelloWorldScreen = function ({ navigation }) {
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
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		alignItems: "center",
		justifyContent: "center",
	},
});
