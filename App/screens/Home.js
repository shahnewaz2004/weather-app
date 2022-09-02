import {ScrollView, View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator, Keyboard, Alert} from 'react-native'
import React, {useState, useEffect} from 'react'
import Style from '../style/style';
import weather from '../src/weather.webp'
import * as Location from 'expo-location';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Home = (props) => {

    const API_KEY = 'Here will be your own API key from weatherapi.com';
    const [weatherData, setWeatherData] = useState({});
    const [seachValue, setSearchValue] = useState('');
    const [showLoading, setShowLoading] = useState(true)

    const loadData = async function(cityname){
        if(!showLoading){
            setShowLoading(true)
        }

        try{
            await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityname}&aqi=yes`)
            .then(res => res.json())
            .then(data => {
                if(data.error){
                    alert(data.error.message)
                }else{
                    setWeatherData(data)
                }

                setShowLoading(false)
            })
            .catch(error => {
                alert(error. message + 'An error occured!')
            })
        }catch(error){
            alert('An error occured')
        }
    }


    useEffect(function(){
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              alert('Turn on device location and open the app again!')
            }else{
                let location = await Location.getCurrentPositionAsync({});
                let address = await Location.reverseGeocodeAsync(location.coords);
                loadData(address[0].city)
            }
      
        })();


    }, [])

    function searchHandler(){
        if(!seachValue){
            alert('Enter your location')
        }else{
            loadData(seachValue)
        }

        Keyboard.dismiss();
    }

    function goDetails(){
        props.navigation.navigate('Details', {weatherData})
    }

  return (
    <View>

      {/* Search component starts from here */}
      <View style={Style.searchContainer}>
          <Ionicons style={Style.locationIcon} name='location-sharp' />
          <TextInput onChangeText={text => setSearchValue(text)} style={Style.input} placeholder='Location'/>
          <TouchableOpacity style={Style.searchButton} onPress={searchHandler}>
              <Ionicons style={Style.buttonIcon} name='time' />
              <Text style={Style.buttonText}>Search</Text>
          </TouchableOpacity>
      </View>
      {/* Search component ends here */}

      {
       Object.keys(weatherData).length === 0 || showLoading?
            <ActivityIndicator size={40} style={{marginTop: 30}} color="dodgerblue"/>
       : 

       <View>
      {/* TEMPERATUR CARD STARTS FROM HERE */}
        <View style={Style.tempcardContainer}>
            <Image source={weather} style={Style.tempcardImage}/>

            <View style={Style.tempcardInfo}>
                <Text style={Style.tempcardInfoCity}>{weatherData.location.name}</Text>
                <Text style={Style.tempcardInfoTmp}>{Math.floor(weatherData.current.temp_c)}°C</Text>
            </View>

            <View style={Style.tempcardInfo}>
                <Text style={Style.tempcardSubText}>{weatherData.current.condition.text}</Text>
                <Image style={Style.tempcardSubImage} source={{uri: `https:${weatherData.current.condition.icon}`}} />
            </View>
        </View>
      {/* TEMPERATUR CARD ENDS HERE */}

      {/* CORDINATE CARD STARTS FROM HERE */}
       <View style={Style.cordinateCard}>
           <Text style={Style.cordinateHeader}>Area Cordinate</Text>
           <View style={Style.cordinateInfo}>
               <Text style={Style.cordinates}>Lat: {weatherData.location.lat}°</Text>
               <Text style={Style.cordinates}>Lon: {weatherData.location.lon}°</Text>
           </View>
       </View>
      {/* CORDINATE CARD ENDS HERE */}

      {/* BOTTOM CAROUSEL STARTS FROM HERE */}
        <ScrollView style={Style.sliderContainer} horizontal showsHorizontalScrollIndicator={false}>

                <View style={Style.sliderItems}>
                    <MaterialCommunityIcons name='home' style={[Style.sliderIcon, {color: '#1abc9c'}]} />
                    <Text style={Style.sliderTitle}>Country</Text>
                    <Text style={Style.sliderDetails}>{weatherData.location.country}</Text>
                </View>
            
            <View style={Style.sliderItems}>
                <MaterialCommunityIcons name='weather-windy-variant' style={[Style.sliderIcon, {color: '#FD7272'}]} />
                <Text style={Style.sliderTitle}>Wind Speed</Text>
                <Text style={Style.sliderDetails}>{weatherData.current.wind_kph} KMH</Text>
            </View>

            <View style={Style.sliderItems}>
                <MaterialCommunityIcons name='rotate-right' style={[Style.sliderIcon, {color: '#cd84f1'}]} />
                <Text style={Style.sliderTitle}>Wind Degree</Text>
                <Text style={Style.sliderDetails}>{weatherData.current.wind_degree}°</Text>
            </View>

            <View style={Style.sliderItems}>
                <MaterialCommunityIcons name='directions' style={[Style.sliderIcon, {color: '#27ae60'}]} />
                <Text style={Style.sliderTitle}>Wind Dir</Text>
                <Text style={Style.sliderDetails}>{weatherData.current.wind_dir}</Text>
            </View>

            <View style={Style.sliderItems}>
                <FontAwesome5 name='temperature-low' style={[Style.sliderIcon, {color: '#ff7f50'}]} />
                <Text style={Style.sliderTitle}>Feels Like</Text>
                <Text style={Style.sliderDetails}>{Math.floor(weatherData.current.feelslike_c)}°C</Text>
            </View>
            
        </ScrollView>
      {/* BOTTOM CAROUSE ENDS HERE */}

      {/* SHOW MORE BUTTON STARTS HERE */}
        <TouchableOpacity onPress={goDetails} style={Style.moreButton}>
            <Text style={Style.moreButtonText}>More Details</Text>
            <Ionicons style={Style.moreButtonIcon} name='arrow-forward-circle-sharp' />
        </TouchableOpacity>
      {/* SHOW MORE BUTTON ENDS HERE */}

      </View>
     }

    </View>
  )
}

export default Home;