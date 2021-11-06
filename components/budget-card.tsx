import React, { useEffect } from "react";
import { View, StyleSheet, Animated, StyleProp } from "react-native";
import Colors from "../constants/Colors";
import Constants from 'expo-constants';
import Typography from "./Typography";
import { currencyFormatter } from "../util/number";
import { ViewProps } from "./Themed";
import { BudgetModel } from "../models/budget.model";
import { formatDate } from "../util/date";

const styles = StyleSheet.create({
    container: {
        marginBottom: 30
    },
    progressBar: {
        marginVertical: 10,
        height: 18,
        width: '100%',
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: 7
   },
   percent: {
    position: 'absolute',
    left: 10,
    zIndex: 10,
    top: 1.5,
    color:  Colors.gray[20]
   },
   footer: {
       flexDirection: 'row',
       paddingVertical: 5,
       justifyContent: 'space-between'
   }
  });
  
  interface BudgetcardProps {
    budget: BudgetModel, 
    hideName?: boolean;
    containerStyle?: StyleProp<ViewProps>
  }

function BudgetCard({budget, hideName, containerStyle}: BudgetcardProps) {

    const [percent, setPercent] = React.useState(0);

    const [balance, setBalance] = React.useState(0);

    const [isExceeded, setIsExceeded] = React.useState(false);

    useEffect(() => {
        // const _ration = Math.floor((spent / amount)) ;

        setPercent(Math.floor((budget.amountSpent / budget.amount) * 100));

        setBalance(Math.abs(budget.amount - budget.amountSpent));
        // check if the user has exceeded the budget
        setIsExceeded((budget.amountSpent > budget.amount));


    }, [budget]);

    let StateColor = {backgroundColor: Colors.green[20], barColor: Colors.green[100]};

    if (percent > 79) {
        StateColor = {backgroundColor: Colors.yellow[20], barColor: Colors.yellow[100]};
    }

    if (percent > 89) {
        StateColor = {backgroundColor: Colors.red[20], barColor: Colors.red[100]};
    }

    return (
        <View style={[styles.container,containerStyle]}>
            {!hideName && <Typography.TitleThree>{budget.name}</Typography.TitleThree>}
            {
                isExceeded ? 
                <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
                    <Typography.TitleThree style={{color: StateColor.barColor}}>{currencyFormatter(balance)}</Typography.TitleThree>
                    <Typography.Small style={{paddingHorizontal: 5}}>spent over</Typography.Small>
                    <Typography.Body>{currencyFormatter(budget.amount)}</Typography.Body>
                </View> :
                <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
                    <Typography.TitleThree style={{color: StateColor.barColor}}>{currencyFormatter(balance)}</Typography.TitleThree>
                    <Typography.Small style={{paddingHorizontal: 5}}>left out of</Typography.Small>
                    <Typography.Body>{currencyFormatter(budget.amount)}</Typography.Body>
                </View>
            }
            <View style={[styles.progressBar, {backgroundColor: StateColor.backgroundColor}]}>
                <Typography.Small style={styles.percent}>{percent}%</Typography.Small>
                <Animated.View style={[StyleSheet.absoluteFill, {backgroundColor: StateColor.barColor, width: `${percent < 100 ? percent : 100}%`, borderRadius: 5}]} />
            </View>
            <View style={styles.footer}>
                <Typography.Small style={{color: Colors.gray[100]}}>Today</Typography.Small>
                <Typography.Small style={{color: Colors.gray[100]}}>{formatDate(budget.nextOccureDate)}</Typography.Small>
            </View>
        </View>
    )
}

export default BudgetCard;