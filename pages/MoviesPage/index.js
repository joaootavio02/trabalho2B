import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import CardFilme from '../../components/CardFilme';

export default function MoviesPage() {
  const [filmes, setFilmes]= useState([]);
  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*'; // [{}{}{}]

  useEffect(function () {                                               //toda vez q a tela é iniciada
    fetch(baseURL)                                                    //requisição a um determinado indereço na web
      .then(data => data.json())                                       //retorna uma info do json 
      .then(objeto => {                                               //pega o objeto da info e da um consle.log
        console.log(objeto);
        setFilmes(objeto.data)                                      //O objeto vai ter as info q vierem em data
      })
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {filmes?.length > 0 ?
        <ScrollView horizontal>
          {
            filmes.map(filme => <CardFilme key={filme.id} filme={filme.attributes} />)
          }
        </ScrollView> : <ActivityIndicator size={'large'} />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
});
