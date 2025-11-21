/*

1. Compound Components
Compound Components enable the creation of components that work together seamlessly. They allow the parent component to provide context and control, while child components communicate with it.

Example: Tabs Component
This example demonstrates a Tabs component that allows switching between different panels. Each tab and panel is a child component that communicates with the parent Tabs component via context.
*/

import React, { useState, createContext, useContext } from 'react';

const TabsContext = createContext();

function Tabs({ children, defaultActiveTab }) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div className="tab-list">{children}</div>;
}

function Tab({ children, name }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === name;

  return (
    <button
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={() => setActiveTab(name)}
    >
      {children}
    </button>
  );
}

function TabPanels({ children }) {
  return <div className="tab-panels">{children}</div>;
}

function TabPanel({ children, name }) {
  const { activeTab } = useContext(TabsContext);
  return activeTab === name ? <div className="tab-panel">{children}</div> : null;
}

export { Tabs, TabList, Tab, TabPanels, TabPanel };

//Usage:

<Tabs defaultActiveTab="1">
  <TabList>
    <Tab name="1">Tab 1</Tab>
    <Tab name="2">Tab 2</Tab>
  </TabList>
  <TabPanels>
    <TabPanel name="1">Content for Tab 1</TabPanel>
    <TabPanel name="2">Content for Tab 2</TabPanel>
  </TabPanels>
</Tabs>
