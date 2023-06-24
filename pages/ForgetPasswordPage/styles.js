import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'gray'
    },
    imgLogo:{
        height: '200px',
        width: '200px',
        marginBottom: 15,  
        marginTop:-350,   
    },
    input:{
        border:'1px solid black',
        width: '70%',
        height: 40,
        padding: 5,
        marginBottom: 10,
        backgroundColor: 'gray',
        borderRadius:5,  
        fontWeight:'bolder' 
    },
    btnLogin: {
        border:'2px solid black',
        width: '70%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor:'red'
    },
    viewLinks:{
        marginTop: 10,
        flexDirection:'row',
        width: '70%',
        justifyContent: 'space-between',
    },
    txtBtn:{
        fontWeight:'bolder',
        fontSize: 25,
    }
})

export default styles;