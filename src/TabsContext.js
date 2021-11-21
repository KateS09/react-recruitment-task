import React from "react";

const TabsContext = React.createContext({
    setActiveTab: (tab) => { },
    setTypeOnKeyDown: (e) => { },
    tabs: [],
    activeTab: ""
});

export default TabsContext;
