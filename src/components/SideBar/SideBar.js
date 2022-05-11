import FilterButtons from "./FilterButtons";
import SearchTags from "./SearchTags";

function SideBar({ setStatusFilter, tagFilter, setTagFilter, setSideBar, statusFilter }) {
  return (
    <div className="modal display-block">
      <div className="SideBar">
        <div className = "SideBar-1">
        <span className="close" onClick={() => setSideBar(false)}>
          X
        </span>
        <FilterButtons setStatusFilter={setStatusFilter} statusFilter={statusFilter} />
        <div>
          <SearchTags tagFilter={tagFilter} setTagFilter={setTagFilter} />
        </div>
        </div>
       </div>
    </div>
  );
}
export default SideBar;
