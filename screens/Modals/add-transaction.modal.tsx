import React from 'react';
import {StyleSheet, View, TextInput, Pressable} from 'react-native';
import { BottomSheet } from 'react-native-btr';
import Segment from '../../components/segment';
import Typography from '../../components/Typography';
import Colors from '../../constants/Colors';
import Screen from '../../constants/Screen';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: Colors.gray[100]
    },
    categoryForm: {
        paddingTop: 20,
        flexDirection: 'row', 
        alignItems: 'center',
        paddingHorizontal: 25
    },
    imagePlaceholder: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: Colors.gray[20],
        marginRight: 10
    },
    amountForm: {
        paddingTop: 45,
        height: 200,
        paddingHorizontal: 25
    },
    formControl: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    amountInput: {
        fontSize: 48,
        color: Colors.gray[20],
    },
    secondForm: {
        flexGrow: 1,
        alignSelf: 'stretch',
        paddingVertical: 35,
        paddingHorizontal: 25,
        backgroundColor: Colors.gray[20],
        borderTopLeftRadius: 33,
        borderTopRightRadius: 33,
    },
    categoryBottomNav: {
        backgroundColor: '#fff',
        width: '100%',
        paddingTop: 30,
        height: Screen.window.height * 0.65,
        paddingHorizontal: 10
        //justifyContent: 'center',
        //alignItems: 'center',
    }
})


function AddTransactionModal() {

    const [isCategorySelectOpen, setIsCategorySelectOpen] = React.useState(false);

    const [value, setValue] = React.useState(2310.458);

    const onTabChange = (tab) => {
        console.log(tab);
    }

    return (
        <View style={styles.page}>
            <View style={{alignItems: 'center', paddingVertical: 20}}><Typography.TitleThree style={{fontSize: 16,color: Colors.gray[20]}}>Add Transaction</Typography.TitleThree></View>
            <Pressable style={styles.categoryForm} onPress={() => setIsCategorySelectOpen(true)}>
                <View style={styles.imagePlaceholder}></View>
                <Typography.Body style={{color: Colors.gray[80], fontSize: 14}}>+ Add Category</Typography.Body>
            </Pressable>
            <View style={styles.amountForm}>
                <Typography.BodyLg style={{color: Colors.gray[80], fontSize: 18}}>How much?</Typography.BodyLg>
                <View style={styles.formControl}>
                    <Typography.Body style={{fontSize: 48, marginRight: 15, color: Colors.gray[20]}}>FCFA</Typography.Body>
                    <TextInput placeholder="0" focusable={true} style={styles.amountInput} />
                    
                </View>
            </View>
            <View style={styles.secondForm}>
                <Typography.Small>Choose category</Typography.Small>
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
                    <View style={styles.categoryBottomNav}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                        }}>
                        <Segment tabs={['Income', 'Expenses']} onChange={onTabChange} />
                            
                    </View>
                </View>
            </BottomSheet>
        </View>
    )
}

export default AddTransactionModal;