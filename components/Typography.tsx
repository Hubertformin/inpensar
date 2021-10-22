import React from "react";
import { Text, View } from "./Themed"

const Typography = ({children}) => {
    let subComponentList = Object.keys(Typography);

    let subComponents = subComponentList.map((key) => {
        return React.Children.map(children, (child) =>
            child.type.name === key ? child : null
        );
    });

    return (
        <>
            <View>
                {subComponents.map((component) => component)}
            </View>
        </>
    );
}

const TitleOne = (props) => {
    const style = {...props.style, fontFamily: 'Gilroy-bold', fontSize: 32}
    return(
        <Text {...props} style={{...style}} />
    )
}

const TitleTwo =  (props) => {
    const style = {...props.style, fontFamily: 'Gilroy-bold', fontSize: 24}
    return(
        <Text {...props} style={{...style}} />
    )
}

const TitleThree = (props) => {
    const style = {...props.style, fontFamily: 'Gilroy-semibold', fontSize: 18}
    return(
        <Text {...props} style={{...style}} />
    )
}

const Body = (props) => {
    const style = {...props.style, fontFamily: 'Gilroy-medium', fontSize: 14}
    return(
        <Text {...props} style={{...style}} />
    )
}

const BodyLg = (props) => {
    const style = {...props.style, fontFamily: 'Gilroy-medium', fontSize: 16}
    return(
        <Text {...props} style={{...style}} />
    )
}

const Small = (props) => {
    const style = {...props.style, fontFamily: 'Gilroy', fontSize: 13}
    return(
        <Text {...props} style={{...style}} />
    )
}

const Tiny = (props) => {
    const style = {...props.style, fontFamily: 'Gilroy', fontSize: 12}
    return(
        <Text {...props} style={{...style}} />
    )
}

Typography.TitleOne = TitleOne;
Typography.TitleTwo = TitleTwo;
Typography.TitleThree = TitleThree;

Typography.Bpdy = Body;
Typography.BodyLg = BodyLg;
Typography.Small = Small;
Typography.Tiny = Tiny;

export default Typography;