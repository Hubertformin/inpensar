import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {StyleSheet, ImageBackground} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/Button";
import { View } from "../../components/Themed";
import Typography from "../../components/Typography";
import Colors from "../../constants/Colors";
import { Data } from "../../constants/data";
import useTheme from "../../hooks/colorScheme";
import { WalletModel } from "../../models/wallet.model";
import { currencyFormatter } from "../../util/number";

const styles = StyleSheet.create({
    page: {
        flexGrow: 1,
        alignSelf: 'stretch'
    },
    head: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    foot: {
        height: 65,
        // backgroundColor: 'red',
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    walletsViewContainer: {
        flexGrow: 1,
        alignSelf: 'stretch',
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    walletCard: {
        borderColor: Colors.gray[80],
        borderBottomWidth: 1,
        paddingVertical: 15,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    walletLeading: {
        flexDirection: 'row'
    }
});


function WalletCard({wallet, theme}: {wallet: WalletModel, theme: string}) {
    return (
        <View style={[styles.walletCard, {borderColor: Colors[theme].borderColor}]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="wallet-outline" size={24} color={Colors[theme].text} />
                <Typography.Body style={{marginLeft: 10}}>{wallet.name}</Typography.Body>
            </View>
            <View>
            <Typography.Body>{currencyFormatter(wallet.amount)}</Typography.Body>
            </View>
        </View>
    )
}

function AccountScreen({ navigation }) {

    const theme = useTheme();

    return (
        <>
            <View style={styles.page}>
                <ImageBackground style={styles.head} source={require('../../assets/accounts_bg.png')}>
                    <Typography.Small>Account Balance</Typography.Small>
                    <Typography.TitleOne>{currencyFormatter(45000)}</Typography.TitleOne>
                </ImageBackground>
                <ScrollView style={styles.walletsViewContainer}>
                    {
                        Data.wallets.map(wallet => {
                            return (<WalletCard key={wallet._id} wallet={wallet} theme={theme} />);
                        })
                    }
                </ScrollView>
            </View>
            <View style={styles.foot}>
                <Button text="+ Add wallet" />
            </View>
        </>
    );
}

export default AccountScreen;