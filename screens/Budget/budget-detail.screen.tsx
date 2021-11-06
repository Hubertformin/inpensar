import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BudgetCard from '../../components/budget-card';
import ProgressBar from '../../components/progress-bar';
import { View } from '../../components/Themed';
import Typography from '../../components/Typography';
import Colors from '../../constants/Colors';
import useTheme from '../../hooks/colorScheme';
import { BudgetModel } from '../../models/budget.model';
import { currencyFormatter } from '../../util/number';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 20,
    },
    warningCard: {
        padding: 20,
        borderRadius: 7,
    }
})

function BudgetDetailScreen({navigation, route}) {

    const [budget, setBudget] = React.useState<BudgetModel>(route.params.budget);

    const theme = useTheme();

    React.useEffect(() => {
        // setBudget(route.params.budget);
        // console.log(route.params.budget);
        navigation.setOptions({ title: route.params.budget.name})
    }, []);

    return (
        <ScrollView style={[styles.page, {backgroundColor: Colors[theme].background}]}>
            <BudgetCard hideName={true} budget={budget} />
            <View style={[styles.warningCard, {backgroundColor: Colors.red[theme]['20']}]}>
                <Typography.Body style={{color: Colors.red[100]}}>You have exceeded your budget by {currencyFormatter(7500)}. Stop spending now!</Typography.Body>
            </View>

            <View style={{paddingVertical: 30}}>
                {
                    budget?.categories?.map(category => {
                        return (
                            <View style={{marginBottom: 20}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image
                                        source={{ uri: category.icon }}
                                        style={{height: 55, width: 55}}
                                     />
                                     <View style={{paddingLeft: 10, flexGrow: 1, alignSelf: 'stretch'}}>
                                         <Typography.TitleThree style={{marginBottom: 5, fontSize: 16}}>{category.name}</Typography.TitleThree>
                                         <Typography.Body style={{color: Colors.red[100]}}>- {currencyFormatter(category.amount)}</Typography.Body>
                                         <ProgressBar 
                                            value={Math.floor((category.amount / budget.amountSpent) * 100)} 
                                            barColor={category.color} 
                                            backgroundColor={'transparent'}
                                        />
                                     </View>
                                </View>
                                
                            </View>
                        );
                    })
                }
            </View>
        </ScrollView>
    );
}

export default BudgetDetailScreen;