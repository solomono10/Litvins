import React from 'react';
import logo from '../../logo/Litvin-LOGO.png';
import style from '../../style/Header.module.css'
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
            isFadeInDown: false,
            isHidden: false,
            menuOpen: false
        }
    }
    openMenu() {
        this.setState({menuOpen: true})
    }
    closeMenu() {
        this.setState({menuOpen: false})
    }
    componentDidMount() {
        document.addEventListener('scroll', this.onScroll.bind(this))
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll)
    }
    onChangeScroll(boolean) {
        this.setState({
            isHidden: boolean,
        })
    }
    onChangeScrollDown(boolean) {
        this.setState({
            isFadeInDown: boolean
        })
    }
    onScroll = (e) => {
        const scrollTop = document.documentElement.scrollTop
        const scrolled = window.scrollY;
        const onChangeScroll = this.onChangeScroll.bind(this)
        const onChangeScrollDown = this.onChangeScrollDown.bind(this)
        window.onscroll = function (ev) {
            if (Math.ceil(scrolled) > 60) {
                onChangeScroll(true)
            } else if (Math.ceil(scrollTop) < 40) {
                onChangeScroll(false);
                onChangeScrollDown(false)
            }
        }
    }
    render() {
        let fadeInDown = style.inDown;
        let className = style.hidden;
        let navbar = style.navbar;
        return (
            <header>
                <div className={style.container}>
                    <nav
                        className={`${this.state.isHidden ? className : navbar} 
                        ${this.state.isFadeInDown ? fadeInDown : null}`}>
                        <div className={style.wrapper}>
                            <a className={style.logotip}>
                                <img src={logo} alt=""/>
                                <span>Лицвины <em>Тут</em></span>
                            </a>
                            <ul className={style.item}>
                                <NavLink exact to="/" activeClassName={style.activeLink}>Главная</NavLink>
                                <NavLink to="/team" activeClassName={style.activeLink}>Команда</NavLink>
                                <NavLink to="/list-matches" activeClassName={style.activeLink}>Матчи</NavLink>
                                <NavLink to="/club" activeClassName={style.activeLink}>Клуб</NavLink>
                                <NavLink to="/list-news" activeClassName={style.activeLink}>Новости</NavLink>
                                <NavLink to="contact" activeClassName={style.activeLink}>Контакты</NavLink>
                            </ul>
                        </div>
                        <div className={style.burgerMenu}>
                            <CheeseburgerMenu
                                width={250}
                                isOpen={this.state.menuOpen}
                                closeCallback={this.closeMenu.bind(this)}
                                noShadow={true}
                                className={style.outer}>
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