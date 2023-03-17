import { useState } from 'react';

interface FileContent {
  [key: string]: string;
}

const FileUploadComponent = () => {
  const [fileContent, setFileContent] = useState<FileContent[]>([]);

  const handleFileUpload =  (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    const fileReader = new FileReader();
    if (!file) return;
    fileReader.readAsText(file);

    fileReader.onload = () => {
      const csvData = fileReader.result as string;
      const rows = csvData.split('\n');
      if (!rows[0]) return;
      const headers = rows[0].split(',').map((header) => header.trim());

      const jsonData = rows
      .slice(1)
      .filter((row) => row.trim() !== '')
      .map((row) => {
        if (!row) return;
        const values: string[] = row.split(',');
        return headers.reduce((obj: FileContent, header, index) => {
          obj[header] = values[index]?.trim() || '';
          return obj;
        }, {} as FileContent);
      });

        /* const jsonData = rows
  .slice(1)
  .filter((row) => row.trim() !== '')
  .map((row) => {
    if (!row) return;
    const values: string[] = row.split(',');
    return headers.reduce((obj: FileContent, header, index) => {
      obj[header] = values[index]?.trim() || '';
      return obj;
    }, {} as FileContent);
  }); */
        console.log(jsonData)
  
      //setFileContent(jsonData );
    };
  };

  return (
    <div className="w-full">
      <label htmlFor="file-upload" className="block mb-2 font-medium text-gray-700">
        Upload File
      </label>
      <input
        type="file"
        id="file-upload"
        accept=".csv"
        className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        onChange={handleFileUpload}
      />
      <div className="mt-4">
        <p className="font-medium text-gray-700">File Content:</p>
        <pre className="p-2 bg-gray-100 rounded-md">{JSON.stringify(fileContent, null, 2)}</pre>
      </div>
    </div>
  );
};

export default FileUploadComponent;
