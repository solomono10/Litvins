import React, {useEffect,useState} from 'react';
import HeaderContainer from "../HeaderContainer";
import clubLogo1 from '../../logo/club-logo.png'
import clubLogo2 from '../../logo/club-logo1.png'
import styles from '../../style/ListMatch.module.css'
import AsideContainer from "./AsideContainer";
import InfoMatch from "../InfoMatch";
import {getMatches} from "../../redux/MatchsReducer";
import {useDispatch, useSelector} from "react-redux";
import Modal from "react-modal";



export const nextMatchInfo = {
    timeBeforeMatch:{day:6,hrs:12,min:23,sec:30},
    clubF:{logo: clubLogo1 ,name:'England'},
    clubS:{logo: clubLogo2 ,name:'Amsterdam'},
    data:'March 29, 2020 | 12.15 am',
    location:'СШ №180 Радужная 8/3'
};


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


export default function ListMatches() {
    const dispatch = useDispatch()
    const listMatches = useSelector(state => state.matchesPage.matches)
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        dispatch(getMatches())
    },[])

    const onAddmatchBtn = () => {

        setIsOpen(!modalIsOpen)
        console.log(modalIsOpen)
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <HeaderContainer  title={'MATCH LIST'} activeLink={'Список матчей'} extraInfo={nextMatchInfo} header={true}/>
            </div>
            <div className={styles.container}>
                <div className={styles.container__content}>
                    <AsideContainer/>
                    <div>
                        <div className={styles.listMatch}>
                            {
                                listMatches.map((match)=>{
                                    return <InfoMatch match={match} key={match.id}/>
                                })
                            }
                        </div>
                        <button onClick={onAddmatchBtn} className={styles.addMatch}>Add match</button>
                    </div>
                    <div>
                        <Modal isOpen={modalIsOpen}
                               style={customStyles}
                               ariaHideApp={false}
                               contentLabel="Example Modal"
                               className={styles.modal}>
                            <button className={styles.modal_CloseButton} onClick={onAddmatchBtn}>X</button>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>

    )
}