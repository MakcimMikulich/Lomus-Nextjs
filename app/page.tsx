"use client";

import styles from "./page.module.scss";

import { Header } from "./ui";
import { Advantages, Preview, Select } from "./sections";
import { useState } from "react";
import { Modal } from "./components/Modal/Modal";

export default function Home() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [userName, setUserName] = useState("");

    console.log(userName);

    return (
        <>
            <Header />
            <main className={styles.main}>
                <Preview />
                <Advantages />
                <Select
                    setUserName={setUserName}
                    setModalIsOpen={setModalIsOpen}
                />
            </main>
            {modalIsOpen && (
                <Modal userName={userName} setModalIsOpen={setModalIsOpen} />
            )}
        </>
    );
}
