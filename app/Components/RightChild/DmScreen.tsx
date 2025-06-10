import React from "react";
import { FaSignal } from "react-icons/fa";
import { IoIosWifi } from "react-icons/io";
import { IoBatteryCharging } from "react-icons/io5";
import logo from '../../../assets/b-logo.png'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Image from "next/image";
import { LuPhone } from "react-icons/lu";
import { CiVideoOn } from "react-icons/ci";
import { IoImageOutline } from "react-icons/io5";
import { LiaCommentDots } from "react-icons/lia";
import { CiCirclePlus } from "react-icons/ci";
import { FaCamera } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/Store";




function DmScreen() {

 const dm=useSelector((state:RootState)=>state.dm.message)

 
    
  return (
    <>
      <div className="w-full h-[30000%] flex flex-col justify-between">


        <div>    
           <div className="flex justify-between items-center px-3 mt-[-2vh] relative">
             <p className="text-[2vh] ">1:37</p>

       <p className="w-[20%] h-2 bg-[#202332] rounded-4xl absolute left-1/2 transform -translate-x-1/2"></p>
              
              <div className="flex gap-1 items-center">
                <p><FaSignal size={14}/></p>
                <p><IoIosWifi size={14}/></p>
                <p><IoBatteryCharging size={14}/></p>
              </div>
           </div>


           <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-1">
                 <ArrowBackIosNewIcon className="mr-1" sx={{fontSize:18}}/>
               <Image src={logo} alt="logo"/> 
               <span>Botspacehq</span>
              </div>
        

               <div className="flex gap-2 items-center">
                <LuPhone size={20}/>
                <CiVideoOn size={20}/>
               </div>
           </div>
           <hr  className="border-[#202332] mt-4"/>



        <div className="flex mt-3 items-center gap-1">
          <Image src={logo} alt="logo"/> 
          <p className="bg-[#222222] px-4 py-2 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl ">
            {dm ? dm : "Write a message"}
          </p>
        </div>
    </div>

     
     <div> 

        <div className="flex justify-between items-center bg-neutral-800 px-2 py-1 rounded-3xl mb-4">
            <div className="flex gap-2 items-center">
                <p className="bg-blue-500 p-1 rounded-full"> <FaCamera size={20}/></p>
                <p className="text-neutral-500 text-xs">Message...</p>
            </div>

            <div className="flex gap-1 items-center">
              <p><IoImageOutline size={20}/></p>
              <p><LiaCommentDots size={20}/></p>
              <p><CiCirclePlus size={20}/></p>
            </div>
        </div>

      <p className="w-[40%] h-[4px] bg-white rounded-2xl mx-auto mt-2"></p>

      </div>

    
    </div>
    </>
  );
}

export default DmScreen;
