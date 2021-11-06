import React from "react";
import { Text, TextProps, View } from "./Themed"

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

const TitleOne = (props: TextProps) => {
    const style = {fontFamily: 'Inter-bold', fontSize: 32}
    return(
        <Text {...props} style={[style, props.style]} />
    )
}

const TitleTwo =  (props: TextProps) => {
    const style = {fontFamily: 'Inter-bold', fontSize: 24}
    return(
        <Text {...props} style={[style, props.style]} />
    )
}

const TitleThree = (props: TextProps) => {
    const style = {fontFamily: 'Inter-semibold', fontSize: 18}
    return(
        <Text {...props} style={[style, props.style]} />
    )
}

const Body = (props: TextProps) => {
    const style = {fontFamily: 'Inter', fontSize: 14}
    return(
        <Text {...props} style={[style, props.style]} />
    )
}

const BodyLg = (props: TextProps) => {
    const style = {fontFamily: 'Inter-medium', fontSize: 16}
    return(
        <Text {...props} style={[style, props.style]} />
    )
}

const Small = (props: TextProps) => {
    const style = {fontFamily: 'Inter', fontSize: 13}
    return(
        <Text {...props} style={[style, props.style]} />
    )
}

const Tiny = (props: TextProps) => {
    const style = {fontFamily: 'Inter', fontSize: 12}
    return(
        <Text {...props} style={[style, props.style]} />
    )
}

Typography.TitleOne = TitleOne;
Typography.TitleTwo = TitleTwo;
Typography.TitleThree = TitleThree;

Typography.Body = Body;
Typography.BodyLg = BodyLg;
Typography.Small = Small;
Typography.Tiny = Tiny;

export default Typography;