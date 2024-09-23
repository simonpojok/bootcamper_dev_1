import {useEffect, useState} from 'react'
import customInstance from '../../axios_http_client';
import backgroundImageUrl from '../../assets/images/bootcamp/bootcamp-background.jpg'


const BootcampDetailsPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await customInstance.get('/api/v1/bootcamps/5d725a1b7b292f5f8ceff788'); // Replace with your actual API URL
          console.log(response)
          setData(response.data.data);
          setLoading(false);
        } catch (err) {
            console.log(err)
          alert('Error fetching data');
          setLoading(false);
        }
      };
      
      fetchData();
    }, []);
  
    if (loading) {
      return <div className="flex justify-center items-center h-screen mt-10"><svg className='w-24 h-24 animate-spin' fill='#1e40af' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg></div>;
    }
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
    <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
    <img 
      src={backgroundImageUrl}
      alt={data.name} 
      className="mb-6 w-full h-64 object-cover rounded-lg"
    />
    <p className="text-lg mb-4"><strong>Description:</strong> {data.description}</p>
    <p className="text-lg mb-4"><strong>Website:</strong> <a href={data.website} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{data.website}</a></p>
    <p className="text-lg mb-4"><strong>Phone:</strong> {data.phone}</p>
    <p className="text-lg mb-4"><strong>Email:</strong> <a href={`mailto:${data.email}`} className="text-blue-600 underline">{data.email}</a></p>
    <p className="text-lg mb-4"><strong>Address:</strong> {data.address}</p>
    <p className="text-lg mb-4"><strong>Average Cost:</strong> ${data.averageCost}</p>
    <p className="text-lg mb-4"><strong>Job Assistance:</strong> {data.jobAssistance ? 'Yes' : 'No'}</p>
    <p className="text-lg mb-4"><strong>Job Guarantee:</strong> {data.jobGuarantee ? 'Yes' : 'No'}</p>
    <p className="text-lg mb-4"><strong>Accepts GI Bill:</strong> {data.acceptGi ? 'Yes' : 'No'}</p>
    <p className="text-lg mb-4"><strong>Housing:</strong> {data.housing ? 'Yes' : 'No'}</p>

    <div className="mb-6">
      <p className="text-lg font-bold">Available Careers:</p>
      <ul className="list-disc list-inside">
        {data.careers.map((career, index) => (
          <li key={index} className="text-lg">{career}</li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default BootcampDetailsPage