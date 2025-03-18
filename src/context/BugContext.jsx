import React, { createContext, useContext, useState, useEffect } from "react";

const BugContext = createContext();

export const BugProvider = ({ children }) => {
  const [bugs, setBugs] = useState(() => {
    return JSON.parse(localStorage.getItem("bugs")) || [];
  });

  useEffect(() => {
    localStorage.setItem("bugs", JSON.stringify(bugs));
  }, [bugs]);

  const addBug = (bug) => {
    const newBug = {
      id: Date.now(),
      ...bug,
      status: "Open",
      timeSpent: 0,
      isRunning: false,
      startTime: null,
      createdAt: new Date().toISOString(),
      pendingApproval: false,
      approvedByManager: null,
    };
    setBugs((prevBugs) => [...prevBugs, newBug]);
  };

  const deleteBug = (id) => {
    setBugs((prevBugs) => prevBugs.filter((bug) => bug.id !== id));
  };

  const updateBug = (id, updatedBug) => {
    setBugs((prevBugs) => prevBugs.map((bug) => (bug.id === id ? { ...bug, ...updatedBug } : bug)));
  };

  const toggleTimer = (id) => {
    setBugs((prevBugs) =>
      prevBugs.map((bug) => {
        if (bug.id === id) {
          if (bug.isRunning) {
            const elapsed = Date.now() - bug.startTime;
            return {
              ...bug,
              isRunning: false,
              timeSpent: bug.timeSpent + elapsed,
              startTime: null,
            };
          } else {
            return { ...bug, isRunning: true, startTime: Date.now() };
          }
        }
        return bug;
      })
    );
  };

  const requestBugClosure = (id) => {
    setBugs((prevBugs) => prevBugs.map((bug) => (bug.id === id ? { ...bug, status: "Pending Approval", pendingApproval: !bug.pendingApproval } : bug)));
  };

  const approveBugClosure = (id) => {
    setBugs((prevBugs) => prevBugs.map((bug) => (bug.id === id ? { ...bug, status: "Closed", pendingApproval: !bug.pendingApproval } : bug)));
  };

  const reopenBug = (id) => {
    setBugs((prevBugs) => prevBugs.map((bug) => (bug.id === id ? { ...bug, status: "Open", pendingApproval: !bug.pendingApproval } : bug)));
  };
  
  return (
    <BugContext.Provider
      value={{
        bugs,
        addBug,
        deleteBug,
        updateBug,
        toggleTimer,
        requestBugClosure,
        approveBugClosure,
        reopenBug,
      }}
    >
      {children}
    </BugContext.Provider>
  );
};

export const useBugs = () => {
  const context = useContext(BugContext);
  if (!context) {
    throw new Error("useBugs must be used within a BugProvider");
  }
  return context;
};
