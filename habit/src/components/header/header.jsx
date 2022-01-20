import React, { PureComponent } from 'react';
import styles from './header.module.css';

class Header extends PureComponent {
    render() {
        return (
            <nav className={styles.nav}>
                <span className={styles.logo}>habit-traker</span>
                <span className={styles.counter}>{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Header;