import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, StyleProp, ViewStyle, GestureResponderEvent } from 'react-native';
import Colors from '../constants/colors';

declare type ButtonType = 'primary' | 'outline';

const ButtonStyle = StyleSheet.create({
    button: {
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 14
    }
})

function Button({style, text, onPress, type}: {style?: StyleProp<ViewStyle>, text: string, onPress: ((event: GestureResponderEvent) => void), type?: ButtonType}) {
    const _type = type ? type : 'primary';
    return(
        <>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
        >
            {_type === 'primary' && <View style={[{backgroundColor: Colors.primary['100']}, ButtonStyle.button, style]}>
                <Text style={[{color: Colors.gray[20]}, ButtonStyle.text]}>{text}</Text>
               </View>}
               {_type === 'outline' && <View style={[{backgroundColor: Colors.primary['20']}, ButtonStyle.button, style]}>
                <Text style={[{color: Colors.primary[100]}, ButtonStyle.text]}>{text}</Text>
               </View>}
        </TouchableOpacity>
        </>
    );
}

export default Button;