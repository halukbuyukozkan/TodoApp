// import Alanı

import React from 'react';


import { StatusBar } from 'expo-status-bar';
import { Text, TextInput,Button , View } from 'react-native';


// create Alanı

class App extends React.Component{
  state = {
    text: "",
    todo: ""
  }
  addTodo = () =>{
    this.setState({todo: this.state.text});
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>Hi World</Text>
        <TextInput 
          style={styles.inputStyle}
          onChangeText={(text)=>this.setState({text})}
        />
        <Button
          title='Add todo'
          onPress={this.addTodo}
        />
        <Text>{this.state.todo}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',  
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle:{
    height: 40,
    width: 160,
    borderColor:"green",
    borderWidth: 1
  }
};

// export Alanı
export default App;