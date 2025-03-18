import React, { useState } from "react";
import { useBugs } from "../context/BugContext";

const BugForm = () => {
  const { addBug } = useBugs();
  const [bugDetails, setBugDetails] = useState({
    title: "",
    description: "",
    priority: "Low",
    assignee: "",
    status: "Open",
    importantDates: "",
  });

  const handleChange = (e) => {
    setBugDetails({ ...bugDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBug(bugDetails);
    setBugDetails({
      title: "",
      description: "",
      priority: "Low",
      assignee: "",
      status: "Open",
      importantDates: "",
    });
  };

  const priority = ["Low", "Medium", "High"];

  return (
    <form onSubmit={handleSubmit} className="bug-form">
      <input type="text" name="title" placeholder="Title" value={bugDetails.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={bugDetails.description} onChange={handleChange} required />
      <select name="priority" value={bugDetails.priority} onChange={handleChange}>
        {priority.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      <input type="text" name="assignee" placeholder="Assignee" value={bugDetails.assignee} onChange={handleChange} required />
      <input type="date" name="Reported on" value={bugDetails.importantDates} onChange={handleChange} />
      <button type="submit">Create Bug</button>
    </form>
  );
};

export default BugForm;
