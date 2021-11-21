import Accordion from "./Accordion/Accordion";
import Tabs from "./Navigation/Tabs";
import styles from './AppContent.module.scss';


function AppContent({ matureApplications, betaApplications }) {
    return (
        <main className={styles.container}>
            <nav>
                <Tabs />
            </nav>
            <section className={styles.accordion}>
                <Accordion
                    name="Mature"
                    applications={matureApplications} />
                <Accordion
                    name="Beta"
                    applications={betaApplications} />
            </section>
        </main>
    );
}

export default AppContent;