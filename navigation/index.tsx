import { FontAwesome, FontAwesome5, Foundation } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ColorSchemeName, StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import PlaceHolderComponent from '../components/Placeholder';
import { Text } from '../components/Themed';

import Colors from '../constants/Colors';
import useTheme from '../hooks/colorScheme';
import CreatePinScreen from '../screens/auth/create-pin.screen';
import ForgotPasswordScreen from '../screens/auth/forgot-password.screen';
import LoginScreen from '../screens/auth/login.screen';
import SignUpScreen from '../screens/auth/signup.screen';

import BudgetScreen from '../screens/Budget/budget.screen';
import HomeScreen from '../screens/Home/home.screen';
import AddTransactionModal from '../screens/Modals/add-transaction.modal';
import OnboardingScreen from '../screens/Onboarding/onboarding.screen';
import ProfileScreen from '../screens/Profile/profile.screen';
import TransactionsScreen from '../screens/Transactions/transactions.screen';

const Tab = createBottomTabNavigator();

const TabStyles = StyleSheet.create({
    shadow: {
        shadowColor: Colors.primary['100'],
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.5,
        elevation: 5
    }
});

const CustomTabButton = (props) => {
    return (
        <TouchableOpacity
            style={{
                top: -20,
                justifyContent: 'center',
                alignItems: 'center',
                ...TabStyles.shadow
            }}
            onPress={props.onPress}
        >
            <View
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 35
                }}
            >
                {props.children}
            </View>
        </TouchableOpacity>
    )
};

function BottomTabs() {

    const colorScheme = useTheme()

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
                tabBarShowLabel: false,
                tabBarStyle: [
                    {
                        position: 'absolute',
                        bottom: 5,
                        left: 10,
                        right: 10,
                        height: 65,
                        borderRadius: 15,
                        ...TabStyles.shadow
                    }
                ]
            }}
        >
            <Tab.Screen 
                name="home" 
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: Colors[colorScheme].background,
                    },
                    headerShown: false,
                    tabBarIcon: ({ color }) => {
                        return (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Foundation name="home" size={24} color={color} />
                            <Text style={{color, fontSize: 10}}>Home</Text>
                        </View>
                        )
                    }
                  })}
                />
            <Tab.Screen 
                name="transactions" 
                component={TransactionsScreen}
                options={({ navigation }) => ({
                    title: 'Transactions',
                    // headerShown: false,
                    headerStyle: {
                        backgroundColor: Colors[colorScheme].background,
                    },
                    headerShadowVisible: false,
                    tabBarIcon: ({ color }) => {
                        return (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <FontAwesome name="exchange" size={24} color={color} />
                            <Text style={{color, fontSize: 10}}>Transactions</Text>
                        </View>
                        )
                    }
                  })}
            />
            <Tab.Screen
                name="add-transaction-fab" 
                component={PlaceHolderComponent}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color }) => {
                        return (
                        <Image 
                            source={require('../assets/Add.png')}
                            resizeMode="contain"
                            style={{
                                height: 60,
                                width: 60
                            }}
                         />
                        )
                    },
                    tabBarButton: (props) => <CustomTabButton {...props} />
                })}
                listeners={({navigation}) => ({
                    tabPress: (event) => {
                        event.preventDefault();
                        navigation.navigate('AddTransactionModal');
                    }
                })}
            />
            <Tab.Screen 
                name="budget" 
                component={BudgetScreen}
                options={({ navigation }) => ({
                    title: 'Budget',
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: Colors[colorScheme].background,
                    },
                    tabBarIcon: ({ color }) => {
                        return (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <FontAwesome name="pie-chart" size={24} color={color} />
                            <Text style={{color, fontSize: 10}}>Budget</Text>
                        </View>
                        )
                    }
                  })}
            />
            <Tab.Screen 
                name="profile" 
                component={ProfileScreen}
                options={({ navigation }) => ({
                    title: 'Profile',
                    headerStyle: {
                        backgroundColor: Colors[colorScheme].background,
                    },
                    // headerShown: false,
                    tabBarIcon: ({ color }) => {
                        return (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                             <FontAwesome5 name="user-alt" size={24} color={color} />
                            <Text style={{color, fontSize: 10}}>Profile</Text>
                        </View>
                        )
                    }
                  })}
            />
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {

    const colorScheme = useTheme();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={LoginScreen} 
                options={{
                    title: 'Login',
                    headerStyle: {
                        backgroundColor: Colors[colorScheme].background,
                    },
                    headerTintColor: Colors[colorScheme].text,
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      color: Colors[colorScheme].text,
                    },
                    headerShadowVisible: false,
                    headerBackTitleVisible: false
                  }}
            />
            <Stack.Screen name="SignUp" component={SignUpScreen} 
                options={{
                    title: 'Create account',
                    headerStyle: {
                        backgroundColor: Colors[colorScheme].background,
                    },
                    headerTintColor: Colors[colorScheme].text,
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      color: Colors[colorScheme].text,
                    },
                    headerShadowVisible: false,
                    headerBackTitleVisible: false
                  }}
            />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} 
                options={{
                    title: 'Forgot password',
                    headerStyle: {
                        backgroundColor: Colors[colorScheme].background,
                    },
                    headerTintColor: Colors[colorScheme].text,
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      color: Colors[colorScheme].text,
                    },
                    headerShadowVisible: false,
                    headerBackTitleVisible: false
                  }}
            />
            <Stack.Screen name="CreatePinScreen" component={CreatePinScreen} 
                options={{
                    title: 'Create Pin',
                    headerStyle: {
                      backgroundColor: Colors.primary[100]
                    },
                    headerTintColor: Colors.gray[20],
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                    headerShadowVisible: false,
                    headerBackTitleVisible: false
                  }}
            />
            <Stack.Screen name="Root" component={BottomTabs} options={{headerShown: false}} />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="AddTransactionModal" 
                    component={AddTransactionModal}
                    options={{
                        title: 'Add Transaction',
                        headerShown: false
                    }}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
      <NavigationContainer
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
        <RootNavigator />
      </NavigationContainer>
    );
  }