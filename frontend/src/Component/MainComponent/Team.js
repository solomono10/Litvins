import React, {useEffect, useState} from 'react';
import HeaderContainer from "../HeaderContainer";
import styles from '../../style/Team.module.css'
import leftImg from '../../logo/left-player-bg.png'
import rightImg from '../../logo/right-player-bg.png'
import Player from "../Player";
import Button from "../ButtonComponentTeam";
import Modal from "react-modal";
import PlayerForm from "../PlayerForm";
import {useDispatch, useSelector} from "react-redux";
import {getPlayers, putFilterPlayers} from "../../redux/TeamReducer";
import Paginator from "../Paginator";


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
    const toggleOpen = () => setIsOpen(!modalIsOpen);
    const submit = (values) => {
        console.log(values)
    };
    const filterPlayers = (e) =>{
        dispatch(putFilterPlayers(e.currentTarget.title))
    }
    const dispatchMethod = (pageNumber) =>{
       dispatch(getPlayers(pageNumber,pageSize))
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
                        onDispatchMethod={dispatchMethod}
                    />
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

