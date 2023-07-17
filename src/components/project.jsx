import Github from "./btns/github";


export default function Project({title, link, picture, stack, about})
{
  return (
    <div className="w-full p-4 border-b-[0.3px] border-solid border-slat-400">
      <div className="flex items-center py-2">
        <h1 className="text-base font-bold">{title}</h1>
        <span className="flex justify-end flex-grow"><a href={link} className="hover:bg-[--btn-secondary-hover] p-2 cursor-pointer"><Github /></a></span>
      </div>
      <img src={picture} className="rounded-xl" />
      <p className="py-2 text-base text-ellipsis">{about}</p>
      <div className="flex">
        <span className="font-bold">Stack: </span>
        <span className="ml-2 font-thin text-blue-600">{stack}</span>
      </div>
    </div>
  )
}
