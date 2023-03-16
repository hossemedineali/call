import { useUserSteps } from "../store/store";

const SideBar = () => {

    const steps=useUserSteps()
    return ( <div className=" min-h-screen w-full h-full pt-20 flex gap-10 flex-col">
                <button className="px-4 py-2 bg-white  font-bold  text-lg rounded-l-xl"> Call a random person</button>
                <button className="px-4 py-2 bg-white  font-bold  text-lg rounded-l-xl"> Show all clients</button>
                <button onClick={()=>{steps.setCurrentTab('reader')}} className="px-4 py-2 bg-white  font-bold  text-lg rounded-l-xl"> Import clients</button>
    </div> );
}
 
export default SideBar;