"use client";

import React from "react";
import styles from "./Preview.module.scss";
import mainImg from "../../../public/img/main.png";
import borderRight from "../../../public/img/right.png";
import borderleft from "../../../public/img/left.png";
import logoLocations from "../../../public/img/location.svg";
import logoServers from "../../../public/img/hierarchy-square-2.svg";
import { Achievement } from "../../ui";
import { scrollToElement } from "@/app/libs/scrollToElement";

const achievments = [
	{ number: 50, description: "Locations", img: logoLocations.src },
	{ number: 1000, description: "Servers", img: logoServers.src },
];

const Preview = () => {
	const handlerBtn = () => {
		const element = document.querySelector("#target");

		if (element instanceof HTMLElement) {
			scrollToElement(element);
		}
	};
	return (
		<section className={styles.preview}>
			<h1 className={styles.preview_title}>
				Access <span className="blue">everything securely</span> with
				<br />
				VPN
			</h1>
			<div className={styles.preview_picture}>
				<img src={mainImg.src} alt={"mainImg"} />
			</div>
			<button onClick={handlerBtn} className={styles.preview_button}>
				Get VPN
			</button>
			<div className={styles.preview_counter}>
				<div className={styles.preview_counter_header}>
					<div>
						<img
							src={borderleft.src}
							alt={"borderRight"}
							height={42}
							width={22}
						/>
					</div>
					<div className={styles.preview_counter_header_total}>
						<p>Trusted by</p>
						<p>50M+ Users</p>
					</div>
					<div>
						<img
							src={borderRight.src}
							alt={"borderRight"}
							height={42}
							width={22}
						/>
					</div>
				</div>
				<div className={styles.preview_counter_main}>
					{achievments.map((el, index) => (
						<Achievement item={el} key={index} />
					))}
				</div>
				<div className={styles.preview_counter_note}>
					VPN-your <span className="blue">ultimate</span> solution for a private
					and secure online experience!
				</div>
			</div>
		</section>
	);
};

export { Preview };
