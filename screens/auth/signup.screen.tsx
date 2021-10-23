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
        padding: 20,
        justifyContent: 'center'
    },
    form: {
        marginBottom: 40
    }
})

function SignUpScreen({ navigation }) {
    return(
        <View style={PageStyle.container}>
            <View style={PageStyle.form}>
                <Input.Text label={'Name'} placeholder={'Enter name'} />
                <Input.Text label={'Email'} placeholder={'Enter email'} />
                <Input.Password label="Password" placeholder="Create a password" />
            </View>
            <View>
                <Button text="Create account" 
                    onPress={() => navigation.navigate('Root')}
                />
                <View style={{paddingVertical: 10, alignItems: 'center'}}><Typography.Small>Or with</Typography.Small></View>
                <Button type="border">
                    <Image
                        source={require('../../assets/google-icon.png')}
                        style={{height: 25, width: 25, marginRight: 10}}
                     />
                    <Text>Signup with Google</Text>
                </Button>
                <View style={{paddingTop: 20, justifyContent: 'center', flexDirection: 'row'}}>
                    <Typography.Small>Already have an account?</Typography.Small>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Typography.Small style={{color: Colors.primary[100], marginLeft: 5}}>Login</Typography.Small>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default SignUpScreen;