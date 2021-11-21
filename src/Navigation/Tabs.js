import { useContext } from 'react';
import TabsContext from '../TabsContext';
import styles from './Tabs.module.scss';

function Tabs() {
    const tabsContext = useContext(TabsContext);

    return (
        <ul className={styles.tabs}
            role="tablist"
            aria-label="Accordion Navigation">
            {tabsContext.tabs.map((tab) =>
            (<li
                key={tab}
                role="tab"
                onClick={() => tabsContext.setActiveTab(tab)}
                onKeyDown={(e) => tabsContext.setTypeOnKeyDown(e)}
                aria-selected={tabsContext.activeTab === tab}
                tabIndex={tabsContext.activeTab === tab ? 0 : "-1"}
                className={`${styles.tab} ${tabsContext.activeTab === tab ? styles.activeTab : null}`}>
                {tab}
            </li>))}
        </ul>
    );
}


export default Tabs;