import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import BudgetCard from '../../components/budget-card';
import Button from '../../components/Button';
import { View } from '../../components/Themed';
import Typography from '../../components/Typography';
import Colors from '../../constants/Colors';
import { Data } from '../../constants/data';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 20
    },
    placeholder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function BudgetScreen({ navigation }) {
    return (
        <View style={styles.page}>
            <FlatList 
                horizontal={false}
                data={Data.budgets} 
                renderItem={({item}) => {
                    return (
                        <Pressable
                            onPress={() => navigation.navigate('BudgetDetailScreen', { budget: item })}
                        >
                            <BudgetCard key={item._id} budget={item} />
                        </Pressable>
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
             />
        </View>
    )
}

function EmptyState({navigation}) {
    return (
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
                     <Button onPress={() => navigation.navigate('AddBudgetScreen')} text="Add Budget" style={{width: 250}} />
                </View>
            </View>
    )
}

export default BudgetScreen;