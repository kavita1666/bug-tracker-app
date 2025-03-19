import React, { useState } from "react";
import { useBugs } from "../context/BugContext";
import BugCard from "./BugCard";

const BugList = ({ role }) => {
  const { bugs, deleteBug, toggleTimer, approveBugClosure, requestBugClosure, reopenBug } = useBugs();

  // State for filters
  const [priorityFilter, setPriorityFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // Function to filter bugs
  const filteredBugs = bugs.filter((bug) => {
    return (priorityFilter ? bug.priority === priorityFilter : true) && (statusFilter ? bug.status === statusFilter : true);
  });

  return (
    <div className="bug-list-container">
      {/* Filter UI */}
      <div className="filters">
        <select onChange={(e) => setPriorityFilter(e.target.value)} value={priorityFilter} className="selector-filter">
          <option value="">All Priorities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select onChange={(e) => setStatusFilter(e.target.value)} value={statusFilter} className="selector-filter">
          <option value="">All Statuses</option>
          <option value="Open">Open</option>
          <option value="Pending Approval">Pending Approval</option>
          <option value="Closed">Closed</option>
        </select>
      </div>

      {/* Bug List */}
      <div className="bug-list">
        {filteredBugs.length > 0 ? (
          filteredBugs.map((bug) => (
            <BugCard
              key={bug.id}
              bug={bug}
              role={role}
              toggleTimer={toggleTimer}
              deleteBug={deleteBug}
              approveBugClosure={approveBugClosure}
              requestBugClosure={requestBugClosure}
              reopenBug={reopenBug}
            />
          ))
        ) : (
          <h4>No Bugs to filter</h4>
        )}
      </div>
    </div>
  );
};

export default BugList;
