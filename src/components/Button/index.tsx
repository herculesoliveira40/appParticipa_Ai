import React from "react";

import {  TouchableHighlightProps, TouchableOpacity, ActivityIndicator, Text} from "react-native";
import { style } from './styles';

type Props = TouchableHighlightProps & {
    text: string;
    loading?: boolean;
}

export function Button({...rest}:Props) {
    return (
        <TouchableOpacity 
            style={style.button}
            {...rest}
            activeOpacity={0.6}
        >
            {rest.loading?<ActivityIndicator />:<Text style={style.textButton}>{rest.text}</Text> }
        </TouchableOpacity>
    );
}


//40 https://www.youtube.com/watch?v=1iYA1Qf_2UI&list=PLN5FV-HmjCA8UKWLep7O31PtQYqML8-Wd&index=2&ab_channel=CaioeduardoDev 