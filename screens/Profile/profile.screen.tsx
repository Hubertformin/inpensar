import React from 'react';
import { View } from '../../components/Themed';
import { StyleSheet, Image, Pressable } from 'react-native';
import Colors from '../../constants/Colors';
import Typography from '../../components/Typography';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import useTheme from '../../hooks/colorScheme';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headProfile: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    controlCards: {
        marginTop: 40,
        backgroundColor: '#1b1b1b',
        paddingVertical: 10,
        paddingHorizontal: 15,
        // height: 200,
        borderRadius: 15
    },
    configCard: {
        // borderColor: '#414040',
        borderBottomWidth: 1,
        paddingVertical: 15,
        backgroundColor: 'transparent',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    configLeading: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    configAction: {
        backgroundColor: 'transparent',
    }
})

function ProfileScreen({ navigation }) {

    const theme = useTheme();

    const route = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={styles.page}>
            <View style={styles.head}>
                <View style={styles.headProfile}>
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/300'}}
                        style={{
                            height: 70, 
                            width: 70, 
                            borderRadius: 100, 
                            borderWidth: 2, 
                            borderColor: Colors.primary[100],
                        }}
                     />
                     <View style={{paddingHorizontal: 20}}>
                         <Typography.TitleThree>Hubert Formin</Typography.TitleThree>
                         <Typography.Body style={{marginVertical: 5, color: Colors.gray[100]}}>hformin@gmail.com</Typography.Body>
                     </View>
                </View>
                <View>
                    <MaterialCommunityIcons name="pencil" size={24} color={Colors[theme].text} />
                </View>
            </View>

            <View style={styles.controlCards}>
                <Pressable style={[styles.configCard, {borderColor: Colors[theme].borderColor}]} onPress={() => route('AccountsScreen')}>
                    <View style={styles.configLeading}>
                        <Ionicons name="wallet-outline" size={24} color={Colors[theme].text} />
                        <Typography.Body style={{marginLeft: 10}}>Accounts</Typography.Body>
                    </View>
                    <View style={styles.configAction}>
                        <Ionicons name="chevron-forward" size={19} color={Colors[theme].text} />
                    </View>
                </Pressable>

                <Pressable style={[styles.configCard, {borderColor: Colors[theme].borderColor}]}>
                    <View style={styles.configLeading}>
                        <Ionicons name="settings-outline" size={24} color={Colors[theme].text} />
                        <Typography.Body style={{marginLeft: 10}}>Settings</Typography.Body>
                    </View>
                    <View style={styles.configAction}>
                        <Ionicons name="chevron-forward" size={19} color={Colors[theme].text} />
                    </View>
                </Pressable>

                <Pressable style={[styles.configCard, {borderBottomColor: 'transparent'}]}>
                    <View style={styles.configLeading}>
                        <Ionicons name="log-out" size={24} color={Colors.red[60]} />
                        <Typography.Body style={{marginLeft: 10, color: Colors.red[60]}}>Logout</Typography.Body>
                    </View>
                    {/* <View style={styles.configAction}>
                        <Ionicons name="chevron-forward" size={19} color={Colors[theme].text} />
                    </View> */}
                </Pressable>

            </View>
        </View>
    )
}

export default ProfileScreen;