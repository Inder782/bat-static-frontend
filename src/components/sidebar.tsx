import {useState} from "react";

export default function Sidebar(){
    const [open,setopen]=useState(false);
    const menu=[
        {title:"Menu"},
        {title:"Dashboard"},
        {title:"Account"},
        {title:"Profile"}
    ]
    const menu2=[
        {title:"Payment"},
        {title:"Cart"},
        {title:"Orders"},
        {title:"Support"}
    ]
    return (
        <div className="flex bg-slate-950">
            <div className={`${open ? "w-72":"w-20"} h-screen w-20 relative cursor-pointer bg-slate-500 duration-500`}>
                    <img src="./logo.png" 
                    className="absolute rounded-full -right-0 top-2 w-16 "
                    onClick={()=>setopen(!open)}/>
                <div className="flex gap-x-4 items-center">
                <img src="./logo.png" className={`cursor-pointer duration-500 w-10`}/>
                <h1 className={`bg-slate-500 font-medium text-xl duration-300 ${!open && "scale-0" }`}>Design</h1>
                </div>
                <ul className={`${!open && "scale-0"} space-y-6 shadow-xl m-9`}>
                    {menu.map((menu,index)=>(
                        <li key={index}>{menu.title}</li>
                    ))}
                </ul>
                <ul className={`${!open && "scale-0"} space-y-6 shadow-xl m-9`}>
                    {menu.map((menu,index)=>(
                        <li key={index}>{menu.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}