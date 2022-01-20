import './app.css';
import Habits from './components/habits/habits';
import Header from './components/header/header';
import React, { Component } from 'react';

class App extends Component {
  state = {
    habits : [
        {id: 1, name : 'reading', count: 0},
        {id: 2, name : 'running', count: 0},
        {id: 3, name : 'coding', count: 0},
    ] 
  }

  onIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if(habit.id === item.id){
        return {...habit, count: habit.count + 1}
      }
      return item;
    })
    this.setState({habits});
  }

  onDecrement = habit => {
      const habits = this.state.habits.map(item => {
        if(item.id === habit.id){
          const count = habit.count -1 ;
          return {...habit, count: count < 0 ? 0 : count}
        }
        return item;
      })
      this.setState({habits})
  }

  onDelete = item => {
      const habits = this.state.habits.filter(habit => habit.id !== item.id);
      this.setState({habits})   
  }

  onSubmit = item => {
    const habits = [...this.state.habits, {id: Date.now(), name : item , count : 0}];
    this.setState({habits});
  }

  onReset = () =>{
    const habits = this.state.habits.map(habit => {
      if(habit.count === 0){
        return habit;
      }
      return {...habit, count: 0}
    })
    this.setState({habits});
  }

  handleCount = () =>{
    const count = this.state.habits.map(habit => habit.count > 0 ).length;
    console.log(count);
  }
  render(){
    return (
      <>
        <Header totalCount={this.state.habits.filter(habit => habit.count > 0 ).length}/>
        <Habits 
          habits={this.state.habits}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          onDelete={this.onDelete}
          onSubmit={this.onSubmit}
          onReset={this.onReset}
        />
      </>
)
  }
}


export default App;

