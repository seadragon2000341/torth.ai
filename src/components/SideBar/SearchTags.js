import React from "react";

function SearchTags({ tagFilter, setTagFilter }) {
  const addTags = (event) => {
    if (event.target.value !== "") {
      setTagFilter([...tagFilter, event.target.value]);
      event.target.value = "";
    }
  };
  const deleteTag = (tagIndex) => {
    setTagFilter([...tagFilter.filter((_, index) => index !== tagIndex)]);
  };

  return (
    <div>
      <input
        className="tags-line"
        type="text"
        placeholder="Press enter to add filtering tags"
        onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
      />

      <ul id="tags">
        {tagFilter &&
          tagFilter.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span className="tag-close-icon" onClick={() => deleteTag(index)}>
                x
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SearchTags;
