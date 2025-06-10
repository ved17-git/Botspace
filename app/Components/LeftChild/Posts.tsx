'use client'
import Image from 'next/image';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectPost } from '../../store/postSlice';
import { RootState } from '@/app/store/Store';



function Posts() {


      const dispatch=useDispatch()
      const posts=useSelector((state:RootState)=>state.posts.posts)
      const selectedPost = useSelector((state: RootState) => state.posts.selectedPost);
      const currentState=useSelector((state:RootState)=>state.current.current)

      console.log(currentState);
      
    
  
      const handleSelection = (id: number) => {
        dispatch(selectPost(id))
      };


  return ( <> 

 
        <div>
          <h1 className="text-lg font-semibold mb-4">And this comment has</h1>

          <FormControl component="fieldset" className=" w-full">
            <RadioGroup
              aria-label="comment-type"
              defaultValue="post"
              name="radio-buttons-group"
              className="pl-4"
            >
              <div>
                <FormControlLabel
                  value="post"
                  control={<Radio />}
                  label="A specific post or reel"
                  className="bg-[#f5f5f7] w-full rounded-lg mt-2"
                />

                <div className="flex gap-2 flex-wrap mt-3 bg-[#f5f5f7]">
                  {posts.map((item) => (
                    <div
                      key={item.id}
                      className={`rounded-xl overflow-hidden border-2 cursor-pointer ${
                        selectedPost?.id === item.id
                          ? 'border-blue-500'
                          : 'border-transparent'
                      }`}
                      onClick={() => handleSelection(item.id)}
                    >
                      <Image
                        src={item.image}
                        alt={`image-${item.id}`}
                        width={80}
                        height={80}
                        className="object-cover rounded-xl"
                      />
                    </div>
                  ))}
                </div>
                <Button variant="text" sx={{ mt: '4px' }}>
                  Show All
                </Button>
              </div>

              <div>
                <FormControlLabel
                  value="profile"
                  control={<Radio />}
                  label="This profile in general"
                  className="bg-[#f5f5f7] w-full rounded-lg mt-2"
                />
              </div>

              <div>
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Something else"
                  className="bg-[#f5f5f7] w-full rounded-lg mt-2"
                />
              </div>
            </RadioGroup>
          </FormControl>

        </div>
    



  </>)
}

export default Posts