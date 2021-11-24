import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//CORES UTILIZADAS

//#5BC0EB AZUL

//#252323 PRETO

console.disableYellowBox = true;

export default function Home() {

    const navigation = useNavigation();

    function irLogin() {   //NAVEGAÇÃO PARA A PÁGINA DE LOGIN
        navigation.navigate('Login')
    }

    function irRegistro() {  //NAVEGAÇÃO PARA A PÁGINA DE REGISTRO
        navigation.navigate('Registro')
    }


    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor= "#252323"  />
            
            <Text style={styles.txtPrincipal}>Aplicativo em construção, aguarde pŕoximas atualizações.</Text>

            <View style={styles.areaBtn}>
                <TouchableOpacity style={styles.btnLoginArea} onPress={irLogin}>
                    <Text style={styles.txtLogin}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnRegistroArea} onPress={irRegistro}>
                <Text style={styles.txtRegistro}>Registrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#252323'
    },
    txtPrincipal: {
        fontWeight: 'bold',
        fontSize: 38, 
        textAlign: 'center',
        color: '#5BC0EB',
        paddingTop: 350, 
    },
    areaBtn: {
        flex: 1, 
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    btnLoginArea: {
        width: 230, 
        height: 50,
        backgroundColor: '#5BC0EB',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtLogin: {
        fontSize: 20, 
        fontWeight: 'bold'
    },
    btnRegistroArea: {
        width: 230, 
        height: 50,
        backgroundColor: '#5BC0EB',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 40,  
    },
    txtRegistro: {
        fontSize: 20, 
        fontWeight: 'bold'
    }
});