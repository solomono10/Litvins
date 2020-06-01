import React from "react";
import styles from "../style/Statistics.module.css";
import photo from "../logo/pngtree-users-vector-icon-png-image_3725294.jpg";



export default function StatisticsPlayer ({player}) {
  return(
      <div className={styles.champ}>
          <div className={styles.champ__info}>
              <div className={styles.img}><img src={photo} alt=""/></div>
              <div className={styles.name}><span>{player.name}</span></div>
          </div>
          <div className={styles.num}><span>{player.count}</span></div>
      </div>
  )
}