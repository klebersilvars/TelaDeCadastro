import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from '../firebaseConnect';
import {Ionicons} from '@expo/vector-icons';

//CORES UTILIZADAS

//#5BC0EB AZUL

//#252323 PRETO

console.disableYellowBox = true;

export default function Login () {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    async function logar() {
        await firebase.auth().signInWithEmailAndPassword(email, pass)

        .then( (value) => {
            alert('Logado com sucesso');
            
            navigation.navigate('Inicio');

            setEmail('');
            setPass('');
        })

        .catch( (error) => {
            alert('Algo deu errado!');

            setEmail('');
            setPass('');
        })
    } //ASYNC FUNCTION DE LOGAR

    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor= "#252323" />
            <Text style={styles.txtPrincipal}>Login</Text>

            <View style={styles.areaEmail}>

            <TextInput
            placeholder="Digite seu email!"
            style={styles.inputEmail}
            value={email}
            onChangeText={ (texto)=> setEmail(texto) }
            />

            <TouchableOpacity>
                <Ionicons name="mail-outline" color="black" size={30}/>
            </TouchableOpacity> 

            </View> 

            <View style={styles.areaPass}>
                <TextInput 
                placeholder="Digite sua senha"
                style={styles.inputPass}
                value={pass}
                onChangeText={ (texto) => setPass(texto) }
                />

                <TouchableOpacity>
                    <Ionicons  name="eye" color="black" size={30}/>
                </TouchableOpacity>
            </View>

            <Text style={{ color: 'white', fontSize: 16, paddingRight: 172, paddingTop: 10, textDecorationLine: 'underline'}}>Esqueci minha senha</Text>

            <TouchableOpacity style={styles.areaLogar} onPress={logar}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Logar</Text>
            </TouchableOpacity>

            
        </View> //VIEW PRINCIPAL
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#252323',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtPrincipal: {
        color: '#5BC0EB',
        fontSize: 32, 
        fontWeight:'bold',
        paddingRight: 270,
        paddingLeft: 15, 
    },
    areaEmail: {
        backgroundColor: 'white',
        borderRadius: 5, 
        width: '80%',
        height: 40, 
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30, 
    },
    inputEmail: {
        width: '88%',
        padding: 5,
        fontSize: 18,
    },
    areaPass: {
        backgroundColor: 'white',
        borderRadius: 5, 
        width: '80%',
        height: 40, 
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30, 
    },
    inputPass: {
        width: '88%',
        padding: 5,
        fontSize: 18,
    },
    areaLogar: {
        width: 230,
        height: 50,
        backgroundColor: '#5BC0EB',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20, 
        borderRadius: 15
    }
})