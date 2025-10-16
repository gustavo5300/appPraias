import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export function Home() {
  return(
    <SafeAreaView style = {Styles.container}>
    <StatusBar barStyle="dark-content" />
    <Image source={require('./assets/praia.jpg')} style={Styles.headerImage}/> 
    <View style={Styles.titleContainer}>
    <Text style={Styles.mainTitle}>Guia de Praias</Text>
    <Text style={Styles.subtitle}> Planeje sua Viagem</Text> 
    </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#f0f4f8',
    alignItems:'center',
  } 
})