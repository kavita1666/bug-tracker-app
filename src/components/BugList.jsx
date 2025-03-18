import React from "react";
import { useBugs } from "../context/BugContext";
import BugCard from "./BugCard";

const BugList = ({ role }) => {
  const { bugs, deleteBug, toggleTimer, approveBugClosure, requestBugClosure, reopenBug } = useBugs();

  return (
    <div className="bug-list">
      {bugs.map((bug) => (
        <BugCard
          key={bug.id}
          bug={bug}
          role={role}
          toggleTimer={toggleTimer}
          approveBugClosure={approveBugClosure}
          requestBugClosure={requestBugClosure}
          reopenBug={reopenBug}
          deleteBug={deleteBug}
        />
      ))}
    </div>
  );
};

export default BugList;
