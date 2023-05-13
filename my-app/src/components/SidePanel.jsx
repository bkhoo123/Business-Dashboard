
import React, {useState, useEffect} from 'react'
import Package from '../../public/images/package.png'
import Image from 'next/image'

const SidePanel = ({activePanel, setActivePanel}) => {
  const [current, setCurrent] = useState("")
  
  

  return (
    <div className="w-1/5 border-r h-screen pt-5">
      <div className="text-center text-2xl font-semibold">Dashboard</div>
      <div className="border-t mt-4" />
      <div className="flex flex-col mt-4">

          
          <button onClick={() => {setActivePanel("Whack A Mole"); setCurrent("Whack A Mole")}} className={current === "Whack A Mole" ? "flex gap-6 pl-6 flex-row items-center bg-indigo-200 py-4" : "flex gap-6 pl-6 flex-row items-center hover:bg-slate-300 py-4"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table-2"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path></svg>          
            <div>Whack-A-Mole</div>
          </button>
          

          <button onClick={() => {setActivePanel("Shipment Tracking"); setCurrent("Shipment Tracking")}} className={current === "Shipment Tracking" ? "flex gap-6 pl-6 flex-row items-center bg-indigo-200 py-4" : "flex gap-6 pl-6 flex-row items-center hover:bg-slate-300 py-4"}>
            <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package"><path d="M16.5 9.4 7.55 4.24"></path><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg>
            <div>Shipment Tracking</div>
          </button>

          <button className="flex gap-6 pl-6 flex-row  items-center hover:bg-slate-300 py-4">
            <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-navigation"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
            <div>Inventory on the Way</div>
          </button>

          <button className="flex gap-6 pl-6 flex-row  items-center hover:bg-slate-300 py-4">
            <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17V7"></path></svg>              
            <div>Current Inventory</div>
          </button>

          <button className="flex gap-6 pl-6 flex-row  items-center hover:bg-slate-300 py-4">
            <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-atom"><circle cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path></svg>          
            <div>Chat GPT Integration</div>
          </button>
          
          <button className="flex gap-6 pl-6 flex-row  items-center hover:bg-slate-300 py-4">
            <svg className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flask-conical"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path><path d="M8.5 2h7"></path><path d="M7 16h10"></path></svg>          
            <div>R & D Analyzer</div>
          </button>

          <button className="flex gap-6 pl-6 flex-row  items-center hover:bg-slate-300 py-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ban"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" x2="19.07" y1="4.93" y2="19.07"></line></svg>  
            <div>Clearance / Problematic</div>
          </button>

      </div>
    </div>
  )
}

export default SidePanel