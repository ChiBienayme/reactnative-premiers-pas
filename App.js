import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect, useState } from "react";
import {
  StyleSheet,
	View,
	ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { ActivityIndicator } from "react-native-web";

export default function App() {
  const handlePress = () => {
    console.log("PRESSABLE ALERT");
    alert(null, "Button pressed");
    setShowLoading(true);
  };

  const [showLoading, setShowLoading] = useState(false);


	return (
		<ScrollView style={styles.container}>

			<View style={styles.view}>
        <Text style={styles.text1}>Hello</Text>
        <Text style={styles.text2}>Lorem ipsum dolor sit amet.</Text>
        <Text style={styles.text3}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit eligendi nulla animi. 
        </Text>
        <Image
					style={styles.img}
					source={{
						uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png",
					}}
				/>
        <Image
					style={styles.img}
					source={require("./assets/logo.png")}
				/>
        <TouchableOpacity onPress={handlePress} style={styles.btn}>
					<Text style={styles.btnText}>Click here!</Text>
				</TouchableOpacity>
        {showLoading && <ActivityIndicator size="large" />}
      </View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "yellow",
	},
	view: {
    backgroundColor: "white",
    margin: "80 0",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: "30px",
  },
  text2: {
    alignItems: 'center',
  },
  text3: {
    fontWeight: 'bold',
  },
  img: {
		height: 100,
		width: 300,
    justifyContent: "center",
	},
  btn: {
		marginTop: 10,
		backgroundColor: "blue",
	},
	btnText: {
		color: "white",
	},
});