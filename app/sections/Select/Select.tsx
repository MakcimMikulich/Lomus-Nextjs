"use client";

import React, { useEffect, useState } from "react";
import styles from "./Select.module.scss";
import { Row } from "@/app/components";
import { fetchNames } from "@/app/libs/fetchNames";

type User = {
    name: {
        title: string;
        first: string;
        last: string;
    };
};

type SelectProps = {
    setModalIsOpen: (state: boolean) => void;
    setUserName: (name: string) => void;
};

const Select = ({ setModalIsOpen, setUserName }: SelectProps) => {
    const [names, setNames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeRow, setActiveRow] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const { results } = await fetchNames();

                const arrNames = results.reduce((acc: string[], el: User) => {
                    const { title, first, last } = el.name;
                    acc.push(`${title} ${first} ${last}`);
                    return acc;
                }, []);

                setNames(arrNames);
                setUserName(arrNames[activeRow]);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <section className={styles.select}>
            <h2 className={styles.select_title}>
                Millions of people trust us!
            </h2>
            <div className={styles.select_content}>
                <div id="target" className={styles.select_content_note}>
                    Choose <span className="blue">your NAme</span>
                </div>
                <div className={styles.select_content_field}>
                    {loading ? (
                        <span>Loading ...</span>
                    ) : (
                        names.map((name, i) => (
                            <Row
                                setUserName={setUserName}
                                name={name}
                                active={activeRow === i}
                                index={i}
                                setActiveRow={setActiveRow}
                                key={i}
                            />
                        ))
                    )}
                </div>
                <button
                    onClick={() => setModalIsOpen(true)}
                    className={styles.select_content_btn}
                >
                    Get VPN
                </button>
            </div>
        </section>
    );
};

export { Select };
