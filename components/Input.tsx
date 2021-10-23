import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { View, Text } from "./Themed";

const Style = StyleSheet.create({
    inputContainer: {
        marginBottom: 20,
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
        borderColor: Colors.gray[80],
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

const InputText = ({label, placeholder, onChange}: {label?: string, placeholder?: string, onChange?: ((text: string) => void) | undefined}) => {
    return (
        <View style={Style.inputContainer}>
            {label && <Text style={Style.label}>{label}</Text>}
            <TextInput placeholder={placeholder} style={Style.input} onChangeText={(text) => onChange ? onChange(text): null}></TextInput>
        </View>
    )
}

const InputEmail = ({label, placeholder, onChange}: {label?: string, placeholder?: string, onChange?: ((text: string) => void) | undefined}) => {
    return (
        <View style={Style.inputContainer}>
            {label && <Text style={Style.label}>{label}</Text>}
            <TextInput placeholder={placeholder} style={Style.input} autoCompleteType={'email'} onChangeText={(text) => onChange ? onChange(text): null}></TextInput>
        </View>
    )
}

const InputPassword = ({label, placeholder, onChange}: {label?: string, placeholder?: string, onChange?: ((text: string) => void) | undefined}) => {
    const [passwordVisible, setPasswordVisisble] = useState(false);

    return (
        <View style={Style.inputContainer}>
            {label && <Text style={Style.label}>{label}</Text>}
            <TextInput secureTextEntry={!passwordVisible} autoCompleteType={'password'} placeholder={placeholder} style={Style.input}></TextInput>
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