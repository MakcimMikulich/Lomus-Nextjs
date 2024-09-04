import styles from "./page.module.scss";

import { Header } from "./ui";
import { Advantages, Preview, Select } from "./sections";
import { useState } from "react";

export default function Home() {
    // const [modalOpen, setModalOpen] = useState()
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Preview />
                <Advantages />
                <Select />
            </main>
        </>
    );
}
