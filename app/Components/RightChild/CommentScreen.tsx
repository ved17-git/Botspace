import React from "react";
import { BsSend } from "react-icons/bs";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Image from "next/image";
import logo from '../../../assets/b-logo.png'
import { useSelector } from "react-redux";

function CommentScreen() {

const comment=useSelector((state)=>state.comments.text)

  return (
    <>
<div className="w-full h-[200%] rounded-t-full z-50 flex flex-col justify-between font-roberto">

 <div>    
  <div className="w-[10%] h-[4px] bg-white rounded-3xl mx-auto mt-2"></div>

  <div className="flex items-center justify-between px-4 mt-2 relative">
    <div className="flex-1 text-center">
      <h1 className="text-center">Comments</h1>
    </div>
    <div className="absolute right-4">
      <BsSend size={20} />
    </div>
  </div>
  <hr className="mt-4 border-[#535353] p-0"/>



 <div className="flex justify-between mt-7 items-center">
    <div className="flex gap-2"> 
    <p> <AccountCircleIcon sx={{fontSize:45}}/> </p>

    <div>
        <p className="text-xs">Username <span className="text-[#535353]">Now</span></p>
        <p className="text-[1.5vh]">{comment}</p>
        <p className="text-[1.5vh] mt-1 text-[#535353]">Reply</p>
    </div>
     </div>

    <div> 
    <FavoriteBorderIcon sx={{fontSize:15}}/>
    </div>

  </div>
 </div>



<div> 
  <div className="flex items-center gap-2 pb-4">
   <Image src={logo} alt="logo"/>
   <p className="border-neutral-800 border-2 rounded-3xl px-3 py-2 text-[#626262] text-xs w-full">Add a comment for username...</p>
 </div>

 <div className="w-[40%] h-[4px] bg-white rounded-2xl mx-auto mt-2"></div>

</div>

</div>

    </>
  );
}

export default CommentScreen;
