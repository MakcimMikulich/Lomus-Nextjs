"use client";

import React from "react";
import logo from "../../../public/img/logo.svg";
import styles from "./Header.module.scss";
import { scrollToElement } from "@/app/libs/scrollToElement";

const Header = () => {
	const handlerLogo = () => {
		const element = document.body;

		if (element instanceof HTMLElement) {
			scrollToElement(element);
		}
	};

	const handlerBtn = () => {
		const element = document.querySelector("#target");

		if (element instanceof HTMLElement) {
			scrollToElement(element);
		}
	};

	return (
		<div className={styles.header_wrapper}>
			<header className={styles.header}>
				<div onClick={handlerLogo} className={styles.logo_wrapper}>
					<img src={logo.src} alt={"logo"} />
					<span>VPN</span>
				</div>
				<button onClick={handlerBtn} className={styles.button}>
					Get VPN
				</button>
			</header>
		</div>
	);
};

export { Header };
