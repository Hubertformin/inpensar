import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {StyleSheet, View, Image, Pressable} from "react-native";
import Carousel from 'react-native-looped-carousel';
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import Colors from "../../constants/Colors";
import { Data } from "../../constants/data";
import { currencyFormatter } from "../../util/number";

const styles = StyleSheet.create({
  _story: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bottomCard: {
    backgroundColor: Colors.gray[20], 
    height: 200, 
    borderRadius: 7, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 15,
    width: '95%'
  }
})

function TransactionMonthlyReportsScreen({navigation}) {

    const [size, setSize] = React.useState({width: 0, height: 0});

    const _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        setSize({ width: layout.width, height: layout.height });
      }


    return (
        <View style={{ flex: 1 }} onLayout={_onLayoutDidChange}>
          <Carousel
            // delay={5000}
            style={size}
            autoplay={false}
            bullets
            isLooped={false}
            bulletStyle={{backgroundColor: 'rgba(255,255,255,0.4)', width: size.width / 3.5, height: 4, borderWidth: 0}}
            chosenBulletStyle={{width: size.width / 3.5, height: 4, borderWidth: 0}}
            onAnimateNextPage={(p) => console.log(p)}
          >

            <SafeAreaView style={[styles._story, {backgroundColor: Colors.red[100], paddingTop: 10}, size]}>
              <View style={{width: '100%', alignItems: 'center'}}>

                <Pressable 
                onPress={() => navigation.goBack()}
                  style={{alignItems: 'flex-end', width: '100%', paddingBottom: 15}}>
                  <Ionicons name="close" size={30} color={Colors.gray[20]} />
                </Pressable>

                <Typography.TitleTwo style={{color: Colors.gray[40]}}>This month</Typography.TitleTwo>
              </View>

                <View style={{alignItems: 'center'}}>
                  <Typography.BodyLg style={{fontSize: 24}}>You spent 💸</Typography.BodyLg>
                  <Typography.TitleOne>{currencyFormatter(38500)}</Typography.TitleOne>
                </View>
                <View style={[styles.bottomCard]}>
                  <Typography.BodyLg style={{color: Colors['light'].text}}>Your highest expenditure came from:</Typography.BodyLg>
                  <View 
                    style={{ 
                      marginVertical: 15, 
                      paddingHorizontal: 15, 
                      flexDirection: 'row', 
                      alignItems: 'center',
                      borderColor: Colors['light'].borderColor,
                      paddingVertical: 10,
                      borderRadius: 25,
                      borderWidth: 1
                    }}
                  >
                    <Image
                        source={{uri: Data.expenses[0].icon}}
                        style={{height: 30, width: 30, marginRight: 5}}
                    />
                     <Typography.TitleThree style={{fontSize: 14, textAlign: 'center', color: Colors['light'].text}}>
                       {Data.expenses[0].name}
                     </Typography.TitleThree>
                  </View>
                  <Typography.TitleTwo style={{color: Colors['light'].text}}>{currencyFormatter(16500)}</Typography.TitleTwo>
                </View>
            </SafeAreaView>

            <SafeAreaView style={[styles._story, { backgroundColor: Colors.green[100], paddingTop: 10 }, size]}>
              <View style={{width: '100%', alignItems: 'center'}}>

                <Pressable 
                onPress={() => navigation.goBack()}
                  style={{alignItems: 'flex-end', width: '100%', paddingBottom: 15}}>
                  <Ionicons name="close" size={30} color={Colors.gray[20]} />
                </Pressable>

                <Typography.TitleTwo style={{color: Colors.gray[40]}}>This month</Typography.TitleTwo>
              </View>
                <View style={{alignItems: 'center'}}>
                  <Typography.BodyLg style={{fontSize: 24}}>You earned 💰</Typography.BodyLg>
                  <Typography.TitleOne>{currencyFormatter(190500)}</Typography.TitleOne>
                </View>
                <View style={[styles.bottomCard]}>
                  <Typography.BodyLg style={{color: Colors['light'].text}}>Your highest income came from:</Typography.BodyLg>
                  <View 
                    style={{ 
                      marginVertical: 15, 
                      paddingHorizontal: 15, 
                      flexDirection: 'row', 
                      alignItems: 'center',
                      borderColor: Colors['light'].borderColor,
                      paddingVertical: 10,
                      borderRadius: 25,
                      borderWidth: 1
                    }}
                  >
                    <Image
                        source={{uri: Data.income[0].icon}}
                        style={{height: 30, width: 30, marginRight: 5}}
                    />
                     <Typography.TitleThree style={{fontSize: 14, textAlign: 'center', color: Colors['light'].text}}>
                       {Data.income[0].name}
                     </Typography.TitleThree>
                  </View>
                  <Typography.TitleTwo style={{color: Colors['light'].text}}>{currencyFormatter(110000)}</Typography.TitleTwo>
                </View>
            </SafeAreaView>
            <SafeAreaView style={[styles._story, { backgroundColor: Colors.primary[100] }, size]}>
              <Typography.TitleTwo style={{color: Colors.gray[40]}}>This month</Typography.TitleTwo>
              <Typography.TitleTwo style={{color: Colors.gray[40]}}>2 budget limits were exceeded</Typography.TitleTwo>
              <View style={{width: '100%', marginBottom: 20}}>
                <Button text="See all details" type="outline" style={{width: '100%'}} />
              </View>
            </SafeAreaView>
          </Carousel>
        </View>
      );
}

export default TransactionMonthlyReportsScreen;