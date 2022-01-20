import React, { Component } from 'react';
import Form from '../form/form';
import Habit from '../habit/habit';
import styles from './habits.module.css';
class Habits extends Component {

    onIncrement = habit => {
        this.props.onIncrement(habit);
    }
    onDecrement = habit => {
        this.props.onDecrement(habit);
    }
    onDelete = habit => {
        this.props.onDelete(habit);
    }
    onSubmit = habit => {
        this.props.onSubmit(habit);
    }

    render() {
        return (
            
            <ul className={styles.container}>
                <Form
                    onSubmit={this.onSubmit}
                />
                {this.props.habits.map(habit => 
                    <Habit
                     key={habit.id}
                     habit={habit}
                     onIncrement={this.props.onIncrement}
                     onDecrement={this.props.onDecrement}
                     onDelete={this.props.onDelete}
                    />
                )}
                <button className={styles.reset} onClick={this.props.onReset}>reset All</button>
            </ul>
        );
    }
}

export default Habits;