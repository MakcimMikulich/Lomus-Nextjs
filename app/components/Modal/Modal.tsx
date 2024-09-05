"use client";

import React, { useState } from "react";
import styles from "./Modal.module.scss";
import note from "/public/img/note.svg";
import close from "/public/img/close.svg";
import { validateEmail } from "./validateEmail";

type ModalProps = {
    setModalIsOpen: (state: boolean) => void;
    userName: string;
};

const Modal = ({ setModalIsOpen, userName }: ModalProps) => {
    const [inputValue, setInputValue] = useState("");
    const [btnInnerText, setBtnInnerText] = useState("Continue");

    console.log(userName);

    const handlerClick = () => {
        const valid = validateEmail(inputValue);

        if (valid) {
            console.log(inputValue);
            setBtnInnerText("Complete");
        } else {
            setBtnInnerText("Invalid Email");
        }
    };

    return (
        <div className={styles.modal}>
            <div
                onClick={() => {
                    setModalIsOpen(false);
                    setBtnInnerText("Continue");
                    setInputValue("");
                }}
                className={styles.modal_close}
            >
                <img src={close.src} alt={"close"} />
            </div>
            <div className={styles.modal_label}>Your name</div>

            <div className={styles.modal_name}>{userName}</div>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={"Enter your email"}
                className={styles.modal_input}
            ></input>
            <div className={styles.modal_note}>
                <img src={note.src} alt={"note"} />
                <span>
                    Your information is 100% secure. We don’t share your
                    personal information.
                </span>
            </div>
            <button onClick={handlerClick} className={styles.modal_button}>
                {btnInnerText}
            </button>
        </div>
    );
};

export { Modal };
