import EasyPost from 'node-easypost';
const api = new EasyPost('EZAKdf10c9afd41447559ed233202a39dce5YUcGDpDyFk2dQ0hdZZygUA')



export default async function handler(req, res) {
    // Assuming you are sending the tracking code and carrier via the request's query parameters
    const { tracking_code, carrier } = req.body;
  
    try {
      const tracker = await api.Tracker.create({
        tracking_code: tracking_code,
        carrier: carrier,
      });
  
      res.status(200).json({ data: tracker });
    } catch (error) {
      console.error("Error: ", error);
      res.status(500).json({ error: 'An error occurred while creating the tracker.' });
    }
  }