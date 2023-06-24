import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";


export default function LoginPage(){

const {signIn}= useContext (AuthContext);

    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={styles.imgLogo} />
            <Text style={styles.titulo}>API  FILMES</Text>
            <TextInput placeholder="Email" style={styles.input}/> 
            <TextInput placeholder="Password" style={styles.input}/> 
            <TouchableOpacity style={styles.btnLogin} onPress={() => signIn ()}>
                <Text style={styles.txtBtn}>Login</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen:"RegisterPage"}}>Registre-se</Link>
                <Link to={{screen:"ForgetPasswordPage"}}>Esqueceu a senha?</Link>
            </View>
        </View>
    )
}