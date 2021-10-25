import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Button from '../../components/Button';
import { View } from '../../components/Themed';
import Typography from '../../components/Typography';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    placeholder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function BudgetScreen() {
    return (
        <View style={styles.page}>
            <View style={styles.placeholder}>
                <View style={{paddingHorizontal: 40, paddingVertical: 10, alignItems: 'center'}}>
                    <Image
                        source={require('../../assets/budget_placeholder.png')}
                        resizeMode="contain"
                        style={{height: 130, marginBottom: 20}}
                     />
                     <Typography.Body style={{marginBottom: 35, color: Colors.gray[100], textAlign: 'center'}}>
                     You don’t have a budget.Let’s make one so are you in control.
                     </Typography.Body>
                     <Button text="Add Budget" style={{width: 250}} />
                </View>
            </View>
        </View>
    )
}

export default BudgetScreen;