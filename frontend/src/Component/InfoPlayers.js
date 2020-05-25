import React, {useCallback, useEffect} from "react";
import styles from './../style/InfoPlayer.module.css'
import HeaderContainer from "./HeaderContainer";
import avatar from "./../logo/pngtree-users-vector-icon-png-image_3725294.jpg"
import SliderPlayers from "./SliderPlayers";
import {useDispatch, useSelector} from "react-redux";
import {getPlayer, getPlayers} from "../redux/TeamReducer";

const infoForPlayer = [
    {heading: 'POSITION', value: 'Forward'}, {heading: 'Матчи', value: '122'}, {
        heading: 'Голов забито',
        value: '155'
    }, {heading: 'Желтые карточки', value: '30'},
    {heading: 'Красные карточки', value: '5'},
    {heading: 'Дата Рождения', value: '12.01.1997'}, {heading: 'Национальность', value: 'Беларус'}, {
        heading: 'Рост',
        value: '1.8M'
    }, {heading: 'Вес', value: '72 KG'}
]

export default function InfoPlayer(props) {
    const dispatch = useDispatch();
    const player = useSelector(state => state.teamPage.player)
    const players = useSelector(state => state.teamPage.players)
    const getInfoPlayer = useCallback(() => {
        try {
            dispatch(getPlayer(parseInt(props.match.params.userId)))

        } catch (e) {
            console.log("Error Server")
        }
    })
    useEffect(() => {
        getInfoPlayer()
        dispatch(getPlayers(1, 15))
    }, [])

        return (
            <div>
                <div className={styles.header}>
                    <HeaderContainer activeLink={'Команда'} title={player.name} />
                </div>
                <div className={styles.emptyContainer}>
                </div>
                <div className={styles.containerPlayer}>
                    <div className={styles.avatar}>
                        <img src={avatar} alt=""/>
                    </div>
                    <div className={styles.number}>
                        <span>{player.numberPlayer}</span>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.name}><h2>{player.name}</h2></div>
                        <div className={styles.wrap}>
                            <ul className={styles.info}>
                                {infoForPlayer.map((el) => {
                                    return <li key={el.value}><span className={styles.heading}>{el.heading}</span><span
                                        className={styles.value}>{el.value}</span></li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.line}>
                    <div className={styles.containerLine}>

                    </div>
                </div>
                <div className={styles.playerTotalInfoContainer}>
                    <div className={styles.playerTotalInfo}>
                        <p><strong>Aenean lobortis eu nibh eu euismod.
                            In ullamcorper, velit sed tincidunt tempor, ante elit euismod magna, vel scelerisque odio
                            velit nec arcu.
                            Nulla dolor sapien, vehicula sit amet augue nec, consequat aliquet velit.
                            Donec euismod interdum mauris id dapibus.</strong></p>
                        <p>
                            Fusce mollis ante dolor, in tincidunt justo vehicula id.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                            egestas.
                            Nam nec tortor sit amet metus vestibulum sagittis. Donec sed dignissim nisi.
                            Pellentesque ac dolor vestibulum, sollicitudin leo ac, pretium nulla. Mauris sit amet mattis
                            turpis, eu molestie lectus.
                            Donec semper sem ac dolor euismod vulputate. Quisque massa elit, viverra et euismod nec,
                            porta eget elit.
                            Aliquam molestie tempus ex, ut iaculis tortor eleifend ac. Aliquam id massa facilisis,
                            iaculis orci et, ornare augue.
                            Fusce eget sollicitudin est. Fusce ultrices enim ut aliquam sollicitudin.
                        </p>
                        <ul>
                            <li>Maecenas a nisl in turpis fermentum imperdiet;</li>
                            <li>Nullam at diam et odio consectetur fermentum;</li>
                            <li>Maecenas volutpat lacus quis sem congue egestas;</li>
                            <li>Quisque sit amet nunc quis quam tincidunt scelerisque;</li>
                            <li>Maecenas vestibulum ligula sed augue dictum, quis tincidunt nulla pellentesque;</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.sliderContainer}>
                    <h3 className={styles.otherTitle}>Other <span>Players</span></h3>
                    <div className={styles.playerWrap}>
                        <SliderPlayers players={players}/>
                    </div>
                </div>
            </div>
        )
}