import { StyleSheet, Text, View } from "react-native";
import React from "react";
import{String} from 'prop-types'

export function Hello(props){
    return(
        <View >
            <Text>{props.text}</Text>
            <Text style={style.text}>Hello World</Text>
            <Text style={style.text}>Hello World</Text>
        </View>
    );
}
Hello.prototype={
    children:String

}

const style=StyleSheet.create({
    text:{
        backgroundColor:'white',
        color:'yellow',
        fontSize:40,
        padding:16
    },
    text1:{

    }
});
