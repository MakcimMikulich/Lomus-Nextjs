import Image from "next/image";
import styles from "./page.module.scss";
import logo from "../public/img/logo.svg";
import mainImg from "../public/img/main.png";
import borderleft from "../public/img/left.png";
import borderRight from "../public/img/right.png";
import logoLocations from "../public/img/location.svg";
import logoServers from "../public/img/hierarchy-square-2.svg";

export default function Home() {
	console.dir(borderleft);

	return (
		<>
			<div className={styles.header_wrapper}>
				<header className={styles.header}>
					<div className={styles.logo_wrapper}>
						<img src={logo.src} alt={"logo"} />
						<span>VPN</span>
					</div>
					<button className={styles.button}>Get VPN</button>
				</header>
			</div>
			<main className={styles.main}>
				<section className={styles.preview}>
					<h1 className={styles.preview_title}>
						Access <span className="blue">everything securely</span> with
						<br />
						VPN
					</h1>
					<div className={styles.preview_picture}>
						<img src={mainImg.src} alt={"mainImg"} />
					</div>
					<button className={styles.preview_button}>Get VPN</button>
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
							<div className={styles.achievement}>
								<div>
									<img src={logoLocations.src} alt={logoLocations} />
								</div>
								<div className={styles.achievement_info}>
									<p className={styles.achievement_info_number}>50+</p>
									<p className={styles.achievement_info_note}>Locations</p>
								</div>
							</div>
						</div>
						<div className={styles.preview_counter_note}>
							VPN-your <span className="blue">ultimate</span> solution for a
							private and secure online experience!
						</div>
					</div>
				</section>
				<section></section>
				<section></section>
			</main>
		</>
	);
}
