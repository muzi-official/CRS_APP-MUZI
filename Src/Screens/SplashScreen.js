import React, { useEffect } from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import Login from './Login'

export default function SplashScreen({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Login")
        }, 3500)
    })
    return (
       

        <View style={styles.container}>
            <Image
                source={require('../Assets/splashLogo.png')}               
                 style={styles.splashAnimation}
            />
            <View>
                <Text style={{
                    color: '#000',
                    fontSize: 30,
                    fontWeight: 'bold',
                    letterSpacing: 5,
                    fontFamily: 'Helvetica',
                    textAlign: 'center'
                }}>
                    Campus Recruitment System

                </Text>
                <Text style={{
                    color: '#000',
                    fontSize: 16,
                    letterSpacing: 5,
                    fontFamily: 'Helvetica',
                    textAlign: 'center'
                }}>
                Developed By Syed Muzammil 

                </Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        justifyContent: "flex-start",
        alignItems: "center",
    },
    splashAnimation: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    },
})
