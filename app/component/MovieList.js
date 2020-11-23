import React, { Component } from 'react';
import { 
  View, 
  Image, 
  Text, 
  StyleSheet, 
  TouchableWithoutFeedback, 
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

class MovieList extends Component {
  render() {
    var nowRate = this.props.rating;
    var hasHalf = false;
    var finalRate = [];

    if(nowRate % 1 !== 0) {
      nowRate = nowRate - 0.5;
      hasHalf = true;
    }

    for(let i = 0; i < nowRate; i++) {
      finalRate.push(
        <FontAwesome name="star" size={12} color="yellow" />
      )
    }

    if(hasHalf) {
      finalRate.push(
        <FontAwesome name="star-half-empty" size={12} color="yellow" />
      )

      for(let i = 0; i < 5 - (nowRate + 1.5); i++) {
        finalRate.push(
          <FontAwesome name="star-o" size={12} color="yellow" />
        )
      }
    } else {
      for(let i = 0; i < 5 - nowRate; i++) {
        finalRate.push(
          <FontAwesome name="star-o" size={12} color="yellow" />
        )
      }
    }

    return (
      <View style={styles.container}>
        <View style={{ flex: 2 }}>
          <TouchableWithoutFeedback onPress={() => alert(this.props.imageUri)}>
            <Image source={{ uri: this.props.imageUri }} style={{width: 150, height: 150, borderRadius: 20}} />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.body}>
          <Text style={{ fontSize: 8 }}>{this.props.category}</Text>
          <View style={styles.starStyle}>
            {finalRate}
          </View>
          <TouchableWithoutFeedback onPress={() => alert(this.props.imageUri)}>
            <Text style={{ fontWeight: '700' }}>{this.props.title.replace('.','')}</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    marginLeft: 20,
  },
  body: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
    alignItems: 'flex-start',
  },
  starStyle: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
  }
})

export default MovieList;
