export default function Avatar()
{
  return (
  <div className="flex items-center px-4">
          <div className="w-1/2 -mt-16">
            <img src="avatar.png" className="w-24 h-24 border-2 border-[--border-color] border-solid rounded-full" />
          </div>
          <div className="flex items-end self-end justify-end w-3/4 grow-1">
            <button className="p-px px-3 mt-2 font-bold bg-blue-600 rounded-3xl active:bg-blue-800 lg:hover:bg-blue-800 btn-primary">Hire Me</button>
            </div>
        </div>

  )
}
