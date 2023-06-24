import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    titulo:{
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 50,
        color: 'black',
        marginLeft:10
    },
    sinopse:{
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 50,
        color: 'black',
        marginLeft:10
    },
    cabecalho:{
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 50,
        color: 'black',
        marginLeft:10,
        marginTop:50
    },
    image: {
        height: '340px',
        width: '350px',
        resizeMode: 'cover',
        margin: 10,
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 2, 
        marginTop:-20 
    },
    container: {
        backgroundColor: 'gray',
        margin: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default styles;