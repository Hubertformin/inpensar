import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Pressable, FlatList } from "react-native";
import { BottomSheet } from "react-native-btr";
import Colors from "../constants/Colors";
import Typography from "./Typography";
import Screen from "../constants/Screen";
import useTheme from "../hooks/colorScheme";
import { View } from "./Themed";

const styles = StyleSheet.create({
    actionSelect: {
        height: 40,
        borderRadius: 22.5,
        // backgroundColor: Colors.gray[20],
        paddingHorizontal: 15,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        // borderColor: Colors.gray[80]
    },
    monthBottomNav: {
        width: '100%',
        height: Screen.window.height * 0.7,
        paddingHorizontal: 10
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    leadingBox: {
        width: 30
    },
    bottmListItem: {
        // borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.gray[60],
        paddingVertical: 20
    },
})

export default function MonthSelector({defaultValue = 'January', onSelect}: {defaultValue?: string, onSelect?: (e) => void | undefined}) {

    const theme = useTheme();

    const [isOpen, setOpen] = React.useState(false);

    const months: {id: number, value: string}[] = [
        {id: 1, value: 'January'},
        {id: 2, value: 'Ferbuary'},
        {id: 3, value: 'March'},
        {id: 4, value: 'April'},
        {id: 5, value: 'May'},
        {id: 6, value: 'June'},
        {id: 7, value: 'July'},
        {id: 8, value: 'August'},
        {id: 9, value: 'Semptember'},
        {id: 10, value: 'October'},
        {id: 11, value: 'November'},
        {id: 12, value: 'December'},
    ];

    const [selectedMonth, setSelectedMonth] = React.useState<{id: number, value: string}>();

    React.useEffect(() => {
        const _defaultMonth = months.find(m => m.value == defaultValue);
        setSelectedMonth(_defaultMonth);
    }, []);

    const toggleMonthModal = () => {
        setOpen(true);
    }

    const selectMonth = (item) => {
        setSelectedMonth(item);
        setOpen(false);
        // emit event
        if (onSelect) {
            onSelect(item.value);
        }
    }

    return (
        <>
            <Pressable 
                style={[styles.actionSelect, {backgroundColor: Colors[theme].background, borderColor: Colors[theme].borderColor}]} 
                onPress={toggleMonthModal}
            >
                <Typography.Body>{selectedMonth?.value}</Typography.Body>
                <Ionicons style={{marginLeft: 5}} name="chevron-down" size={24} color={Colors.primary[100]} />
            </Pressable>

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
                                data={months}
                            renderItem={({item}) => {
                                return (
                                <Pressable onPress={() => selectMonth(item)}>
                                    <View style={styles.bottmListItem}>
                                        <View style={styles.leadingBox}>{item.id === selectedMonth?.id && <Ionicons name="checkmark" size={20} color={Colors.primary[100]} />}</View>
                                        <Typography.Body style={{fontSize: 16}}>{item.value}</Typography.Body>
                                    </View>
                                </Pressable>
                                );
                            }
                        }
                        />
                    </View>
                </View>
            </BottomSheet>

        </>
    );
}