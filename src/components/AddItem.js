import React,{Component} from 'react';
import {TextInput,Button,View,Text} from 'react-native';
import {db} from '../config';
let itemsRef=db.ref('items');


let addItem=item=>{
    db.ref('/items').push({
        itemsInfo:item
    });
};

export default class AddItem extends Component{
    constructor(props){
        super(props);
        this.state={
            itemsInfo:'',
            items:[]
        }
        this.handleChange=this.handleChange.bind(this);
        this.clickToAdd=this.clickToAdd.bind(this);
    }
    clickToAdd(){
addItem(this.state.itemsInfo);
    }
    handleChange(e){
this.setState({itemsInfo:e.nativeEvent.text})
    }
    componentDidMount(){
        itemsRef.on('value',myDataTable =>{
            let data = myDataTable.val();
            let items = Object.values(data);
            this.setState({items});
        })
    }
    render(){
        return(
           <View>
               <TextInput onChange={this.handleChange}>

               </TextInput>
               <Button title="submit" onPress={this.clickToAdd}></Button>
               {this.state.items.map(x=>{
                   return <Text>{x.itemsInfo}</Text>
               })}
           </View>
        )
    }
}