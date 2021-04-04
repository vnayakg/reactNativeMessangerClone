import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

function MainScreen({navigation}) {
    const [username, setUsername] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Messanger</Text>
            <View style={styles.form}>
                <TextInput
                    value={username}
                    style={styles.input}
                    placeholder="Enter your nickname"
                    onChangeText={text => setUsername(text)}
                />
                <Button 
                    style={styles.button} 
                    title="Enter"
                    onPress={()=> navigation.navigate("Messages", {username: username})} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 40,
        marginBottom: 40,
        fontWeight: "bold",
    },
    input: {
        padding: 10,

        width: 300,
        backgroundColor: "#e1e5eb",
        borderRadius: 10,
        marginBottom: 5,
    },
    button: {
        width: 30,
    },
    form: {
        justifyContent: "center",
        display: "flex",
    },
});

export default MainScreen;
