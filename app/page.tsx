import Image from "next/image";
import styles from "./page.module.scss";
import logo from "../public/img/logo.svg";
import mainImg from "../public/img/main.png";
import borderleft from "../public/img/left.png";
import borderRight from "../public/img/right.png";
import logoLocations from "../public/img/location.svg";
import logoServers from "../public/img/hierarchy-square-2.svg";
import icon1 from "../public/img/Icon1.png";
import icon2 from "../public/img/Icon2.png";
import icon3 from "../public/img/Icon3.png";
import icon4 from "../public/img/Icon4.png";

export default function Home() {
    console.dir(borderleft);

    const advantage = [
        {
            title: "Unlimited",
            subTitle: "access to content",
            img: icon1.src,
            description:
                "Enjoy unlimited bandwidth to stay connected to the world's best shows, apps, and games!",
        },
        {
            title: "Flashing",
            subTitle: "connecting speed",
            img: icon2.src,
            description:
                "VPN Lumos offers unlimited bandwidth for faster loading and no buffering!",
        },
        {
            title: "Hide ",
            subTitle: "your location",
            img: icon3.src,
            description:
                "Get your own unique IP for added security and access to restricted sites, apps, and services!",
        },
        {
            title: "Bypass",
            subTitle: "blocked sites",
            img: icon4.src,
            description: "Access any website safely and anonymously!",
        },
    ];

    const names = [
        { name: "Gerardo Marchand" },
        { name: "Sushma Andrade" },
        { name: "Rose Barnaby" },
    ];

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
                        Access <span className="blue">everything securely</span>{" "}
                        with
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
                            <div
                                className={styles.preview_counter_header_total}
                            >
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
                                    <img
                                        src={logoLocations.src}
                                        alt={logoLocations}
                                    />
                                </div>
                                <div className={styles.achievement_info}>
                                    <p
                                        className={
                                            styles.achievement_info_number
                                        }
                                    >
                                        50+
                                    </p>
                                    <p className={styles.achievement_info_note}>
                                        Locations
                                    </p>
                                </div>
                            </div>
                            <div className={styles.achievement}>
                                <div>
                                    <img
                                        src={logoServers.src}
                                        alt={logoServers}
                                    />
                                </div>
                                <div className={styles.achievement_info}>
                                    <p
                                        className={
                                            styles.achievement_info_number
                                        }
                                    >
                                        1000+
                                    </p>
                                    <p className={styles.achievement_info_note}>
                                        Servers
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.preview_counter_note}>
                            VPN-your <span className="blue">ultimate</span>{" "}
                            solution for a private and secure online experience!
                        </div>
                    </div>
                </section>
                <section className={styles.advantage}>
                    <div className={styles.advantage_field}>
                        {advantage.map((el, index) => (
                            <div className={styles.block} key={index}>
                                <div>
                                    <img src={el.img} alt={"icon"} />
                                </div>
                                <div className={styles.block_title}>
                                    {el.title}
                                    <br></br>
                                    <span className="blue">{el.subTitle}</span>
                                </div>
                                <p>{el.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className={styles.select}>
                    <h2 className={styles.select_title}>
                        Millions of people trust us!
                    </h2>
                    <div className={styles.select_content}>
                        <div className={styles.select_content_note}>
                            Choose <span className="blue">your NAme</span>
                        </div>
                        <div className={styles.select_content_field}>
                            {names.map((name) => (
                                <div className={styles.row}>
                                    <span className={styles.row_circle}></span>
                                    <div className={styles.row_name}>
                                        {name.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
