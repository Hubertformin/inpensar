import React from "react";
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Colors from "../constants/Colors";
import useTheme from "../hooks/colorScheme";
import Typography from "./Typography";

export default function Segment({style, defaultTab, tabs, onChange}: {style?: StyleProp<ViewStyle>, defaultTab?: string, tabs: string[], onChange?: (e) => void | undefined}) {
    const theme = useTheme();

    const styles = StyleSheet.create({
        radioBtnContainer: {
            flexDirection: 'row',
            justifyContent: 'center'
        },
        radioBtn: {
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderColor: Colors[theme].borderColor,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
            marginRight: 10
        },
        radioBtnActive: {
            borderColor: theme === 'light' ? Colors.primary[20] : Colors.primary[100],
            backgroundColor: theme === 'light' ? Colors.primary[20] : Colors.primary[100],
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
            marginRight: 10
        }
    });

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
        <View style={[styles.radioBtnContainer, style]}>
            {
                tabs.map((tab, index) => {
                    return (
                        <Pressable 
                            key={'press-' + index} onPress={() => onTabChange(tab)} 
                            style={selectedTab === tab ? styles.radioBtnActive : styles.radioBtn}>
                            <Typography.Body 
                            key={'text-' + index}  
                            style={{color: selectedTab === tab ? Colors.primary[20] :  Colors[theme].text, fontSize: 12}}
                            >
                                {tab}
                            </Typography.Body>
                        </Pressable>
                    );
                })
            }
        </View>
    );
}