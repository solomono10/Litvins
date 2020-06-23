import React, {useEffect, useState} from 'react';
import HeaderContainer from "../HeaderContainer";
import styles from '../../style/Team.module.css'
import leftImg from '../../logo/left-player-bg.png'
import rightImg from '../../logo/right-player-bg.png'
import Player from "../Player";
import Button from "../ButtonComponentTeam";
import {useDispatch, useSelector} from "react-redux";
import {getPlayers, putFilterPlayers} from "../../redux/TeamReducer";
import Paginator from "../Paginator";

const arrPlayers = [
    {numberPlayer: 17, name: 'Ivan', position: 'Defenders', id: 1},
    {numberPlayer: 18, name: 'Max', position: 'Defenders', id: 2},
    {numberPlayer: 45, name: 'Pavel', position: 'Defenders', id: 3},
    {numberPlayer: 21, name: 'Konstantin', position: 'Midfielders', id: 4},
    {numberPlayer: 32, name: 'Mikola', position: 'Midfielders', id: 5},
    {numberPlayer: '02', name: 'Alexander', position: 'Forwards', id: 6},
    {numberPlayer: 89, name: 'Denis', position: 'Forwards', id: 7},
    {numberPlayer: 44, name: 'Dima', position: 'Goalkeepers', id: 8},
    {numberPlayer: 14, name: 'Semen', position: 'Defenders', id: 9},
    {numberPlayer: 15, name: 'Zhenya', position: 'Defenders', id: 10},
    {numberPlayer: 40, name: 'Volodya', position: 'Defenders', id: 11},
    {numberPlayer: 23, name: 'Igor', position: 'Midfielders', id: 12},
    {numberPlayer: 39, name: 'Vlad', position: 'Midfielders', id: 13},
    {numberPlayer: '03', name: 'Alina', position: 'Forwards', id: 14},
    {numberPlayer: 88, name: 'Viktor', position: 'Forwards', id: 15},
    {numberPlayer: 46, name: 'Anton', position: 'Goalkeepers', id: 16},
    {numberPlayer: 46, name: 'Konstantin', position: 'Forwards', id: 17},
    {numberPlayer: 46, name: 'Sergey', position: 'Midfielders', id: 18},
    {numberPlayer: 46, name: 'Timofey', position: 'Forwards', id: 19},
    {numberPlayer: 46, name: 'Yura', position: 'Defenders', id: 20}]

export default function Team() {
    const player = useSelector(state => state.authPage.playerId)
    const [modalIsOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const players = useSelector(state => state.teamPage.players)
    const currentPage = useSelector(state => state.teamPage.currentPage)
    const pageSize = useSelector(state => state.teamPage.pageSize)
    const totalPlayersCount = useSelector(state => state.teamPage.totalPlayersCount)

    useEffect(() => {
        dispatch(getPlayers(currentPage,pageSize))
    }, [])
    const filterPlayers = (e) =>{
        dispatch(putFilterPlayers(e.currentTarget.title))
    }
    const dispatchMethod = (pageNumber) =>{
       dispatch(getPlayers(pageNumber,pageSize))
    }
    console.log(players)
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <HeaderContainer title={'Team'} activeLink={'Команда'}/>
                </div>
                <div className={styles.container}>
                    <div className={styles.labelMenu}><span>Our Team</span></div>
                    <Button title={'All'} method={filterPlayers}/>
                    <Button title={'Defenders'} method={filterPlayers}/>
                    <Button title={'Midfielders'} method={filterPlayers}/>
                    <Button title={'Forwards'} method={filterPlayers}/>
                    <Button title={'Goalkeepers'} method={filterPlayers}/>
                </div>
                <div className={styles.listPlayers}>
                    {/*<div className={styles.leftPlayer}><img src={leftImg} alt=""/></div>*/}
                    {/*<div className={styles.rightPlayer}><img src={rightImg} alt=""/></div>*/}
                    <div className={styles.containerCenter}>
                        {players.length !== 0 ? players.map((player) => {
                            return <Player key={player.id} player={player}/>
                        }): arrPlayers.map((player) => {
                            return <Player key={player.id} player={player}/>
                        })}
                    </div>
                </div>
                <div className={styles.paginator}>
                    <Paginator
                        currentPage={currentPage}
                        pageSize={pageSize}
                        totalPlayersCount={totalPlayersCount}
                        onDispatchMethod={dispatchMethod}
                    />
                </div>
            </div>
        </div>
    )
}

