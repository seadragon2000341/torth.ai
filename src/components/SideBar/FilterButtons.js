import React from "react";

export default function FilterButtons({ setStatusFilter, statusFilter }) {
  const filterNames = ["All", "Active", "Completed"];
  console.log(statusFilter)
  const filterButtons = filterNames.map((name) => (
    <div><button
      type="button"
      className={statusFilter == name ? "btn-1" : "btn"}
      onClick={() => setStatusFilter(name)}
    >
      {name}
    </button></div>
  ));

  return <div>Filter Status By: {filterButtons}</div>;
}
