import styles from "./css/home.module.scss";

import Left4DeadLogoSvg from "./components/left-4-dead-logo/left4deadlogo";
import HomeNavbar from "./components/home-navbar/Navbar";


function DashboardHome() {
    return (
        <section id={styles["background-content"]}>

            <HomeNavbar />

            <div className={`${styles["x-space-padding-32"]} ${styles["min-w-100"]}`}>

                <div className={`${styles["w-inherit"]} ${styles["display-flex-1"]} ${styles["justify-align-center"]} ${styles["flex-col"]}`}>

                    <div className={`${styles["justify-align-end"]} ${styles["flex"]}`}>

                        <Left4DeadLogoSvg />

                    </div>

                    <div className={`${styles["justify-align-start"]} ${styles["flex"]} ${styles["flex-col"]}`}>
                            
                        <span className={`${styles["text-size-48"]} ${styles["bold-text"]}`}>VSLib Resource Space</span>

                        <span className={styles["text-size-14"]}>Introductory Coverage of Scripting in L4D2</span>

                        <button>

                            <span>Let's Script</span>
                            
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default DashboardHome;
