export const formFields = [
  { name: "title", type: "text", placeholder: "Title", required: true },
  { name: "description", type: "textarea", placeholder: "Description", required: true },
  { name: "priority", type: "select", options: ["Low", "Medium", "High"] },
  { name: "assignee", type: "text", placeholder: "Assignee", required: true },
  { name: "importantDates", type: "date", placeholder: "Important Date" },
];

export const renderField = (field, value, handleChange) => {
  switch (field.type) {
    case "text":
    case "date":
      return <input type={field.type} name={field.name} placeholder={field.placeholder} value={value} onChange={handleChange} required={field.required} />;
    case "textarea":
      return <textarea name={field.name} placeholder={field.placeholder} value={value} onChange={handleChange} required={field.required} />;
    case "select":
      return (
        <select name={field.name} value={value} onChange={handleChange}>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    default:
      return null;
  }
};
