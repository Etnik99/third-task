import React from 'react'
import { useRef, useEffect } from 'react';
import style from '../components/Popup.module.css';
import { data } from './data';

const useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        let maybeHandler = (event) => {
            if (!domNode.current.contains(event.target)) {

                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
}

function Popup(props) {
    const domNode = useClickOutside(() => {
        props.setTrigger(false);
    });

    return (
        <div ref={domNode} className={style.ppcontainer}>
            <div className={style.ppheader}>
                <h1>Theme Color</h1>
                <button className={style.btnHeader}>Change Theme</button>
            </div>

            <div>
                {data.map((props) => {
                    return (
                        <div key={props.id} className={style.colorItem}>
                            <p className={style.ppname}>{props.name}</p>
                            <div className={style.colorContainer}>
                                <small className={style.ppstatus}>{props.status}</small>
                                <div className={style.box} style={{ background: `${props.color} ` }}>{props.color}</div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className={style.ppbtn}>
                <button className={style.btnCancel}
                    onClick={() => props.setTrigger(false)} >Cancel</button>
                <button className={style.btnSave}>Save</button>
            </div>
        </div>
    )
}

export default Popup;
