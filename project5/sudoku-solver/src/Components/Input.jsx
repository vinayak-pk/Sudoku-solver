import React from 'react';

import styles from "./Sudoku.module.css"
export function InputBox({item}){
    return (
        <div className={styles.inputbox}>
            {item}
        </div>
    )
}
