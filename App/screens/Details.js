import { View, Text } from 'react-native'
import React from 'react';
import Style from '../style/detailsStyle';


import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const Details = ({route}) => {

  const data = route.params.weatherData;

  return (
    <View>

      <View style={Style.detailsItem}>
        <View style={Style.detailStatic}>
          <FontAwesome name='search' style={Style.detailStaticIcon}/>
          <Text style={Style.detailStaticText}>Searched:</Text>
        </View>
        <View>   
          <Text style={Style.detailDynamicText}>{data.location.name}</Text>
        </View>
      </View>

      <View style={Style.detailsItem}>
        <View style={Style.detailStatic}>
          <Entypo name='location' style={Style.detailStaticIcon}/>
          <Text style={Style.detailStaticText}>Country:</Text>
        </View>
        <View>   
          <Text style={Style.detailDynamicText}>{data.location.country}</Text>
        </View>
      </View>
      
      <View style={Style.detailsItem}>
        <View style={Style.detailStatic}>
          <Ionicons name='md-time-sharp' style={Style.detailStaticIcon}/>
          <Text style={Style.detailStaticText}>Localtime:</Text>
        </View>
        <View>   
          <Text style={Style.detailDynamicText}>{data.location.localtime}</Text>
        </View>
      </View>

      <View style={Style.detailsItem}>
        <View style={Style.detailStatic}>
          <Ionicons name='md-sunny' style={Style.detailStaticIcon}/>
          <Text style={Style.detailStaticText}>Day or night:</Text>
        </View>
        <View>   
          <Text style={Style.detailDynamicText}>{data.current.is_day == 1 ? "Day" : 'Night'}</Text>
        </View>
      </View>

      <View style={Style.detailsItem}>
        <View style={Style.detailStatic}>
          <MaterialCommunityIcons name='hydraulic-oil-temperature' style={Style.detailStaticIcon}/>
          <Text style={Style.detailStaticText}>Humidity:</Text>
        </View>
        <View>   
          <Text style={Style.detailDynamicText}>{data.current.humidity}</Text>
        </View>
      </View>

      <View style={Style.detailsItem}>
        <View style={Style.detailStatic}>
          <FontAwesome name='cloud' style={Style.detailStaticIcon}/>
          <Text style={Style.detailStaticText}>Cloud:</Text>
        </View>
        <View>   
          <Text style={Style.detailDynamicText}>{data.current.cloud}</Text>
        </View>
      </View>

      <View style={Style.detailsItem}>
        <View style={Style.detailStatic}>
          <Entypo name='thunder-cloud' style={Style.detailStaticIcon}/>
          <Text style={Style.detailStaticText}>Gust:</Text>
        </View>
        <View>   
          <Text style={Style.detailDynamicText}>{data.current.gust_mph} MPH</Text>
        </View>
      </View>

      <View style={Style.detailsItem}>
        <View style={Style.detailStatic}>
          <MaterialCommunityIcons name='weather-windy' style={Style.detailStaticIcon}/>
          <Text style={Style.detailStaticText}>Air:</Text>
        </View>
        <View>   
          <Text style={Style.detailDynamicText}>{data.current.air_quality.no2.toFixed(2)} no2</Text>
        </View>
      </View>


    </View>
  )
}

export default Details;