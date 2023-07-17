import BriefCase from "./btns/briefcase"
import Tools from "./btns/tools"
import Envelope from "./btns/envelope";


export default function Info()
{
  return (
    <article className="w-full px-4 text-[12pt] text-slate-600">
      <div className="text-xl font-bold">
        Musa Ibrahim
      </div>
      <div className="flex items-center mt-4">
        <BriefCase className="mr-2" />
        <span className="">Developer since 2019</span>
      </div>
      <div className="flex items-center">
        <Tools className="mr-2 stroke-s" />
        <span className="">Django/React/Bootstrap/Tailwindcss</span>
      </div>
        <div className="flex items-center">
        <Envelope className="mr-2" />
        <span className="text-blue-500 ">musaaj@gmail.com</span>
      </div>
      <div className="flex items-center justify-between mt-2 text-base">
        <div>
          <b>25</b><span> Projects Done</span>
        </div>
        <div>
          <b>40</b> <span>Github Stars</span>
        </div>
      </div>
    </article>
  )
}
