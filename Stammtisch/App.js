import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./screens/LoginScreen";
import HelloWorldScreen from "./screens/HelloWorldScreen";
import RegistrationScreen from "./screens/RegistrationScreen";

const Waiter = require("./utils/waiter");
const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="ScreenSelection"
					component={ScreenSelector}
					options={{ title: "Screen Selector (Testing only)" }}
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
				style={styles.screenButton}
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
