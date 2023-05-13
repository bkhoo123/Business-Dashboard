"use client"
import Image from 'next/image'
import SidePanel from '@/components/SidePanel'
import { useState, useEffect } from 'react'
import ShipmentTracking from '@/components/ShipmentTracking'
import Whack from '@/components/Whack'


export default function Home() {
  const [activePanel, setActivePanel] = useState("Shipment Tracking")

  const Panels = {
    "Whack A Mole": <Whack />,
    "Shipment Tracking": <ShipmentTracking />,
    
  }

  return (
    <main className="flex flex-row">
        <SidePanel activePanel={activePanel} setActivePanel={setActivePanel} />
        <div className="w-4/5 h-screen">
          {Panels[activePanel]}
        </div>
    </main>
  )
}
