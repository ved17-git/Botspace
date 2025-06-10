import Instagram from "./RightChild/Instagram";
import Tab from "./RightChild/Tab";
import { Button } from "@mui/joy";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";

export default function Right() {

const dm=useSelector((state:RootState)=>state.dm.message)

const handleDone=()=>{
  if(dm){
   alert("Done, Thank You")
  }
 
}

  return (
    <>
    <div className="w-[70%]  min-h-screen bg-[#edecef] flex items-center justify-center text-gray-500 text-base flex-col gap-3 relative">
      <Instagram />
      <Tab/>

      <div className="absolute top-0 right-0 p-5"> 
    <Button variant={dm ? "solid" : "outlined"} onClick={handleDone} className={dm ? ""     :"hover:cursor-not-allowed pointer-events-none"}>
      Done
     </Button>

      </div>
      
    </div>
    </>
  );
}
