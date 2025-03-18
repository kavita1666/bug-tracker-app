import React, { useState } from "react";
import BugForm from "./BugForm";
import BugList from "./BugList";
import "../App.css";
import { BugProvider } from "../context/BugContext";

const Dashboard = () => {
  const [role, setRole] = useState("Developer"); // default role is Developer

  const roles = ["Developer", "Manager"];

  return (
    <BugProvider>
      <h1 className="dashboard-title">Bug Tracker</h1>
      <select className="role-selector" value={role} onChange={(e) => setRole(e.target.value)}>
        {roles.map((item, index) => (
          <option value={item} key={index}>{item}</option>
        ))}
      </select>
      {role === "Developer" && <BugForm />}
      <BugList role={role} />
    </BugProvider>
  );
};

export default Dashboard;
