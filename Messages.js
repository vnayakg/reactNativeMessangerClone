import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    SafeAreaView,
    FlatList,
    TextInput,
    Button,
} from "react-native";
import { db } from './firebase';
import firebase from 'firebase'
var id =6;
function Messages({ route }) {
    const [messages, setMessages] = useState([]);
    // const [username, setUsername] = useState("");
    const [input, setInput] = useState("");

    useEffect(()=> {
        //run once when the app component loads
        db.collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot  => {
          setMessages(snapshot.docs.map(doc => ({id: doc.id , message: doc.data()})))
        } )
      }, [])


      


    const handleSend = () => {
       
    db.collection('messages').add({
      message: input,
      username: route.params.username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList
                    data={messages}
                    renderItem={(item) => {
                        const isUser =
                            item.item.message.username === route.params.username;
                        return (
                            <View
                                style={
                                    isUser
                                        ? styles.messagesUser
                                        : styles.messagesNotUser
                                }
                            >
                                <View style={styles.message}>
                                    <Text> {item.item.message.username}{" "}</Text>
                                    <Text style={styles.text}>
                                        
                                        {item.item.message.message}{" "}
                                    </Text>
                                </View>
                            </View>
                        );
                    }}
                    keyExtractor={() => (id = id + 1)}
                    
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    value={input}
                    placeholder="Enter your Message here"
                    onChangeText={(text) => setInput(text)}
                />
                <View>

                <Button style={styles.sendBtn} title="Send" onPress={handleSend} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
    },
    messagesNotUser: {
        flexWrap: "wrap",
        alignContent: "flex-start",
    },

    messagesUser: {
        flexWrap: "wrap-reverse",
        alignContent: "flex-start",
    },
    message: {
        borderRadius: 10,
        padding: 8,

        margin: 4,
        maxWidth: "55%",
        backgroundColor: "#FFF045",
    },
    text: {
        color: "#000000",
        flex: 1,
        flexWrap: "wrap",
        fontSize:18
    },

    input: {
        // justifyContent:"center",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
       padding:10,
        zIndex: 1,
        position:'absolute',
        bottom: 0,
        width:"100%",
        height: 50,
        borderColor: "#000000",
        borderRadius: 10,
        backgroundColor: "#e1e5eb",
    },
    sendBtn:{
        padding:10,
    }
});

export default Messages;
