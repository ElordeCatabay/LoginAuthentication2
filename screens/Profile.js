import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
  return (
    <SafeAreaView>
      <Text style={{
        fontSize: 50,
        marginTop: 150,
        marginBottom: 20,
        alignSelf: 'center',
        
      }}>Profile</Text>
    </SafeAreaView>
  )
}

export default Profile