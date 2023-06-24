import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";


export default function RegisterPage(){
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={styles.imgLogo} />
            <TextInput placeholder="Username" style={styles.input}/> 
            <TextInput placeholder="Email" style={styles.input}/> 
            <TextInput placeholder="Password" style={styles.input}/> 
            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.txtBtn}>Registrar</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen:"LoginPage"}}>Voltar para o Login</Link>
                <Link to={{screen:"ForgetPasswordPage"}}>Esqueceu a senha?</Link>
            </View>
        </View>
    )
}