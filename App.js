// import Alanı

import React from 'react';


import { StatusBar } from 'expo-status-bar';
import { Text, TextInput,Button , View,TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';


// create Alanı

class App extends React.Component{
  state = {
    text: "",
    todo: []
  }
  addTodo = () =>{
    var newToDo = this.state.text;
    var arr = this.state.todo;
    arr.push(newToDo);
    this.setState({todo: arr, text: ""});
  }
  deleteTodo = (t) =>{ 
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr});
  }
  renderTodos = () =>{
    return this.state.todo.map(t=>{
      return (
        <TouchableOpacity key={t}>
          <Text
          style={styles.todo} 
          key={t}
          onPress={()=>{this.deleteTodo(t)}}
          >{t}</Text>
        </TouchableOpacity>
      )
    })
  }
  render(){
    return (
      <View style={styles.wholeStyle}>
        <View style={styles.container}>
          <Text style={styles.header}>Test app</Text>
          <TextInput 
            style={styles.inputStyle}
            onChangeText={(text)=>this.setState({text})}
            value={this.state.text}
          />
          <Button
            title='Add todo'
            onPress={this.addTodo}
            color="#F9AA33"  
          />
          <View style={{marginTop: 20}}/>
          {this.renderTodos()}
          <StatusBar style="auto" />
        </View>
      </View>
    );
  }
}


const styles = {
  container: {
    marginTop: 70,  
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle:{
    height: 40,
    width: 160,
    borderColor:"#F9AA33",
    borderWidth: 5,
    borderRadius: 10,
    padding: 2,

  },
  header:{
    fontSize: 30,
    color: '#F9AA33',
    fontWeight: 'bold',
  },
  wholeStyle:{
    flex: 1,
    backgroundColor: '#4A6572', 
  },
  todo:{
    fontSize: 24,
    color: 'white',
    
  }
  
};

// export Alanı
export default App;