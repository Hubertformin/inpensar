import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { View } from '../../components/Themed';
import Typography from '../../components/Typography';
import Colors from '../../constants/Colors';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { formatDate } from '../../util/date';
import { BottomSheet } from 'react-native-btr';
import Screen from './../../constants/Screen'

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    form: {
        flexGrow: 1,
        alignSelf: 'stretch',
        padding: 20
    },
    amountInputGroup: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    amountInput: {
        flexGrow: 1,
        alignSelf: 'stretch'
    },
    action: {
        height: 75,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    bottomNav: {
        // backgroundColor: Colors.darkText[100],
        width: '100%',
        //paddingTop: 10,
        height: Screen.window.height * 0.65,
        //paddingHorizontal: 10
        //justifyContent: 'center',
        //alignItems: 'center',
    },
})

function AddBudgetScreen() {

    const [showDatePicker, setShowDatePicker] = React.useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [showRecurrenceModal, setShowRecurrenceModal] = React.useState(false);
    const [recurrence, setRecurrence] = React.useState<{key: string, value: string}>({key: 'everyday', value: 'Everyday'},);

    const onDateSelect = (date) => {
        setSelectedDate(date);
        setShowDatePicker(false);
    }

    const selectRecurrence = (item) => {
        setRecurrence(item);
        setShowRecurrenceModal(false);
    }


    return(
        <View style={styles.page}>
            <View style={styles.form}>
                <Input.Text placeholder="Enter name" outline={false} label="Budget name" />
                <Input.Text placeholder={'Amount'} keyboardType="number-pad" label="Amount (FCFA)" />

                <View style={{marginTop: 20}}>
                    <TouchableOpacity 
                    activeOpacity={0.7}
                        style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 35}}
                        // onPress={() => setShowEndDatePicker(true)}
                    >
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Ionicons name="wallet" size={24} color={Colors.gray[100]} />
                            <Typography.Body style={{marginLeft: 15, fontSize: 16}}>Select Wallets</Typography.Body>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Typography.Body style={{color: Colors.gray[100]}}>Mobile Money</Typography.Body>
                            <Ionicons style={{marginHorizontal: 5}} name="chevron-forward" size={16} color={Colors.gray[100]} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        activeOpacity={0.7}
                        style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30}}
                        // onPress={() => setShowEndDatePicker(true)}
                    >
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Ionicons name="grid" size={24} color={Colors.gray[100]} />
                            <Typography.Body style={{marginLeft: 15, fontSize: 16}}>Budget for</Typography.Body>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Typography.Body style={{color: Colors.gray[100]}}>All</Typography.Body>
                            <Ionicons style={{marginHorizontal: 5}} name="chevron-forward" size={16} color={Colors.gray[100]} />
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity 
                        activeOpacity={0.7}
                        style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30}}
                        onPress={() => setShowRecurrenceModal(true)}
                    >
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Ionicons name="sync" size={24} color={Colors.gray[100]} />
                            <Typography.Body style={{marginLeft: 15, fontSize: 16}}>Recurrence</Typography.Body>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Typography.Body style={{color: Colors.gray[100]}}>{recurrence.value}</Typography.Body>
                            <Ionicons style={{marginHorizontal: 5}} name="chevron-forward" size={16} color={Colors.gray[100]} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    activeOpacity={0.7}
                        style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30}}
                        onPress={() => setShowDatePicker(true)}
                    >
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Ionicons name="calendar" size={24} color={Colors.gray[100]} />
                            <Typography.Body style={{marginLeft: 15, fontSize: 16}}>Start date</Typography.Body>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Typography.Body style={{color: Colors.gray[100]}}>{formatDate(selectedDate, {time: false})}</Typography.Body>
                            <Ionicons style={{marginHorizontal: 5}} name="chevron-forward" size={16} color={Colors.gray[100]} />
                        </View>
                    </TouchableOpacity>


                </View>
            </View>
            <View style={styles.action}>
                <Button text={'Add'} />
            </View>


            <DateTimePickerModal
                isVisible={showDatePicker}
                date={selectedDate}
                mode="date"
                onConfirm={onDateSelect}
                onCancel={() => setShowDatePicker(false)}
            />

            {/* interval modal */}
            <BottomSheet
                visible={showRecurrenceModal}
                //setting the visibility state of the bottom shee
                onBackButtonPress={() => setShowRecurrenceModal(false)}
                //Toggling the visibility state on the click of the back botton
                onBackdropPress={() => setShowRecurrenceModal(false)}
                //Toggling the visibility state on the clicking out side of the sheet
                >
                <View style={[styles.bottomNav, {height: Screen.window.height * 0.45, padding: 20}]}>
                    <View style={{alignItems: 'center',backgroundColor: 'transparent'}}>
                        <Typography.Body>Select Recurrence</Typography.Body>
                    </View>
                    <FlatList
                        data={[
                            {key: 'everyday', value: 'Everyday'},  
                            {key: 'every_week', value: 'Every week'}, 
                            {key: 'every_2_weeks', value: 'Every 2 weeks'}, 
                            {key: 'every_month', value: 'Every month'}, 
                            {key: 'every_year', value: 'Every year'}
                        ]}
                        renderItem={({item}) => (
                            <Pressable style={{paddingVertical: 18, backgroundColor: 'transparent'}} onPress={() => selectRecurrence(item)}>
                                <Typography.Body style={{fontSize: 15}}>{item.value}</Typography.Body>
                            </Pressable>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                     />
                </View> 
            </BottomSheet>

            
        </View>
    );
}

export default AddBudgetScreen;