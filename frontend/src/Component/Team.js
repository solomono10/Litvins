import React, {useState} from 'react';
import HeaderContainer from "./HeaderContainer";
import styles from './../style/Team.module.css'
import leftImg from './../logo/left-player-bg.png'
import rightImg from './../logo/right-player-bg.png'
import Player from "./Player";
import Button from "./ButtonComponentTeam";
import Modal from "react-modal";
import PlayerForm from "./PlayerForm";

export const players = [
    {numberPlayer: 17, name: 'Ivan', position: 'Defenders', id: 1},
    {numberPlayer: 18, name: 'Max', position: 'Defenders', id: 2}, {
        numberPlayer: 45,
        name: 'Pawel',
        position: 'Defenders',
        id: 3
    },
    {numberPlayer: 21, name: 'Konstantin', position: 'Midfielders', id: 4},
    {numberPlayer: 32, name: 'Mikola', position: 'Midfielders', id: 5}, {
        numberPlayer: '02',
        name: 'Alexander',
        position: 'Forwards',
        id: 6
    },
    {numberPlayer: 89, name: 'Denis', position: 'Forwards', id: 7}, {
        numberPlayer: 44,
        name: 'Dima',
        position: 'Goalkeepers',
        id: 8
    }
]
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
    // const filterArrPlayers = (e) => {
    //     let newArrPlayersDef = this.state.arrPlayers.filter((player) => {
    //         return player.position === 'Defenders'
    //     })
    //     this.setState({
    //         ...this.state, arrPlayers: newArrPlayersDef
    //     })
    // }
    const toggleOpen = () => setIsOpen(!modalIsOpen);
    const submit = (values) => {
        console.log(values)
    };
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <HeaderContainer title={'Team'} activeLink={'Команда'}/>
                </div>
                <div className={styles.container}>
                    <div className={styles.labelMenu}><span>Our Team</span></div>
                        <Button title={'All'}/>
                        <Button title={'Defenders'} method={alert}/>
                        <Button title={'Midfielders'}/>
                        <Button title={'Forwards'}/>
                        <Button title={'Goalkeepers'}/>
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

