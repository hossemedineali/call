import { useState } from 'react';
import parse from 'csv-parse';
import Papa from 'papaparse';

interface Props {
  onFileLoaded: (data: object[]) => void;
}

const FileInput: React.FC<Props> = ({ onFileLoaded }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files || files.length === 0) {
      console.error('No files selected');
      return;
    }

    const file = files[0];
    if(!file) return
    setFile(file);

    const fileReader = new FileReader();
    fileReader.onload = async () => {
      const fileContents = fileReader.result as string;
      const parsedData = await parseCSV(fileContents);
      onFileLoaded(parsedData);
    };
    fileReader.readAsText(file);
  };

  const clearFile = () => {
    setFile(null);
  };



  const parseCSV = (data: string): Promise<object[]> => {
    return new Promise((resolve, reject) => {
      Papa.parse(data, {
        header: false,
        complete: (results: Papa.ParseResult<object>) => {
          resolve(results.data);
        },
        error: (err: any) => {
          reject(err);
        },
      });
    });
  };
  
  return (
    <div>
      <label htmlFor="file-input">Select a file:</label>
      <input type="file" id="file-input" accept=".csv,.txt" onChange={handleFileChange} />
      {file && (
        <div>
          <p>{file.name}</p>
          <button onClick={clearFile}>Clear</button>
        </div>
      )}
    </div>
  );
};

export default FileInput;
