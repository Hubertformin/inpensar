import React from 'react';
import { StyleSheet } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { View } from '../../components/Themed';
import Typography from '../../components/Typography';

const PageStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        padding: 50
    },
})

function ForgotPasswordScreen ({ navigation }) {
    return (
        <View style={PageStyle.container}>
            <Typography.TitleTwo style={{marginBottom: 10}}>Reset password</Typography.TitleTwo>
            <Typography.BodyLg style={{marginBottom: 20}}>Don’t worry. Enter your email and we’ll send you a link to reset your password.</Typography.BodyLg>
            <Input.Email label="Email" placeholder="Enter your email adress" />
            <Button text="Continue" />
        </View>
    );
}

export default ForgotPasswordScreen;