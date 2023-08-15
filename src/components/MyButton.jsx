import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const style = StyleSheet.create({

    buttonContainer:{
        padding:8,
        borderRadius:4,
        backgroundColor: '#421454',
        margin:4
    },

    buttonTitle:{
        color: '#fff',
        fontSize: 18         
    }
})

const MyButton = ({title, onPressButton}) =>{
    
    return (
        <TouchableOpacity onPress={onPressButton}>
            <View style={style.buttonContainer}>
                <Text style={style.buttonTitle}>{title}</Text>
            </View>


        </TouchableOpacity>
    )
}

export default MyButton

