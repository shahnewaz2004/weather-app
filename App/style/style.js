import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    searchContainer : {
        width: '90%',
        height: 60,
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: -1,
       marginTop: 20
    },

    input: {
        height: '100%',
        width: '100%',
        backgroundColor: "white",
        shadowColor: '#333',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 2,
        borderRadius: 100,
        paddingLeft: 45,
        fontFamily: 'Poppins_400Regular',
        fontSize: 15
    },

    locationIcon: {
        position: 'absolute',
        left: 15,
        zIndex: 1,
        fontSize: 18,
        color: '#2C3A47',
        top: '30%'
    },

    searchButton: {
        backgroundColor: '#f1f2f6',
        position: 'absolute',
        height: '82%',
        width: 110,
        right: 6,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    buttonIcon: {
        fontSize: 15,
        color: '#2C3A47'
    },

    buttonText: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 15
    },

    tempcardContainer: {
        width: '85%',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 20,
        paddingBottom: 20,
        shadowColor: '#333',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 2,
    },

    tempcardImage: {
        height: undefined,
        width: 160,
        aspectRatio: 1,
        alignSelf: 'center'
    },

    tempcardInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },

    tempcardInfoCity: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 21,
        color: '#2C3A47',
        paddingRight: 10
    },

    tempcardInfoTmp: {
        fontFamily: 'Poppins_500Medium',
        color: 'dodgerblue',
        fontSize: 28,
        paddingLeft: 10
    },

    tempcardSubImage: {
        width: 40,
        height: undefined,
        aspectRatio: 1
    },

    tempcardSubText: {
        fontFamily: 'Overpass_400Regular',
        fontSize: 16,
        color: 'gray',
        paddingRight: 10
    },

    cordinateCard: {
        backgroundColor: '#fa983a',
        width: '85%',
        alignSelf: 'center',
        marginTop: 20,
        padding: 12,
        borderRadius: 5
    },

    cordinateHeader: {
        color: 'white',
        fontFamily: 'Poppins_500Medium',
        textAlign: 'center',
        fontSize: 17,
        textTransform: 'uppercase'
    },

    cordinateInfo: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10
    },

    cordinates: {
        color: 'white',
        fontFamily: 'Poppins_400Regular',
        fontSize: 16
    },

    sliderContainer: {
        width: '90%',
        alignSelf:'center'
    },

    sliderItems: {
        backgroundColor:'white',
        width: 130,
        shadowColor: '#333',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 2,
        borderRadius: 5,
        padding: 5,
        paddingVertical: 15,
        marginVertical: 20,
        marginHorizontal: 10
    },

    sliderIcon: {
        fontSize: 25,
        textAlign: 'center'
    },

    sliderTitle: {
        fontFamily: 'Poppins_500Medium',
        textAlign: 'center',
        fontSize: 15,
        color: '#2f3542',
        marginTop: 5
    },
    
    sliderDetails: {
        fontFamily: 'Overpass_400Regular',
        color: '#3498db',
        textAlign: 'center',
        fontSize: 16,
    },

    moreButton: {
        width: '85%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor:"#1abc9c",
        borderRadius: 100,
        height: 55
    },

    moreButtonText: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 16,
        color: "white"
    },

    moreButtonIcon: {
        color: 'white',
        fontSize: 18,
        marginLeft: 15
    }
})

export default Style;