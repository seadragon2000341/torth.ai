import React from "react";

export default function FilterButtons({ setStatusFilter, statusFilter }) {
  const filterNames = ["All", "Active", "Completed"];

  const filterButtons = filterNames.map((name) => (
    <button
      type="button"
      className={statusFilter == name ? "btn-1" : "btn"}
      onClick={() => setStatusFilter(name)}
    >
      {name}
    </button>
  ));

  return <div className="filters">Filter Status By: {filterButtons}</div>;
}
