import axios from 'axios'
import { Button, Header } from 'react-native-elements'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {API_KEY} from './secrets'
export default class App extends React.Component {


  async imageRequest() {
    const data= {
  "requests":[
    {
      "image":{
        "source":{
          "imageUri":
            "https://cloud.google.com/vision/docs/images/faulkner.jpg"
        }
      },
      "features":[
        {
          "type":"LABEL_DETECTION",
          "maxResults":1
        }
      ]
    }
  ]
}
    const response = await axios.post(
      `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`, data
    )
    console.log(response.data.responses[0].labelAnnotations[0].description)
  }



  render() {
    return (
      <View >
      <Header
        style = {{ height: 300}}
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}

      />
<View style={styles.container}>
 <Button
      title='Take a Photo'
  />
    <Button
      title='Choose a Photo'
      onPress = {this.imageRequest}
    />
    </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {height: "100%",
        alignItems: 'center',
    justifyContent: 'center',
  },
});
