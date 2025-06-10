import Instagram from "./RightChild/Instagram";
import Tab from "./RightChild/Tab";
import { Button } from "@mui/joy";
import { useSelector } from "react-redux";

export default function Right() {
const done=useSelector((state)=>state.current.current)

  return (
    <>
    <div className="w-[70%]  min-h-screen bg-[#edecef] flex items-center justify-center text-gray-500 text-base flex-col gap-3 relative">
      <Instagram />
      <Tab/>

      <div className="absolute top-0 right-0 p-5"> 
     <Button variant={done === "dm" ? "solid" : "outlined"}>
     Done
     </Button>

      </div>
      
    </div>
    </>
  );
}
