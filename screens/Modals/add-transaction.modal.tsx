import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {StyleSheet, Image, TextInput, Pressable, ScrollView, FlatList, TouchableOpacity, Switch} from 'react-native';
import { BottomSheet } from 'react-native-btr';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Button from '../../components/Button';
import Input from '../../components/Input';
import Segment from '../../components/segment';
import { View } from '../../components/Themed';
import Typography from '../../components/Typography';
import Colors from '../../constants/Colors';
import { Data } from '../../constants/data';
import Screen from '../../constants/Screen';
import useTheme from '../../hooks/colorScheme';
import { CategoryModel } from '../../models/category.model';
import { formatDate } from '../../util/date';

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    categoryForm: {
        paddingTop: 10,
        flexDirection: 'row', 
        alignItems: 'center',
        paddingHorizontal: 25
    },
    imagePlaceholder: {
        height: 40,
        width: 40,
        backgroundColor: 'transparent',
        borderRadius: 20,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: Colors.gray[20],
        marginRight: 10
    },
    categoryImage: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.gray[20],
        marginRight: 5
    },
    amountForm: {
        paddingTop: 30,
        height: 140,
        backgroundColor: 'transparent',
        paddingHorizontal: 25,
        
    },
    formControl: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    amountInput: {
        fontSize: 48,
        margin: 0,
        padding: 0,
        color: Colors.gray[20],
    },
    secondForm: {
        flexGrow: 1,
        alignSelf: 'stretch',
        //paddingVertical: 35,
        //paddingHorizontal: 25,
        // backgroundColor: Colors.gray[20],
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    scrollForm: {
        paddingTop: 35,
        paddingHorizontal: 20,
        // backgroundColor: Colors.gray[20],
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexGrow: 1, 
        alignSelf: 'stretch'
    },
    categoryBottomNav: {
        // backgroundColor: '#fff',
        width: '100%',
        //paddingTop: 10,
        height: Screen.window.height * 0.65,
        //paddingHorizontal: 10
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    categoriesGrid: {
        flexDirection: 'row',
        flexGrow: 1,
        alignSelf: 'stretch',
        paddingTop: 10,
    }
})


