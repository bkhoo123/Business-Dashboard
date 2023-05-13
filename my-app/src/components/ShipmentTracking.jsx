import React, {useEffect} from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ShipmentTracking = () => {
    const payload = {
        tracking: "1Z0VE5970308924257",
        carrier: "UPS"
    }

    
    const fetchData = async () => {
        try {
        const response = await axios.post('/api/ShipmentTracking', payload);
        console.log(response.data);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
    <div className='bg-slate-100 h-screen'>
        <Navbar />

        <div className="flex flex-row gap-12 p-8">
            
            <button>Shipments</button>
            <button>Add Shipments</button>
        </div>

    </div>
  )
}

export default ShipmentTracking