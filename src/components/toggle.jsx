import { useState } from "react";
import {Dark} from "./btns/dark";
import {Light} from "./btns/light";


export default function Switch(props)
{
  const [checked, setChecked] = useState(false);
  const onCheck = e=>{
    setChecked(!checked)
    if(!checked)
    {
      document.documentElement.setAttribute("data-theme", "dark");
      return
    }
    document.documentElement.setAttribute("data-theme", "light");
   }

  return (
    <button {...props} className={props.className + " cursor-pointer"}>
      {checked? <Light onClick={onCheck} /> : <Dark onClick={onCheck}/>}
    </button>
  )
}
