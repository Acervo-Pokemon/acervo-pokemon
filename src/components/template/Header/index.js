import React from 'react';
import { Image, Text, Touchable, View } from 'react-native';
import logo from '../../../assets/img/pokemon-logo.png'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default ({onPress, favorite}) => {

    return (
        <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image style={{width: 206,height:75}} source={logo} />
            <View>
                <TouchableOpacity onPress={onPress} style={{borderRadius:10 ,width:50, height:50, backgroundColor:"#22368E", justifyContent: 'center',alignItems: 'center'}} >
                    <Icon color={favorite ? "#FFEC14" : "#ffff"} size={35} size={35} name='star' />
                </TouchableOpacity>
            </View>
        </View>
    )

}