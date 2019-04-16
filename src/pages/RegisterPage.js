import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';
import RegisterComponent from '../Component/RegisterComponent'

export default class RegisterPager extends Component{
    render(){
        return(
           <View style={styles.container}>
           <RegisterComponent navigation={this.props.navigation}/>
           </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContainer:'center',
        backgroundColor:'#36485f',
        paddingLeft:60,
        paddingRight:60
    }
})