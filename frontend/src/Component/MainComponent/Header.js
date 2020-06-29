import React from 'react';
import logo from '../../logo/Litvin-LOGO.png';
import styles from '../../style/Header.module.css'
import {NavLink} from "react-router-dom";
import CheeseburgerMenu from "cheeseburger-menu";
import HamburgerMenu from 'react-hamburger-menu'
import MenuContent from "../MenuContent";

const links = [
    {title: 'Главная', address: "/", id:1},
    {title: 'Команда', address: "/team", id:2},
    {title: 'Матчи', address: "/list-matches", id:3},
    {title: 'Клуб', address: "/club", id:4},
    {title: 'Новости', address: "/list-news", id:5},
    {title: 'Контакты', address: "/contact", id:6}
]
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }
    openMenu() {
        this.setState({menuOpen: true})
    }
    closeMenu() {
        this.setState({menuOpen: false})
    }

    render() {
        return (
            <header>
                <div className={styles.container}>
                    <nav>
                        <div className={styles.wrapper}>
                            <div className={styles.logotip}>
                                <img src={logo} alt=""/>
                                <span>Лицвины тут</span>
                            </div>
                            <ul className={styles.item}>
                                <NavLink exact to="/" activeClassName={styles.activeLink}>Главная</NavLink>
                                <NavLink to="/team" activeClassName={styles.activeLink}>Команда</NavLink>
                                <NavLink to="/list-matches" activeClassName={styles.activeLink}>Матчи</NavLink>
                                <NavLink to="/club" activeClassName={styles.activeLink}>Клуб</NavLink>
                                <NavLink to="/list-news" activeClassName={styles.activeLink}>Новости</NavLink>
                                <NavLink to="contact" activeClassName={styles.activeLink}>Контакты</NavLink>
                            </ul>
                        </div>
                        <div className={styles.burgerMenu}>
                            <CheeseburgerMenu
                                width={250}
                                isOpen={this.state.menuOpen}
                                closeCallback={this.closeMenu.bind(this)}
                                noShadow={true}
                                className={styles.outer}>
                                <MenuContent closeCallback={this.closeMenu.bind(this)} links={links}/>
                            </CheeseburgerMenu>
                            <HamburgerMenu
                                isOpen={this.state.menuOpen}
                                menuClicked={this.openMenu.bind(this)}
                                width={36}
                                height={24}
                                strokeWidth={3}
                                rotate={0}
                                color='white'
                                borderRadius={0}
                                animationDuration={0.5}
                            />
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}