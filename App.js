// next style message send by user and connect firebase and then publish
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Messages from "./components/Messages";
import MainScreen from "./components/MainScreen";
var id = 5;

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{ title: "Welcome" }}
            />
            <Stack.Screen name="Messages" component={Messages} />
        </Stack.Navigator>
    );
};

// const Tweets = ({navigation}) =>(

//         <>
//    <Messages message={"this is message"} username={"vinayak"}/>
//     <Button title="View" onPress={()=>navigation.navigate("TweetDetails")}/>
//     </>
// )
// const TweetDetails = () =>(

//     <Text>hello</Text>

// )

export default function App() {
    const [username, setUsername] = useState("");

    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {},
});
