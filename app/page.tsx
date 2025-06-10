'use client'
import { Provider } from 'react-redux';
import {store} from './store/Store'
import Left from './Components/Left'
import Right from './Components/Right'

export default function Home() {

  return ( <> 
    
<div className="flex w-full h-screen overflow-hidden">
  <Provider store={store}> 
    <Left />
    <Right />
  </Provider>
</div>

    
  </>);
}
