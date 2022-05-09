import FilterButtons from "./FilterButtons";
import SearchTags from "./SearchTags";

function SideBar({ setStatusFilter, tagFilter, setTagFilter, setSideBar}) {
  return (
    <div className="SideBar">
      <button className = "close" onClick={()=>setSideBar(false)}>close</button>
      <FilterButtons setStatusFilter={setStatusFilter} />
      <div>
        <SearchTags tagFilter={tagFilter} setTagFilter={setTagFilter} />
      </div>
    </div>
  );
}
export default SideBar;
