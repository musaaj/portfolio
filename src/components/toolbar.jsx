
export default function ToolBar(props){
    return (
    <header {...props} className={props.className + " sticky top-0 w-full "}>
      {props.children}
    </header>
  )
}


function BottomBar(props){
    return (
    <header {...props} className={props.className + " sticky bottom-0 "}>
      {props.children}
    </header>
  )
}


export {ToolBar, BottomBar}
