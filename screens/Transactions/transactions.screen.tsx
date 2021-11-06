import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, ScrollView } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import MonthSelector from '../../components/month-selector';
import { View } from '../../components/Themed';
import TransactionCard from '../../components/transaction-card';
import Typography from '../../components/Typography';
import Colors from '../../constants/Colors';
import { Data } from '../../constants/data';
import Screen from '../../constants/Screen';
import useTheme from '../../hooks/colorScheme';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        //backgroundColor: Colors.red[100],
    },
    actionBar: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingTop: 5,
        paddingBottom: 10,
        justifyContent: 'space-between'
    },
    actionFilterButton: {
        padding: 5,
        borderWidth: 1,
        // borderColor: Colors.gray[80],
        borderRadius: 5,
        width: 40,
        height: 40
    },
    scrollView: {
        flexGrow: 1,
        alignSelf: 'stretch',
        marginBottom: 65,
        paddingHorizontal: 20
    },
    reportCard: {
        borderRadius: 15,
        paddingVertical: 13,
        marginTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: Colors.primary[20]
    },
    filterBottomNav: {
        backgroundColor: Colors.darkText[80],
        width: '100%',
        height: Screen.window.height * 0.65,
        paddingHorizontal: 10
        //justifyContent: 'center',
        //alignItems: 'center',
    }
})

function TransactionsScreen({ navigation }) {

    const colorScheme = useTheme()

    const [isFilterOpen, setIsFilterOpen] = React.useState(false);

    const openFilter = () => {
        setIsFilterOpen(true);
    }

    const ThemeColors = {
        light: {
            reportCardBackground: Colors.primary[20]
        },
        dark: {
            reportCardBackground: Colors.primaryAccent[100]
        }
    }

    return (
        <View style={[styles.page]}>
            <View style={styles.actionBar}>
                <MonthSelector />

                {/* <Pressable style={[styles.actionFilterButton, {borderColor: Colors[colorScheme].borderColor}]} onPress={openFilter}>
                    <Ionicons name="filter" size={30} color={Colors.gray[100]} />
                </Pressable> */}
            </View>

            <ScrollView style={styles.scrollView}>
                <Pressable 
                onPress={() => navigation.navigate('TransactionReportsScreen')}
                    style={[styles.reportCard, {backgroundColor: ThemeColors[colorScheme].reportCardBackground}]}
                >
                    <Typography.BodyLg style={{color: Colors.primary[100]}}>See your financial report</Typography.BodyLg>
                    <Ionicons name="chevron-forward" size={25} color={Colors.primary[100]} />
                </Pressable>

                <View style={{marginTop: 30}}>
                    {Data.transactions.map((record, index) => {
                        return (
                        <View key={'tran-card-' + index} style={{marginBottom: 30}}>
                            <Typography.TitleThree>{record.day}</Typography.TitleThree>
                            <View style={{paddingLeft: 0, paddingTop: 15, paddingRight: 0}}>
                                {
                                    record.data.map(item => {
                                        return(
                                            <TransactionCard data={item} />
                                        )
                                    })
                                }
                            </View>
                        </View>)
                    })}
                </View>
            </ScrollView>


            {/* Bottom Navs */}
            <BottomSheet
                visible={isFilterOpen}
                //setting the visibility state of the bottom shee
                onBackButtonPress={() => setIsFilterOpen(false)}
                //Toggling the visibility state on the click of the back botton
                onBackdropPress={() => setIsFilterOpen(false)}
                //Toggling the visibility state on the clicking out side of the sheet
                >
                    {/*Bottom Sheet inner View*/}
                    <View style={styles.filterBottomNav}>
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
                            Filter transactions
                            </Typography.TitleThree>
                            
                    </View>
                </View>
            </BottomSheet>
        </View>
    )
}

export default TransactionsScreen;