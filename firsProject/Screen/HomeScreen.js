import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import WelComeScreen from "./WelcomScreen";


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <TouchableOpacity style={{height:150, width:150, backgroundColor:"pink"}} onPress={()=>this.props.navigation.navigate("WelComeScreen", {name:"vijay"})}>
        </TouchableOpacity>
       
      </View>
    );
  }
}