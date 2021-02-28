import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity , Image } from 'react-native'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import SigninScreen from './SigninScreen';
import QuestionScreen from './QuestionScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AuthScreen({ navigation }) {
    const [emailaddress, setEmailaddress] = useState("")
    const { colors } = useTheme();

    const AuthHandler = async () => {
    
        try {
            const emailaddress = await AsyncStorage.getItem('emailaddress')
            if (emailaddress !== null) {
                console.log(emailaddress)
                setEmailaddress(emailaddress)
                navigation.replace('QuestionScreen')
            }
            else {
                navigation.replace('SigninScreen')
            }

        }
        catch (err) {
            alert(err)
        }

    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#333333' barStyle="light-content" />
            <View style={[styles.header]}>
                <Image
                    source={require('../Images/authLogo.png')}
                    style={styles.logo}
                 /> 

            </View>
            <Animatable.View
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
                animation="fadeInUpBig"
            >
                <Text style={[styles.Logotext, { color: colors.text }]}
                >
                    Welcome
                </Text>
                <Text style={[styles.title, {
                    color: colors.text
                }]}>Stay connected with C-R-System</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={AuthHandler}>
                        <LinearGradient
                            colors={['#333333', '#333333']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Get Started</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color="#fff"
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View >
    )
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        backgroundColor: '#333333',
        borderBottomRightRadius: 30,
    },
    footer: {
        flex: 0.85,
        backgroundColor: '#fff',
        paddingVertical: 30,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo,
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: '#333333',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    },
    Logotext: {
        fontWeight: 'bold',
        color: '#333333',
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 15,

    }
})
