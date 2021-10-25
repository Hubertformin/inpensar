import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";
import Typography from "./Typography";

const styles = StyleSheet.create({
    radioBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    radioBtn: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: Colors.gray[80],
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginRight: 10
    },
    radioBtnActive: {
        borderColor: Colors.primary[20],
        backgroundColor: Colors.primary[20],
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginRight: 10
    }
});

export default function Segment({defaultTab, tabs, onChange}: {defaultTab?: string, tabs: string[], onChange?: (e) => void | undefined}) {

    const [selectedTab, setSelectedTab] = React.useState<string>();

    React.useEffect(() => {
        if (defaultTab) {
            setSelectedTab(defaultTab);
        } else {
            setSelectedTab(tabs[0]);
        }
    }, []);

    const onTabChange = (tab) => {
        setSelectedTab(tab);

        if (onChange) {
            onChange(tab);
        }
    }

    return(
        <View style={styles.radioBtnContainer}>
            {
                tabs.map((tab, index) => {
                    return (
                        <Pressable key={'press-' + index} onPress={() => onTabChange(tab)} style={selectedTab === tab ? styles.radioBtnActive : styles.radioBtn}>
                            <Typography.Body key={'text-' + index}  style={{color: selectedTab === tab ? Colors.primary[100] : Colors.darkText[20]}}>{tab}</Typography.Body>
                        </Pressable>
                    );
                })
            }
        </View>
    );
}