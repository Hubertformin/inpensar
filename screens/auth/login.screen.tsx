import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { View, Text } from '../../components/Themed';
import Typography from '../../components/Typography';
import Colors from '../../constants/Colors';

const PageStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 80
    },
    form: {
        marginBottom: 40
    }
})

function LoginScreen({ navigation }) {
    return(
        <View style={PageStyle.container}>
            <View style={PageStyle.form}>
                <Input.Text label={'Email'} placeholder={'Enter email'} />
                <Input.Password label="Password" placeholder="Create a password" />
                <View style={{padding: 10, flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Typography.Body style={{color: Colors.primary[100], marginLeft: 5}}>Forgot password?</Typography.Body>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Button text="Login"/>
                <View style={{paddingVertical: 10, alignItems: 'center'}}><Typography.Small>Or with</Typography.Small></View>
                <Button type="border">
                    <Image
                        source={require('../../assets/google-icon.png')}
                        style={{height: 25, width: 25, marginRight: 10}}
                     />
                    <Text>Login with Google</Text>
                </Button>
                <View style={{paddingTop: 20, justifyContent: 'center', flexDirection: 'row'}}>
                    <Typography.Small>Have an account?</Typography.Small>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Typography.Small style={{color: Colors.primary[100], marginLeft: 5}}>Create Account</Typography.Small>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default LoginScreen;