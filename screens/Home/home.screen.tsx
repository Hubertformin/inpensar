import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Modal, Pressable, FlatList} from 'react-native';
import {SafeAreaView } from 'react-native-safe-area-context';
import { View } from '../../components/Themed';
import Typography from '../../components/Typography';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

import { LineChart } from "react-native-gifted-charts"
import { ScrollView } from 'react-native-gesture-handler';
import { BottomSheet } from 'react-native-btr';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    gradient: {
        height: Layout.window.height * 0.5,
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
        position: 'absolute', flex: 1, right: 0, left: 0, top: 0, backgroundColor: 'transparent'
    },
    scrollable: {
        flex: 1,
        alignSelf:'stretch'
    },
    actionSelect: {
        height: 40,
        borderRadius: 22.5,
        paddingHorizontal: 15,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.gray[80]
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
    monthBottomNav: {
        backgroundColor: '#fff',
        width: '100%',
        height: Layout.window.height * 0.5,
        paddingHorizontal: 10
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    leadingBox: {
        width: 30
    },
    bottmListItem: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.gray[60],
        paddingVertical: 15
    }
})

function HomeScreen() {

    const [isOpen, setOpen] = React.useState(false);
    const [selectedMonth, setSelectedMonth] = React.useState('October');

    const lineData = [{label: 'lable', value: 0},{label: 'lable', value: 10},{label: 'lable', value: 8},{label: 'lable', value: 58},{label: 'lable', value: 56},{label: 'lable', value: 78},{label: 'lable', value: 74},{label: 'lable', value: 98}, {label: 'lable', value: 10}, {label: 'lable', value: 100}];
    const lineData2 = [{label: 'lable', value: 0},{label: 'lable', value: 20},{label: 'lable', value: 18},{label: 'lable', value: 40},{label: 'lable', value: 36},{label: 'lable', value: 60},{label: 'lable', value: 54},{label: 'lable', value: 85}, {label: 'lable', value: 10}, {label: 'lable', value: 100}];

    const toggleMonthModal = () => {
        console.log('opem')
        setOpen(true);
    }

    const selectMonth = (item) => {
        setSelectedMonth(item.key);
        setOpen(false);
    }
    
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
                        <TouchableOpacity onPress={toggleMonthModal}>
                            <View style={styles.actionSelect}> 
                                <Typography.Body>{selectedMonth}</Typography.Body>
                                <Ionicons style={{marginLeft: 5}} name="chevron-down" size={24} color={Colors.primary[100]} />
                            </View>
                        </TouchableOpacity>

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

                        <View style={{height: 300}}>

                            <LineChart
                                areaChart
                                curved
                                data={lineData}
                                data2={lineData2}
                                height={185}
                                showVerticalLines={false}
                                spacing={50}
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

                    </ScrollView>
                </View>
        
                {/*  */}
                <BottomSheet
                visible={isOpen}
                //setting the visibility state of the bottom shee
                onBackButtonPress={() => setOpen(false)}
                //Toggling the visibility state on the click of the back botton
                onBackdropPress={() => setOpen(false)}
                //Toggling the visibility state on the clicking out side of the sheet
            >
                {/*Bottom Sheet inner View*/}
                <View style={styles.monthBottomNav}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                        <Typography.TitleThree
                            style={{
                                textAlign: 'center',
                                padding: 20,
                                fontSize: 16,
                            }}>
                            Select Month
                            </Typography.TitleThree>
                            <FlatList
                                data={[
                                    {key: 'January'},
                                    {key: 'Ferbuary'},
                                    {key: 'March'},
                                    {key: 'April'},
                                    {key: 'May'},
                                    {key: 'June'},
                                    {key: 'July'},
                                    {key: 'August'},
                                    {key: 'Semptember'},
                                    {key: 'October'},
                                    {key: 'November'},
                                    {key: 'December'},
                            ]}
                            renderItem={({item}) => {
                                return (
                                <Pressable onPress={() => selectMonth(item)}>
                                    <View style={styles.bottmListItem}>
                                        <View style={styles.leadingBox}>{item.key === selectedMonth && <Ionicons name="checkmark" size={20} color={Colors.primary[100]} />}</View>
                                        <Typography.Body style={{fontSize: 16}}>{item.key}</Typography.Body>
                                    </View>
                                </Pressable>
                                );
                            }
                        }
                        />
                    </View>
                </View>
            </BottomSheet>
            </View>
    )
}

export default HomeScreen;