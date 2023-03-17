import { useState } from 'react';
import { parseStringPromise } from 'xml2js';
import fs from 'fs-extra';

type XmlData = {
  name: string;
  age: number;
  // add more properties as needed
};

const XmlUploader = () => {
  const [xmlData, setXmlData] = useState<XmlData[]>([]);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsText(file, 'utf-8');
    reader.onload = async (event) => {
      if (!event.target) return;
      const data = event.target.result as string;
      const parsedData = await parseStringPromise(data, { explicitArray: false });
      const dataArray: XmlData[] = parsedData.root.item.map((item: any) => ({
        name: item.name,
        age: parseInt(item.age, 10),
      }));
      setXmlData(dataArray);
    };
  };

  return (
    <div>
      <input type="file" accept=".xml" onChange={handleFileUpload} />
      <ul>
        {xmlData.map((item, index) => (
          <li key={index}>
            {item.name} ({item.age})
          </li>
        ))}
      </ul>
    </div>
  );
};


export default XmlUploader