import Menu from "./btns/menu";
import AppBar from "./toolbar";
import Switch from "./toggle";


export default function MenuBar()
{
  return (
    <AppBar className="flex items-center p-2 shadow backdrop-blur flex-nowrap bg-[--bg-topbar] ">
      <button className="p-2 rounded btn-secondary"><Menu /></button>
      <div className="flex justify-end flex-grow">
        <Switch className="p-2 rounded btn-secondary" />
      </div>
    </AppBar>
  )
}