function AddTransactionModal() {

    const theme = useTheme();

    React.useEffect(() => {
        // openCategoriesModal();
    }, []);

    const [selectedDate, setSelectedDate] = useState(new Date());

    const [isCategorySelectOpen, setIsCategorySelectOpen] = React.useState(false);


    const [showDatePicker, setShowDatePicker] = React.useState(false);

    const [selectedCategory, setselectedCategory] = React.useState<CategoryModel>();

    const [selectedTab, setSelectedTab] = React.useState('Income');

    // form
    const [reoccurent, setReoccurent] = React.useState(false);
    const toggleReoccurent = () => setReoccurent(previousState => !previousState)

    const openCategoriesModal = () => {
        setIsCategorySelectOpen(true);
    }

    const onTabChange = (tab) => {
        setSelectedTab(tab);
    }

    const onSelectCategory = (item: CategoryModel) => {
        setselectedCategory(item);
        // close bottom sheet
        setIsCategorySelectOpen(false);
    }

    const onDateSelect = (date) => {
        console.log(date)
        setSelectedDate(date);
        setShowDatePicker(false);
    }

    return (
        <View style={[
            styles.page, 
            {
                backgroundColor: selectedCategory ? selectedCategory.color : (theme === 'light' ? Colors.gray[100]: Colors.darkText[20])
            }
            ]}>
            <View style={{alignItems: 'center', paddingVertical: 20, backgroundColor: 'transparent'}}><Typography.TitleThree style={{fontSize: 16,color: Colors.gray[20]}}>
                {selectedCategory ? `Add ${selectedCategory.type}` : 'Add transaction'}
            </Typography.TitleThree></View>
            
            {
                selectedCategory ? 
                <Pressable style={styles.categoryForm} onPress={openCategoriesModal}>
                    <Image source={{ uri: selectedCategory.icon }} style={styles.categoryImage} />
                    <Typography.TitleThree style={{color: Colors.gray[20], fontSize: 16}}>{selectedCategory.name}</Typography.TitleThree>
                    <Ionicons style={{marginLeft: 5}} name="chevron-down" size={24} color={Colors.gray[20]} />
                </Pressable> 
                :
                <Pressable style={styles.categoryForm} onPress={openCategoriesModal}>
                    <View style={styles.imagePlaceholder}></View>
                    <Typography.Body style={{color: Colors.gray[80], fontSize: 14}}>+ Add Category</Typography.Body>
                </Pressable>
            }


            <View style={styles.amountForm}>
                <Typography.BodyLg style={{color: Colors.gray[80], fontSize: 18}}>How much?</Typography.BodyLg>
                <View style={styles.formControl}>
                    <Typography.Body style={{fontSize: 46, marginRight: 15, color: Colors.gray[20]}}>FCFA</Typography.Body>
                    <TextInput placeholder="0" focusable={true} style={styles.amountInput} />
                    
                </View>
            </View>
            <View style={styles.secondForm}>
                <ScrollView style={styles.scrollForm}>
                    
                    <TouchableOpacity 
                        style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40}}
                        onPress={() => setShowDatePicker(true)}
                    >
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Ionicons name="calendar" size={24} color={Colors.gray[100]} />
                            <Typography.Body style={{marginLeft: 15, fontSize: 16}}>{formatDate(selectedDate)}</Typography.Body>
                        </View>
                        <Ionicons style={{marginLeft: 5}} name="chevron-forward" size={16} color={Colors.gray[100]} />
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10}}>
                        <Ionicons name="pencil" size={20} color={Colors.gray[100]} />
                        <TextInput 
                            style={{
                                paddingHorizontal: 10,
                                paddingBottom: 10,
                                paddingRight: 20,
                                color: Colors[theme].text,
                                height: 55,
                                flexGrow: 1,
                                alignSelf: 'stretch',
                                fontSize: 14,
                                fontFamily: 'Gilroy-medium'
                            }}
                            placeholderTextColor={Colors.gray[100]}
                            multiline={true} 
                            placeholder="Write a note.."
                        ></TextInput>
                    </View>

                    <TouchableOpacity 
                        style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40}}
                        onPress={() => setShowDatePicker(true)}
                    >
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Ionicons name="wallet" size={24} color={Colors.gray[100]} />
                            <Typography.Body style={{marginLeft: 15, fontSize: 16}}>Wallet</Typography.Body>
                        </View>
                        <Ionicons style={{marginLeft: 5}} name="chevron-forward" size={16} color={Colors.gray[100]} />
                    </TouchableOpacity>

                    <View
                        style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40}}
                    >
                        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                            <Ionicons name="sync-circle" size={30} color={Colors.gray[100]} />
                            <View style={{marginLeft: 15, }}>
                                <Typography.Body style={{fontSize: 16, marginBottom: 6}}>Repeat</Typography.Body>
                                <Typography.Small style={{fontSize: 12, color: Colors.gray[100]}}>This even repeats</Typography.Small>
                            </View>
                        </View>
                        <Switch
                            trackColor={{ false: "#767577", true: Colors.primary[40] }}
                            thumbColor={reoccurent ? Colors.primary[100] : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleReoccurent}
                            value={reoccurent}
                        />
                    </View>

                    {
                        reoccurent && (
                            <>
                                <TouchableOpacity 
                                    style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40}}
                                    onPress={() => setShowDatePicker(true)}
                                >
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Ionicons name="swap-vertical" size={24} color={Colors.gray[100]} />
                                        <Typography.Body style={{marginLeft: 15, fontSize: 16}}>Select interval</Typography.Body>
                                    </View>
                                    <Ionicons style={{marginLeft: 5}} name="chevron-forward" size={16} color={Colors.gray[100]} />
                                </TouchableOpacity>

                                <TouchableOpacity 
                                    style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40}}
                                    onPress={() => setShowDatePicker(true)}
                                >
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Ionicons name="calendar" size={24} color={Colors.gray[100]} />
                                        <Typography.Body style={{marginLeft: 15, fontSize: 16}}>Select end date?</Typography.Body>
                                    </View>
                                    <Ionicons style={{marginLeft: 5}} name="chevron-forward" size={16} color={Colors.gray[100]} />
                                </TouchableOpacity>
                            </>
                        )
                    }

                    <View>
                </View>

                </ScrollView>
                <View style={{height: 75, padding: 10}}>
                    <Button type={'primary'} text="Add" />
                </View>
            </View>



            <BottomSheet
                visible={isCategorySelectOpen}
                //setting the visibility state of the bottom shee
                onBackButtonPress={() => setIsCategorySelectOpen(false)}
                //Toggling the visibility state on the click of the back botton
                onBackdropPress={() => setIsCategorySelectOpen(false)}
                //Toggling the visibility state on the clicking out side of the sheet
                >
                    {/*Bottom Sheet inner View*/}
                    <View style={[styles.categoryBottomNav]}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                backgroundColor: theme === 'light' ? Colors.gray[20] : Colors.darkText[80]
                        }}>
                        <Segment style={{paddingTop: 20, paddingBottom: 15}} tabs={['Income', 'Expenses']} onChange={onTabChange} />


                        { selectedTab === 'Income' ?
                            <FlatList
                            style={styles.categoriesGrid}
                            data={Data.income}
                            contentContainerStyle={{
                                // alignItems: 'center',
                                width: '100%',
                                paddingTop: 10,
                                paddingBottom: 50
                            }}
                            horizontal={false}
                            renderItem={({ item }) => (
                                <Pressable 
                                    style={{ width: 100, height: 100, marginBottom: 10, paddingHorizontal: 20, alignItems: 'center'}}
                                    onPress={() => onSelectCategory(item)}
                                >
                                        <Image
                                            source={{uri: item.icon}}
                                            style={{height: 55, width: 55, marginBottom: 5}}
                                        />
                                         <Typography.Body style={{fontSize: 12, textAlign: 'center'}}>{item.name}</Typography.Body>
                                </Pressable>
                            )}
                            numColumns={Math.floor(Screen.window.width / 101)}
                            keyExtractor={(item, index) => index.toString()}
                        /> :
                        <FlatList
                            style={styles.categoriesGrid}
                            data={Data.expenses}
                            contentContainerStyle={{
                                // alignItems: 'center',
                                width: '100%',
                                paddingTop: 10,
                                // paddingBottom: 200
                            }}
                            contentInset={{ bottom: 50 }}
                            horizontal={false}
                            renderItem={({ item }) => (
                                <Pressable 
                                    style={{ width: 100, height: 100, marginBottom: 10, paddingHorizontal: 20, alignItems: 'center'}}
                                    onPress={() => onSelectCategory(item)}
                                >
                                        <Image
                                            source={{uri: item.icon}}
                                            style={{height: 55, width: 55, marginBottom: 5}}
                                        />
                                         <Typography.Body style={{fontSize: 12, textAlign: 'center'}}>{item.name}</Typography.Body>
                                </Pressable>
                            )}
                            numColumns={Math.floor(Screen.window.width / 101)}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        }  
                    </View>
                </View>
            </BottomSheet>

            <DateTimePickerModal
                isVisible={showDatePicker}
                date={selectedDate}
                mode="datetime"
                onConfirm={onDateSelect}
                onCancel={() => setShowDatePicker(false)}
            />
        </View>
    )
}

export default AddTransactionModal;