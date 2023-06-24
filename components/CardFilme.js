import { Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./style";
import { Link } from "@react-navigation/native";

const baseURL = "https://api.otaviolube.com";


export default function CardFilme({ filme }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: baseURL + filme.poster.data.attributes.formats.thumbnail.url }} />
            <Text style={styles.title}>{filme.titulo}</Text>
            <View style={styles.desc}>
                <Text style={styles.sinopse} >{filme.sinopse.length > 200 ? filme.sinopse.substring(0,) + "..." : filme.sinopse}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Comprar</Text>
            </TouchableOpacity>
                <Link to={{screen: "MovieDetailsPage", params:{filme: filme}}}>Saiba mais ...</Link>
        </View>
    )
}

