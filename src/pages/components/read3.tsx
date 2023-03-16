import React, { CSSProperties } from 'react';

import { useCSVReader } from 'react-papaparse';
import { useUploadedData, useUserSteps } from '../store/store';


export default function CSVReader() {
  const { CSVReader } = useCSVReader();
  const {setDataIsUploaded,setUploadedData}=useUploadedData()
  const {setCurrentTab}=useUserSteps()

  return (
    <CSVReader
        onUploadAccepted={(results: any) => {
      const data = results.data.map((row: any) => {
     
        return {
          // replace these keys with your own object keys
          name: row[0],
          lastName: row[1],
          phonenumber: row[8],
          // add more keys as needed
          //name, phonenumber, lastName
        };
      });
    
      const newData=data.map((item:any,index:any)=>{
        if(index!=51){
          return item
        }
      })
        setUploadedData(data)
      
     setCurrentTab('uploaded')
         }}
    

    >
      {({
        getRootProps,
        acceptedFile='.csv ,.txt',
        ProgressBar,
        getRemoveFileProps,

      }: any) => (
        <>
          <div >
            <button type='button' {...getRootProps()} >
              Browse file
            </button>
            <div >
              {acceptedFile && acceptedFile.name}
            </div>
            <button {...getRemoveFileProps()} >
              Remove
            </button>
          </div>
          <ProgressBar  />
        </>
      )}
    </CSVReader>
  );
}