import React from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import Colors from "../constants/Colors";
import useTheme from "../hooks/colorScheme";
import { TransactionsModel } from "../models/transactions.model";
import { formatDate, timeAgo } from "../util/date";
import { currencyFormatter } from "../util/number";
import Typography from "./Typography";

const styles = StyleSheet.create({
    transactionItem: {
        // backgroundColor: Colors.gray[40],
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        alignItems: 'flex-start',
        flexDirection: 'row',
        borderRadius: 20
    }
});

const ThemeColors = {
    light: {
        cardBackground: Colors.gray[40]
    },
    dark: {
        cardBackground: Colors.darkText[80]
    }
}

export default function TransactionCard({data, onPress}: {data: TransactionsModel, onPress?: (e) => void | undefined}) {

    const colorScheme = useTheme();

    return (
        <Pressable 
            key={'trans-item-' + data._id} 
            style={[styles.transactionItem, {backgroundColor: ThemeColors[colorScheme].cardBackground}]} 
            onPress={() => onPress ? onPress(data) : null}
        >
            <View style={{
                backgroundColor: 'transparent',
                    paddingVertical: 15,
                    flex: 1,
                    flexDirection: 'row', 
                justifyContent: 'space-between'
            }}>
                <View style={{flexDirection: 'row', backgroundColor: 'transparent',}}>
                    <Image
                        source={{uri: data.category?.icon}}
                        style={{height: 55, width: 55}}
                    />
                    <View style={{paddingHorizontal: 15, paddingTop: 7, backgroundColor: 'transparent'}}>
                        <Typography.TitleThree style={{marginBottom: 5}}>{data.category?.name}</Typography.TitleThree>
                        {data.notes ? 
                            <View style={{flexDirection: 'row', backgroundColor: 'transparent'}}>
                                <Typography.Body numberOfLines={1} style={{color: Colors.gray[100]}}>
                                    {data.notes?.slice(0, 20) + (data.notes.length > 20 ? '...' : '')}
                                </Typography.Body>
                            </View> : <View></View>
                        }
                        <Typography.Body style={{color: Colors.gray[100], marginTop: 15}}>{formatDate(data.date)}</Typography.Body>
                    </View>
                </View>
                <View style={{paddingTop: 7, backgroundColor: 'transparent', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                    <Typography.Body style={{color: data.type === 'income' ? Colors.green[100] : Colors.red[100]}}>
                        {`${data.type === 'expenses' ? '-': ''}${currencyFormatter(data.amount)}`}
                    </Typography.Body>
                    
                </View>
             </View>
        </Pressable>
    )
}