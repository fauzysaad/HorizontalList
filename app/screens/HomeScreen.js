import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView } from 'react-native';
import MovieList from '../component/MovieList';

import * as m from '../api/movie';

function HomeScreen(props) {
  const [value, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.search}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder="Search movie title..."
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.inText}>
          New releases
        </Text>
        <View style={{ paddingTop: 20, height: '45%' }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {
              m.data.map((mv) => {
                return (
                  <MovieList
                    imageUri={mv.image.uri}
                    title={mv.title}
                    category={mv.category}
                    rating={mv.rating}
                    key={mv.id}
                  />
                )
              })
            }
          </ScrollView>
        </View>
      </View>   
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    justifyContent: 'flex-start',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#3385ff',
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inText: {
    fontSize: 22,
    fontWeight: '700',
    paddingHorizontal: 20,
  },
  search: { 
    paddingHorizontal: 15,
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    backgroundColor: '#fff',
    width: '85%',
    marginBottom: 20,
    borderRadius: 20,
  }
})

export default HomeScreen;