import React, { useState } from "react";
import { useBugs } from "../context/BugContext";
import { formFields, renderField } from "../helpers/formConfig";

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
    setBugDetails({ title: "", description: "", priority: "Low", assignee: "", importantDates: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bug-form">
      {formFields.map((field) => (
        <div key={field.name} className="bug-field-wrapper">
          {renderField(field, bugDetails[field.name], handleChange)}
        </div>
      ))}
      <button type="submit">Create Bug</button>
    </form>
  );
};

export default BugForm;
