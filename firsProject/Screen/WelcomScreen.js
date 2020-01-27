import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export default class WellComeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:""
        }
    }

    componentDidMount(){
       
    }

  render() {
      
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"red" }}>
  <Text>{this.props.navigation.state.params.name}</Text>
      </View>
    );
  }
}