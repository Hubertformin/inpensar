import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Modal, Pressable, FlatList} from 'react-native';
import { View } from '../../components/Themed';
import Typography from '../../components/Typography';
import Colors from '../../constants/Colors';
import Screen from '../../constants/Screen';

import { LineChart } from "react-native-gifted-charts"
import { ScrollView } from 'react-native-gesture-handler';
import { BottomSheet } from 'react-native-btr';
import { Data } from '../../constants/data';
import { currencyFormatter } from '../../util/number';
import { timeAgo } from '../../util/date';
import TransactionCard from '../../components/transaction-card';
import MonthSelector from '../../components/month-selector';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    gradient: {
        height: Screen.window.height * 0.5,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    actionBar: {
        paddingHorizontal: 20,
        marginTop: 30,
        height: 50,
        alignItems: 'center',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf:'stretch'
    },
    absoluteContainer: {
        position: 'absolute', 
        flex: 1, 
        right: 0, 
        left: 0, 
        top: 0, 
        bottom: 0,
        backgroundColor: 'transparent'
    },
    scrollable: {
        flex: 1,
        alignSelf:'stretch',
        marginBottom: 65
    },
    amountContainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        paddingVertical: 20
    },
    reportCards: {
        height: 80,
        borderRadius: 15,
        marginHorizontal: 20,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    recentTransaction: {
        paddingHorizontal: 10,
        backgroundColor: 'transparent'
    },
})

function HomeScreen({ navigation }) {

    const onMonthSelect = (month) => {
        console.log(month);
    }

    const lineData = [{label: '4 weeks ago', value: 0},{label: '3 weeks ago', value: 10},{label: 'Last Monday', value: 8},{label: 'Tuesday', value: 108},{label: 'Two days ago', value: 56},{label: 'Yesterday', value: 78},{label: 'Today', value: 74}];
    const lineData2 = [{label: '4 weeks ago', value: 0},{label: '3 weeks ago', value: 50},{label: 'Last Monday', value: 18},{label: 'Tueday', value: 40},{label: 'Two days ago', value: 36},{label: 'Yesterday', value: 60},{label: 'Today', value: 54}];
    
    return (
        // <SafeAreaView style={{ flex: 1 }}>
            
        // </SafeAreaView>
            <View style={styles.container}>
                <StatusBar style="dark" backgroundColor="red" />
                <LinearGradient
                    colors={['#FCEFD8', '#FFFFFF']}
                    style={styles.gradient}
                ></LinearGradient>
                <View style={styles.absoluteContainer}>


                    <View style={styles.actionBar}>
                        <MonthSelector onSelect={onMonthSelect} />

                        <View style={{backgroundColor: 'transparent'}}>
                            <Ionicons style={{marginLeft: 5}} name="notifications" size={24} color={Colors.primary[100]} />
                        </View>
                    </View>


                    <ScrollView style={styles.scrollable}>
                        <View style={styles.amountContainer}>
                            <Typography.Body style={{marginBottom: 10, color: Colors.gray[100]}}>Account Balance</Typography.Body>
                            <Typography.TitleOne>FCFA 45,000</Typography.TitleOne>
                        </View>

                        <View style={[styles.reportCards, {backgroundColor: Colors.green[100]}]}>
                            <Image 
                                source={require('../../assets/income_icon_white.png')}
                            />
                            <View style={{backgroundColor: 'transparent', paddingLeft: 15}}>
                                <Typography.Small style={{marginBottom: 5, color: Colors.gray[20]}}>Income</Typography.Small>
                                <Typography.TitleThree style={{color: Colors.gray[20]}}>FCFA 45,000</Typography.TitleThree>
                            </View>
                        </View>

                        <View style={[styles.reportCards, {backgroundColor: Colors.red[100]}]}>
                            <Image 
                                source={require('../../assets/expense_icon_white.png')}
                            />
                            <View style={{backgroundColor: 'transparent', paddingLeft: 15}}>
                                <Typography.Small style={{marginBottom: 5, color: Colors.gray[20]}}>Expenses</Typography.Small>
                                <Typography.TitleThree style={{color: Colors.gray[20]}}>FCFA 45,000</Typography.TitleThree>
                            </View>
                        </View>

                        <View style={{height: 300, backgroundColor: 'transparent', paddingVertical: 10}}>

                            <LineChart
                                areaChart
                                curved
                                data={lineData}
                                data2={lineData2}
                                height={185}
                                showVerticalLines={false}
                                spacing={95}
                                initialSpacing={0}
                                color1={Colors.green[100]}
                                color2={Colors.red[100]}
                                textColor1="green"
                                hideDataPoints={true}
                                hideAxesAndRules={true}
                                dataPointsColor1="blue"
                                dataPointsColor2="red"
                                startFillColor1={Colors.green[60]}
                                startFillColor2={Colors.red[60]}
                                startOpacity={0.8}
                                endOpacity={0.3}
                                textShiftY={-2}
                                textShiftX={-15}
                                textFontSize={13}
                                showXAxisIndices={false}
                            />
                        </View>

                        {/* show transactions */}
                        <View style={styles.recentTransaction}>
                            <View style={{padding: 10, flexDirection: 'row', marginBottom: 25, justifyContent: 'space-between', backgroundColor: 'transparent',}}>
                                <Typography.TitleThree>Recent Transactions</Typography.TitleThree>
                                <Pressable onPress={() => navigation.navigate('transactions')}>
                                    <Typography.Body style={{color: Colors.primary[100]}}>See All</Typography.Body>
                                </Pressable>
                            </View>

                            {Data.recent_transactions.map((item) => {
                                    return (
                                        <TransactionCard data={item} />
                                    );
                                })}
                        </View>

                    </ScrollView>
                </View>
    
            </View>
    )
}

export default HomeScreen;