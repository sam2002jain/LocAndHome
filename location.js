import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { Alert, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import axios from 'axios';

export default function location() {

  const [pincode, setPincode]  =  useState(0);
  const[error, setError] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();

  useEffect (()=>{
    if(pincode.length===6){
      search();
    }
  },[pincode]);

  const search=()=>{
    axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
    .then((response)=>{
      if(response.data[0].Status === 'Success'){
      console.log(response.data[0].PostOffice[0].Name);
      setCity(response.data[0].PostOffice[0].Name);
      setState(response.data[0].PostOffice[0].State);
      setCountry(response.data[0].PostOffice[0].Country);
    }else{
      setError('No Result found');
      Alert.error(error);
    }
    })
    .catch((error)=>{
      console.log('error:', error);
      alert('wrong pincode');
    });
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

      <Text style={{textAlign:'center',fontSize:26,fontWeight:600,marginTop:30}}>Enter the Pincode</Text>
      <TextInput
      placeholder='enter PinCode'
      placeholderTextColor='#bbb'
      style={styles.inputbox}
      value={pincode}
      onChangeText={setPincode}
      keyboardType='numeric'
      maxLength={6}
      ></TextInput>
      <StatusBar style="auto" />

      <Text style={{textAlign:'center', fontSize:20,fontWeight:400,marginTop:20}}>City: {city}</Text>
      <Text style={{textAlign:'center', fontSize:20,fontWeight:400,marginTop:20}}>State: {state}</Text>
      <Text style={{textAlign:'center', fontSize:20,fontWeight:400,marginTop:20}}>Country: {country}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  inputbox:{
    borderWidth:1,
    borderColor:'#202124',
    width:'60%',
    alignSelf:'center',
    height:30,
    marginTop:20,
    borderRadius:10,
    textAlign:'center'
  },
});
