import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput, StyleSheet, TouchableOpacity, TextInputProps } from "react-native";
import Colors from "../constants/Colors";
import useTheme from "../hooks/colorScheme";
import { View, Text } from "./Themed";

interface InputProps extends TextInputProps {
    label?: string;
}

const Style = StyleSheet.create({
    inputContainer: {
        marginBottom: 35,
        height: 60,
        position: 'relative'
    },
    label: {
        fontSize: 12,
        fontFamily: 'Gilroy-semibold',
        marginBottom: 5,
        marginHorizontal: 5,
    },
    input: {
        height: 48,
        fontSize: 16,
        fontFamily: 'Gilroy-medium',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 7,
    },
    passwordEye: {
        height: 30,
        width: 30,
        position: 'absolute',
        right: 14,
        bottom: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function Input({children}) {

    let subComponentList = Object.keys(Input);

    let subComponents = subComponentList.map((key) => {
        return React.Children.map(children, (child) =>
            child.type.name === key ? child : null
        );
    });

    return (subComponents.map((component) => component))
}

const InputText = (props: InputProps) => {

    const colorScheme = useTheme();

    return (
        <View style={Style.inputContainer}>
            {props.label && <Text style={Style.label}>{props.label}</Text>}
            <TextInput 
                {...props}
                style={[Style.input, {color: Colors[colorScheme].text, borderColor: Colors[colorScheme].borderColor}]}></TextInput>
        </View>
    )
}

const InputEmail = (props: InputProps) => {

    const colorScheme = useTheme();

    return (
        <View style={Style.inputContainer}>
            {props.label && <Text style={Style.label}>{props.label}</Text>}
            <TextInput 
                {...props} 
                style={[Style.input, {color: Colors[colorScheme].text, borderColor: Colors[colorScheme].borderColor}]}></TextInput>
        </View>
    )
}

const InputPassword = (props: InputProps) => {
    const [passwordVisible, setPasswordVisisble] = useState(false);
    const colorScheme = useTheme();

    return (
        <View style={Style.inputContainer}>
            {props.label && <Text style={Style.label}>{props.label}</Text>}
            <TextInput 
                {...props}
                secureTextEntry={!passwordVisible} 
                autoCompleteType={'password'} 
                placeholder={props.placeholder} 
                style={[Style.input, {color: Colors[colorScheme].text, borderColor: Colors[colorScheme].borderColor}]}
            ></TextInput>
            <View style={Style.passwordEye}>
                <TouchableOpacity onPress={() => setPasswordVisisble(!passwordVisible)}>
                    {!passwordVisible && <Ionicons name="ios-eye" size={24} color={Colors.gray[100]} />}
                    {passwordVisible && <Ionicons name="ios-eye-off" size={24} color={Colors.gray[100]} />}
                </TouchableOpacity>
            </View>
        </View>
    )
}


Input.Text = InputText;
Input.Email = InputEmail;
Input.Password = InputPassword;

export default Input;