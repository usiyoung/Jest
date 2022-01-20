import React, { PureComponent } from 'react';
import styles from './habit.module.css';

class Habit extends PureComponent {
    handleIncrement = () => {  
        this.props.onIncrement(this.props.habit);
    }

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    }

    handleDelete = () =>{
        this.props.onDelete(this.props.habit);
    }
    render() {
        const {name, count} = this.props.habit;
        return (
            <li className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.counter}>{count}</span>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.plus} onClick={this.handleIncrement}>+</button>
                    <button className={styles.minus} onClick={this.handleDecrement}>-</button>
                    <button className={styles.delete} onClick={this.handleDelete}>❌</button>
                </div>
            </li>
        );
    }
}

export default Habit;