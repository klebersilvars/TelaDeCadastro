import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from '../firebaseConnect';

export default function Inicio () {

    const navigation= useNavigation();

    async function deslogar () {
        await firebase.auth().signOut();
        alert('Deslogado com sucesso!')
        navigation.navigate('Home');

        setEmail('')
        setPass('')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.txtPrincipal}>Você conseguiu logar no aplicativo!</Text>

            <TouchableOpacity style={styles.areaDeslogar} onPress={deslogar}>
                <Text style={styles.txtDeslogar}>Deslogar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252323',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtPrincipal: {
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    areaDeslogar: {
        backgroundColor: 'red',
        width: 230, 
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 15,
    },
    txtDeslogar: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    }
});

