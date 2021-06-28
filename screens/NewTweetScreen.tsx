import  React, {useState} from 'react';
import { StyleSheet, TouchableOpacity,SafeAreaView, TextInput } from 'react-native';


import { Text, View } from '../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import tweets from '../data/tweet';
import Colors from '../constants/Colors';
import ProfilePicture from '../components/ProfilePicture';


export default function NewTweetScreen() {

  const [tweet,setTweet] = useState('');
  const [imageURL,setImageUrl] = useState('');
  const onPostTweet = () => {
    console.log(`Posting the tweet: ${tweet}
     Image: ${imageURL}`);
  }
  return (
 
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
        <AntDesign name="close" size={30} color={Colors.light.tint} />
        <TouchableOpacity style={styles.button} onPress={onPostTweet}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.newTweetContainer}>
          <ProfilePicture image={'https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/86318359_10220402755489252_4183327158808084480_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=6roe---DanUAX_AK3gQ&_nc_ht=scontent-lax3-2.xx&oh=c842cbbfa3d8912b16d145f115ff3370&oe=60DDB3CC'}/>
          <View style={styles.inputsContainer}>
            <TextInput
            value= {tweet}
            onChangeText={ (value)=> setTweet(value)}
            multiline={true}
            numberOfLines={3}
            style={styles.tweetInput}
            placeholder={"What's Happening?"} 
            />
            <TextInput
            value={imageURL}
            onChangeText={ (value)=> setImageUrl(value)}
            style={styles.imageInput}
            placeholder={"Image url (optional)"} />
          </View>
          
        </View>
      </SafeAreaView>
   
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',

  },
  headerContainer:{ 
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-between',
    padding: 15,
    
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius:30,
  },
  buttonText:{
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,

  },
  newTweetContainer:{
    flexDirection: 'row',
    padding: 15,
  },
  inputsContainer:{
    marginLeft: 10,
    

  },
  tweetInput:{
    height:100,
    maxHeight: 300,
    fontSize: 18,

  },
  imageInput:{

  },
  });


