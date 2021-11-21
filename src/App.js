import { useEffect, useState } from 'react';
import AppContent from './AppContent';
import TabsContext from './TabsContext';

function App() {

  const [applicationState, setApplicationState] = useState({
    applications: [],
    activeType: "",
    types: []
  });

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch('dataset.json');
        response = await response.json();
        const types = [...new Set(response.map(app => app.type).filter(app => app))];
        setApplicationState({
          activeType: types.length > 0 ? types[0] : null,
          applications: response,
          types
        });
      }
      catch (err) {
        throw err;
      }
    }

    fetchData()
  }, [])


  const getMatureApplications = () =>
    applicationState.applications.filter(app =>
      app.version >= "1.0.0" && app.type === applicationState.activeType);

  const getBetaApplications = () =>
    applicationState.applications.filter(app =>
      app.version < "1.0.0" && app.type === applicationState.activeType);

  const setActiveType = (type) => {
    setApplicationState({
      ...applicationState,
      activeType: type
    });
  }

  const setTypeOnKeyDown = (e) => {
    const key = e.keyCode;
    const keys = {
      left: 37,
      right: 39,
    };

    if (key !== keys.left && key !== keys.right) {
      return;
    }

    let typeIndex = applicationState.types.indexOf(applicationState.activeType);

    typeIndex = key === keys.left ? typeIndex - 1 :
      key === keys.right ? typeIndex + 1 : typeIndex;

    typeIndex = typeIndex === -1 ? applicationState.types.length - 1 :
      typeIndex === applicationState.types.length ? 0 : typeIndex;

    setApplicationState({
      ...applicationState,
      activeType: applicationState.types[typeIndex]
    });
  }

  return (
    <TabsContext.Provider value={{
      setActiveTab: setActiveType,
      setTypeOnKeyDown: setTypeOnKeyDown,
      tabs: applicationState.types,
      activeTab: applicationState.activeType
    }}>
      <AppContent
        betaApplications={getBetaApplications()}
        matureApplications={getMatureApplications()}
      />
    </TabsContext.Provider>
  );
}

export default App;
