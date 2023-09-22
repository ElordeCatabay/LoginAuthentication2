import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView, withSafeAreaInsets } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import COLORS from '../constants/colors'

export default function Settings() {
  const handleLogout = async () => {
    await signOut(auth);
  }
  return (
    <SafeAreaView >
    
      <Text style={{
        fontSize: 50,
        marginTop: 150,
        marginBottom: 20,
        alignSelf: 'center',
        
        }}>Settings Page</Text>

      <TouchableOpacity
        onPress={handleLogout}
      >
        <Text style= {{
           color: COLORS.white,
           fontSize: 40,
           marginTop: 50,
           marginBottom: 4,
           alignSelf: 'center',
           backgroundColor: COLORS.red,
           borderRadius: 15,
        
        }}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
