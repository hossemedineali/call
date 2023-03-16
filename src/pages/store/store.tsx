import { create } from 'zustand'
import { PROSPECT } from '~/utils/types'



interface USERSTEPS {
    currentTab:string,
    setCurrentTab:(x:string)=>void
  
}

export const useUserSteps = create<USERSTEPS>()((set) => ({
  currentTab:'',
  setCurrentTab: (x) => set(() => ({ currentTab: x })),

}))



interface UploadedData {
  data:PROSPECT[],
  isDataUploaded:boolean,
  setUploadedData:(x:PROSPECT[])=>void
  setDataIsUploaded:(x:boolean)=>void


}

export const useUploadedData =create<UploadedData>((set)=>({
  data:[],
  isDataUploaded:false,
  setUploadedData:(x)=>set(()=>({data:x})),
  setDataIsUploaded:(x)=>set(()=>({isDataUploaded:x}))

}))