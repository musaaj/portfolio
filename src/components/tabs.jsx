import {useState} from "react";
import Project from "./project"
import tabs from "../assets/tabs.json"


export default function Tabs(props)
{
  const [selectedTab, setSelectedTab] = useState(0);
  const onTab = e=>setSelectedTab(e.target.getAttribute("id"));
  return (
    <>
      <div className="flex items-center p-0 my-2 overflow-scroll scroller-none">
        {tabs.map((tab,idx)=><button id={idx} className={(selectedTab == idx? "border-b-4" : null)+" p-3 font-bold border-blue-600 border-solid grow-2 btn-secondary min-w-max"} onClick={onTab}>{tab.title}</button>)}
      </div>
      <div className="w-full p-0">
        {tabs[selectedTab].projects.map((project, idx)=><Project {...project} />)}
      </div>
    </>
  )
}
