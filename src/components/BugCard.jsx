import React, { useEffect, useState } from "react";

const BugCard = ({ bug, role, toggleTimer, approveBugClosure, requestBugClosure, reopenBug, deleteBug }) => {
  const [elapsedTime, setElapsedTime] = useState(Math.floor(bug.timeSpent / 1000));

  useEffect(() => {
    let timer;

    if (bug.isRunning) {
      timer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [bug.isRunning]);

//   console.log("----here", bug)

  return (
    <div className={`bug-card ${bug.status.toLowerCase()}`}>
      <h3>{bug.title}</h3>
      <p>{bug.description}</p>
      <p>Priority: {bug.priority}</p>
      <p>Status: {bug.status}</p>
      <p>Time Spent: {elapsedTime}s</p>

      {role === "Developer" && <button onClick={() => toggleTimer(bug.id)}>{bug.isRunning ? "Stop Timer" : "Start Timer"}</button>}

      {role === "Developer" && <button onClick={() => requestBugClosure(bug.id)} disabled={bug.status !== "Open"}>Request Closure</button>}

      {role === "Manager" && <button onClick={() => approveBugClosure(bug.id)} disabled={!bug.pendingApproval}>Approve Closure</button>}

      {role === "Manager" && <button onClick={() => reopenBug(bug.id)} disabled={bug.status !== "Closed"}>Reopen Bug</button>}

      <button onClick={() => deleteBug(bug.id)}>Delete</button>
    </div>
  );
};

export default BugCard;
