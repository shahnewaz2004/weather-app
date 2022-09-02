import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    detailsItem: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 20,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#333',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 2,
        
    },

    detailStatic: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    detailStaticIcon: {
        color: '#ff6b6b',
        fontSize: 17,
        paddingRight: 10,
    },

    detailStaticText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 15,
        color:'#2c3e50'
    },

    detailDynamicText: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 15,
        color: '#2980b9'
    }
})

export default Style;