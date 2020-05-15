import React from 'react'
import styles from "../style/CurrentTabs.module.css";
import cn from 'classnames'


class CurrentTabs extends React.Component {

    onChangeActive = () => {
        this.props.currentActiveClass(this.props.el.id)
    };

    render() {
        let active = this.props.el.activeClass;
        return (
            <li className={cn({[styles.activeClass]:  active === true}, styles.defaultClass)}
                onClick={this.onChangeActive} >
                <span>{this.props.el.year}</span></li>
        )

    }
}

export default CurrentTabs