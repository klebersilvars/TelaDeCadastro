import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import firebase from '../firebaseConnect';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

console.disableYellowBox = true;


//CORES UTILIZADAS

//#5BC0EB AZUL

//#252323 PRETO

export default function Registro() {

    const[hidePass, setHidePass] = useState(true);

    const [email, setEmail] = useState('');

    const [pass, setPass] = useState('');

    const [name, setName] = useState('');

    const navigation = useNavigation();

    async function registrar() {
        
        await firebase.auth().createUserWithEmailAndPassword(email, pass)

        .then( (value) => {
            alert('Usuário cadastrado com sucesso! Faça o login.');   
        })

        .catch( (error) => {
            if(error.code === 'auth/weak-password') {
                alert('Sua senha deve ter pelo menos 6 caracteres');
                return;
            }
            if(error.code === 'auth/invalid-email') {
                alert('Email inválido, tente novamente!');
                return;
            }
            if(error.code === 'auth/email-already-exists') {
                alert('Este email já foi cadastrado, tente novamente!');
                return;
            }else{
                alert('Algo deu errado')
            }
        })

        setEmail('');
        setPass('');
        setName('');
    } //ASYNC FUNCTION REGISTRAR FINAL


    function irLogin() {
        navigation.navigate('Login');
    }


    return(
        <View style={styles.container}>
            <Text style={styles.txtPrincipal}>Registre-se abaixo.</Text> 

            <View style={styles.areaName}>
                <TextInput
                placeholder="Digite seu nome!"
                style={styles.inputName}
                onChangeText={ (texto) => setName(texto) }
                value={name}
                />
                
                <TouchableOpacity>
                    <Ionicons  name="person-circle-outline" color="black" size={35}/>
                </TouchableOpacity>
            </View> 

            <View style={styles.areaEmail}>
                
                <TextInput
                placeholder="Digite seu e-mail"
                style={styles.inputEmail}
                onChangeText={ (texto) => setEmail(texto)}
                value={email}
                />

                <TouchableOpacity>
                    <Ionicons name="mail-outline" color="black" size={30}/>
                </TouchableOpacity>
            </View>

            <View style={styles.areaPass}>

                <TextInput
                placeholder="Digite sua senha"
                style={styles.inputPass}
                onChangeText={ (texto) => setPass(texto) }
                value={pass}
                secureTextEntry={hidePass}
                />

                <TouchableOpacity onPress={ () => setHidePass(!hidePass) }>
                    <Ionicons name="eye" color="black" size={35}/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.areaRegistrar} onPress={registrar}>
                <Text style={styles.txtRegistrar}>Registrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.areaLogar} onPress={irLogin}>
                <Text style={styles.txtLogar}>Logar</Text>
            </TouchableOpacity>
        </View> //VIEW PRINCIPAL
    ); 
};

const styles = StyleSheet.create({
    container:{ 
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#252323',
        paddingTop: 200,
    },
    txtPrincipal:{
        color: '#5BC0EB',
        fontSize: 32, 
        fontWeight:'bold',
        paddingRight: 70,
        paddingLeft: 15, 
    },
    areaName:{
        backgroundColor:'white',
        width: '79%',
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        borderRadius: 5,
        alignItems: 'center'
    },
    inputName:{
        width: '85%',
        padding: 5,
        height: 40,
        fontSize: 16
    },
    areaEmail:{
        backgroundColor:'white',
        width: '79%',
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        borderRadius: 5,
        alignItems: 'center'
    },
    inputEmail:{
        width: '85%',
        padding: 5,
        height: 40,
        fontSize: 16 
    },
    areaPass:{
        backgroundColor:'white',
        width: '79%',
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        borderRadius: 5,
        alignItems: 'center'
    },
    inputPass:{
        width: '85%',
        padding: 5,
        height: 40,
        fontSize: 16  
    },
    areaRegistrar:{
        backgroundColor: '#5BC0EB',
        width: 230, 
        height: 50, 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25, 
        borderRadius: 15, 
    },
    txtRegistrar: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    areaLogar: {
        backgroundColor: '#5BC0EB',
        width: 230, 
        height: 50, 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25, 
        borderRadius: 15, 
    },
    txtLogar: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20, 
    }
})