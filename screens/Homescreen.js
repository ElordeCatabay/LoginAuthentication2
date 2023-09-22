import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'



export default function HomeScreen() {


  return (
    <SafeAreaView className style="flexflex-row justify-center items-center">
      <Text style= {{
        fontSize: 50,
        marginTop: 150,
        marginBottom: 20,
        alignSelf: 'center',

      }}
      >Home page </Text>
    </SafeAreaView>
  )
}
