import React, {useCallback, useEffect, useState} from 'react';
import HeaderContainer from "./HeaderContainer";
import styles from './../style/Team.module.css'
import leftImg from './../logo/left-player-bg.png'
import rightImg from './../logo/right-player-bg.png'
import Player from "./Player";
import Button from "./ButtonComponentTeam";
import Modal from "react-modal";
import PlayerForm from "./PlayerForm";
import {useDispatch, useSelector, useStore} from "react-redux";
import {getPlayers, putFilterPlayers} from "../redux/TeamReducer";
import Paginator from "./Paginator";

// export const players = [
//     {numberPlayer: 17, name: 'Ivan', position: 'Defenders', id: 1},
//     {numberPlayer: 18, name: 'Max', position: 'Defenders', id: 2}, {
//         numberPlayer: 45,
//         name: 'Pawel',
//         position: 'Defenders',
//         id: 3
//     },
//     {numberPlayer: 21, name: 'Konstantin', position: 'Midfielders', id: 4},
//     {numberPlayer: 32, name: 'Mikola', position: 'Midfielders', id: 5}, {
//         numberPlayer: '02',
//         name: 'Alexander',
//         position: 'Forwards',
//         id: 6
//     },
//     {numberPlayer: 89, name: 'Denis', position: 'Forwards', id: 7}, {
//         numberPlayer: 44,
//         name: 'Dima',
//         position: 'Goalkeepers',
//         id: 8
//     }
// ]

const customStyles = {
    content: {
        width: '700px',
        height: '300px',
        top: '55%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9,
        position: 'relative'
    }
};


export default function Team() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [portionNumber, setPortionNumber] = useState(1)
    const dispatch = useDispatch();
    const players = useSelector(state => state.teamPage.players)
    const currentPage = useSelector(state => state.teamPage.currentPage)
    const pageSize = useSelector(state => state.teamPage.pageSize)
    const totalPlayersCount = useSelector(state => state.teamPage.totalPlayersCount)

    const getTeam = useCallback(() => {
        try {
            dispatch(getPlayers(currentPage,pageSize))
        } catch (e) {
            console.log("Error Server")
        }
    })
    const onPageChanged = (pageNumber) =>{
        dispatch(getPlayers(pageNumber,pageSize))
    }
    useEffect(() => {
        getTeam()
    }, [])
    const toggleOpen = () => setIsOpen(!modalIsOpen);
    const submit = (values) => {
        console.log(values)
    };
    const filterPlayers = (e) =>{
        dispatch(putFilterPlayers(e.currentTarget.title))
    }
    const onPageChangedNextPrev = (value) =>{
        if(value === 'Next'){
            setPortionNumber(portionNumber+1)
          dispatch(getPlayers(currentPage+1))
        }else {
            setPortionNumber(portionNumber-1)
            dispatch(getPlayers(currentPage-1))
        }
    }
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
                    {/*<Button title={'Add new Player'} method={toggleOpen}/>*/}
                </div>
                <div className={styles.listPlayers}>
                    <div className={styles.leftPlayer}><img src={leftImg} alt=""/></div>
                    <div className={styles.rightPlayer}><img src={rightImg} alt=""/></div>
                    <div className={styles.containerCenter}>
                        {players.map((player) => {
                            return <Player key={player.id} player={player}/>
                        })}
                    </div>
                </div>
                <div className={styles.paginator}>
                    <Paginator
                        currentPage={currentPage}
                        pageSize={pageSize}
                        totalPlayersCount={totalPlayersCount}
                        onPageChanged={onPageChanged}
                        onPageChangedNextPrev={onPageChangedNextPrev}
                        portionNumber={portionNumber}/>
                </div>
            </div>

            <div>
                <Modal isOpen={modalIsOpen}
                       style={customStyles}
                       ariaHideApp={false}
                       contentLabel="Example Modal"
                       className={styles.modal}>
                    <button className={styles.modal_CloseButton} onClick={toggleOpen}>X</button>
                    <PlayerForm onSubmit={submit}/>
                </Modal>
            </div>
        </div>
    )
}

