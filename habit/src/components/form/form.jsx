import React, { PureComponent } from 'react';
import styles from './form.module.css';
class Form extends PureComponent {
    inputRef = React.createRef();
    formRef = React.createRef();

    handleAdd = event =>{
        event.preventDefault();
        const value = this.inputRef.current.value;
        if(!value){
            return;
        }
        this.props.onSubmit(value);
        this.formRef.current.reset();
    }

    render() {
        return (
            <form ref={this.formRef} className={styles.form} onSubmit={this.handleAdd}>
                <input 
                    ref={this.inputRef}
                    className={styles.input} 
                    type="text" 
                    placeholder='입력하세요!' 
                />
                <button className={styles.button}>click!</button>
            </form>
        );
    }
}

export default Form;