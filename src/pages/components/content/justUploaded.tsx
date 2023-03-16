import { useUploadedData } from "~/pages/store/store";






const JustUploaded = () => {
    const {data}=useUploadedData()
console.log(data)
return (
                
<div className="overflow-auto max-h-full">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.lastName}</td>
              <td className="border px-4 py-2">{item.phonenumber}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
     );
}
 
export default JustUploaded; 