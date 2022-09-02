import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import LottieView from 'lottie-react-native'

const Splash = ({navigation}) => {

    useEffect(function(){
        setTimeout(function(){
            navigation.replace('Home')
        }, 2000)
    })

  return (
    <LottieView
        autoPlay
        source={require('../src/weather.json')}
      />
  )
}

export default Splash;