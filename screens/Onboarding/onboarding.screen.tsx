import PageView from 'react-native-pager-view';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import { View } from '../../components/Themed';
import Typography from '../../components/Typography';
import Layout from '../../constants/Layout';

const PageStyle = StyleSheet.create({
    pageView: { 
        height: Layout.window.height * 0.65, 
        marginBottom: 50 
    },
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 30
    },
    image: {
        height: 250, 
        marginBottom: 10
    }
})

function OnboardingScreen({ navigation }) {
    return (
        <View style={{ paddingVertical: 20, flex: 1,  justifyContent: 'center', alignContent: 'center' }}>
            <PageView style={PageStyle.pageView}
                showPageIndicator={true}
            >
                <View style={PageStyle.container} key="1">
                    <Image 
                        source={require('../../assets/onboarding_one.png')} 
                        resizeMode="cover"
                        style={PageStyle.image}
                    />
                    <Typography.TitleOne style={{textAlign: 'center', marginBottom: 20}}>Gain total control of your money</Typography.TitleOne>
                    <Typography.BodyLg style={{textAlign: 'center'}}>Become your own money manager and make every cent count</Typography.BodyLg>
                    
                </View>
                <View style={PageStyle.container} key="2">
                    <Image 
                        source={require('../../assets/onboarding_two.png')} 
                        resizeMode="cover"
                        style={PageStyle.image}
                    />
                    <Typography.TitleOne style={{textAlign: 'center', marginBottom: 20}}>Know where your money goes</Typography.TitleOne>
                    <Typography.BodyLg style={{textAlign: 'center'}}>Track your transaction easily,with categories and financial report </Typography.BodyLg>
                </View>
                <View style={PageStyle.container} key="3">
                    <Image 
                        source={require('../../assets/onboarding_three.png')} 
                        resizeMode="cover"
                        style={PageStyle.image}
                    />
                    <Typography.TitleOne style={{textAlign: 'center', marginBottom: 20}}>Planning ahead</Typography.TitleOne>
                    <Typography.BodyLg style={{textAlign: 'center'}}>Setup your budget for each category so you in control</Typography.BodyLg>
                </View>
            </PageView>
            <View style={{padding: 20}}>
                <Button text="Create an Account" style={{marginBottom: 15}} onPress={() => navigation.navigate('SignUp')} />
                <Button text="Login" type="outline" onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    )
}

export default OnboardingScreen;