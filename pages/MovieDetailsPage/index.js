import React, { useEffect } from 'react';
import { Image, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";

const baseURL = "https://api.otaviolube.com";

export function MovieDetailsPage({route}){
    const navigation = useNavigation();
    const {filme} = route.params;

    useEffect(() => {
        navigation.setOptions({title: filme.titulo});
    }, [navigation, filme]);

    return(
        <View style={styles.container}>
            <Text style={styles.cabecalho}> Detalhe dos filmes</Text>
            <Image style={styles.image} source={{ uri: baseURL + filme.poster.data.attributes.formats.thumbnail.url }} />
            <Text style={styles.titulo}>{filme.titulo}</Text>
            <Text style={styles.sinopse}>{filme.sinopse}</Text>
        </View>
        
    )
}