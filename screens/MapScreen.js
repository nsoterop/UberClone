import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import MapView from 'react-native-maps'
import NavigateCard from '../components/NavigateCard'
import { createStackNavigator } from '@react-navigation/stack'
import RideOptionsCard from '../components/RideOptionsCard'
import { useNavigation } from '@react-navigation/native'
import {Icon} from "react-native-elements/dist/icons/Icon"

const MapScreen = () => {
  const Stack = createStackNavigator()
  const navigation = useNavigation()

  return (
      <View>
        <TouchableOpacity 
          onPress = {() => navigation.navigate("HomeScreen")}
          style={tw`bg-blue-500 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
          <Icon name="menu" color={"white"}/>
        </TouchableOpacity>

        <View style = {tw`h-1/2`}>
          <Map />
        </View>
          
        <View style = {tw`h-1/2`}>
          <Stack.Navigator>
            <Stack.Screen 
              name = "NavigateCard"
              component = {NavigateCard}
              options = {{
                headerShown: false
              }}
            />
            <Stack.Screen 
              name = "RideOptionsCard"
              component = {RideOptionsCard}
              options = {{
                headerShown: false
              }}
            />
          </Stack.Navigator>
        </View>
      </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})