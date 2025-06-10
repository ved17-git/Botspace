'use client'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { BsSend } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import SearchIcon from '@mui/icons-material/Search';
import { FiPlusSquare } from "react-icons/fi";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import logo from '../../../assets/b-logo.png'
import { useSelector } from 'react-redux';
import Image from 'next/image';
import CommentScreen from './CommentScreen';
import DmScreen from './DmScreen';





function Instagram() {


const posts=useSelector((state)=>state.posts.selectedPost)
const status=useSelector((state)=>state.current.current)
  


  return ( <> 
  
 
  <div className="w-[42vh] h-[85vh] bg-black rounded-4xl text-white px-[2vh] py-4 flex flex-col justify-between border-2 border-neutral-700 shadow-2xl">
    
    <div className="overflow-y-auto flex-grow scrollbar-hide pt-5">
     
      <div className="text-center relative">
        <ArrowBackIosNewIcon
          sx={{ fontSize: 20 }}
          className="absolute top-2.5 left-2"
        />
        <p className="text-xs text-[#535353] font-medium">Bot spacehq</p>
        <h1 className="font-semibold">Photos</h1>
      </div>

     
      <div className="flex items-center justify-between px-1 mt-5">
        <div className="flex gap-2 items-center w-[48%]">
          <Image src={logo} alt="logo" className="w-full" />
          <p>Botspacehq</p>
        </div>
        <MoreHorizIcon sx={{ fontSize: 20 }} />
      </div>

      
      <div className="relative w-full h-[32vh] rounded-lg overflow-hidden mt-2">
        <Image
          src={posts.image}
          alt="Selected preview"
          fill
          className="object-cover"
        />
      </div>

     
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <FavoriteBorderIcon sx={{ fontSize: 20 }} />
            <h1>{posts.likes}</h1>
          </div>
          <div className="flex gap-1">
            <FaRegComment size={20} />
            <h1>{posts.comments}</h1>
          </div>
          <BsSend size={20} />
        </div>
        <TurnedInNotIcon sx={{ fontSize: 20 }} />
      </div>

      

   
      <div className="mt-4">
        <p className="text-white text-sm">{posts.caption}</p>
      </div>

      <div className="mt-1">
        <p className="text-[#535353] text-xs font-medium">View all comments</p>
        <p className="text-[#535353] text-[1.5vh]">{posts.date}</p>
      </div>
    </div>



  {
    status == "comments" && <CommentScreen/>
  }
  {
    status == "dm" && <DmScreen/>
  }


     

      {/* MENUBAR */}
     <div className={ status =="comments" || status=="dm" ? "hidden": "pt-3 space-y-4"}>
      <div className="flex items-center justify-between bg-black px-4">
        <HomeFilledIcon sx={{ fontSize: 25 }} />
        <SearchIcon sx={{ fontSize: 25 }} />
        <FiPlusSquare size={23} />
        <OndemandVideoIcon sx={{ fontSize: 25 }} />
        <div className="w-[10%]">
          <Image src={logo} alt="logo" className="w-full" />
        </div>
      </div>

      <p className="w-[40%] h-[4px] bg-white rounded-2xl mx-auto mt-2"></p>
    </div>









  </div>


  </>)
}

export default Instagram