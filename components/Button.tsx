import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, StyleProp, ViewStyle, GestureResponderEvent, ActivityIndicator } from 'react-native';
import Colors from '../constants/Colors';
import useTheme from '../hooks/colorScheme';

declare type ButtonType = 'primary' | 'outline' | 'border';

const ButtonStyle = StyleSheet.create({
    button: {
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: 16,
        fontFamily: 'Inter-medium',
        fontWeight: 'bold'
    }
})

function Button({style, loading, children, text, onPress, type}: {style?: StyleProp<ViewStyle>, loading?: boolean, children?: any, text?: string, onPress?: ((event: GestureResponderEvent) => any | undefined), type?: ButtonType}) {
    const _type = type ? type : 'primary';
    const colorScheme = useTheme();
    return(
        <>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={(evt) => (onPress && !loading) ? onPress(evt) : null}
        >
            {_type === 'primary' && 
                <View style={[{backgroundColor: Colors.primary['100'], opacity: loading ? 0.7 : 1}, ButtonStyle.button, style]}>
                    {loading && <ActivityIndicator size="small" color={Colors.gray[20]} style={{marginRight: 10}} />}
                    {children ? children : <Text style={[{color: Colors.gray[20]}, ButtonStyle.text]}>{text}</Text>}
               </View>
            }
            {_type === 'outline' && 
                <View style={[{backgroundColor: Colors.primary[20], opacity: loading ? 0.7 : 1}, ButtonStyle.button, style]}>
                    {loading && <ActivityIndicator size="small" color={Colors.primary[100]} style={{marginRight: 10}} />}
                    {children ? children : <Text style={[{color: Colors.primary[100]}, ButtonStyle.text]}>{text}</Text>}
               </View>
            }
            {_type === 'border' && 
                <View style={[{borderWidth: 1, borderColor: Colors[colorScheme].borderColor, opacity: loading ? 0.7 : 1}, ButtonStyle.button, style]}>
                    {loading && <ActivityIndicator size="small" color={Colors.gray[100]} style={{marginRight: 10}} />}
                    {children ? children : <Text style={[{color: Colors.primary[100]}, ButtonStyle.text]}>{text}</Text>}
               </View>
            }
        </TouchableOpacity>
        </>
    );
}

export default Button;