"use client";

import React from "react";
import styles from "./Modal.module.scss";
import note from "./../public/img/note.svg";

const Modal = () => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal_close}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 1.4L12.6 0L7 5.6L1.4 0L0 1.4L5.6 7L0 12.6L1.4 14L7 8.4L12.6 14L14 12.6L8.4 7L14 1.4Z"
                        fill="#838283"
                    />
                </svg>
            </div>
            <div className={styles.modal_label}>Your name</div>

            <div className={styles.modal_name}>Sushma Andrade</div>
            <input
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
            <button className={styles.modal_button}>Continue</button>
        </div>
    );
};

export default Modal;
