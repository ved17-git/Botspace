import { createSlice } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';

type postItem = {
  id: number;
  image: string |StaticImageData;
  caption: string;
  likes: number;
  comments: number;
  date: string;
};

const posts: postItem[] = [
    {
      id: 1,
      image: img1,
      caption:
        'Lorem ipsum . Accusamus perferendis adipisci recusandae mollitia incidunt error modi placeat quae sequi hic?',
      likes: 34,
      comments: 54,
      date: '30 March, 2025',
    },
    {
      id: 2,
      image: img2,
      caption:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates reprehenderit maiores optio nostrum assumenda ipsam pra',
      likes: 50,
      comments: 14,
      date: '04 March, 2025',
    },
    {
      id: 3,
      image: img3,
      caption:
        'Lorem ipsum dolor sit amet consec',
      likes: 34,
      comments: 54,
      date: '25 April, 2024',
    },
    {
      id: 4,
      image: img4,
      caption:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates reprehenderit maiores optio nostrum, volu',
      likes: 3,
      comments: 0,
      date: '24 February, 2025',
    },
  ];


const postSlice=createSlice({
    name:'postslice',
    initialState:{
    posts,
    selectedPost:posts[0],
    },
    reducers:{
    selectPost:(state, action)=>{
    const id = action.payload;
    const post=state.posts.find((item)=>item.id===id)
    if(post){
      state.selectedPost=post
    }
        
    }
}

})

export const {selectPost}=postSlice.actions
export default postSlice.reducer