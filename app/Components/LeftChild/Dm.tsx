import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '@/app/store/dmSlice';




const Dm = () => {

  const dm=useSelector((state)=>state.dm.message)
  
  const dispatch=useDispatch()
  console.log(dm);
  
  const [isOpeningDmEnabled, setIsOpeningDmEnabled] = useState<boolean>(true);
  const [linkMessage, setLinkMessage] = useState<string>('');
  const [dmMessage, setDmMessage] = useState<string>(dm);

  const handleToggleOpeningDm = (): void => {
    setIsOpeningDmEnabled(!isOpeningDmEnabled);
  };


  const handleLinkMessageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLinkMessage(event.target.value);
  };

  const handleDmMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
     const newValue = event.target.value;
    setDmMessage(event.target.value);
    dispatch(addMessage(newValue))
  };

  const handleAddLink = (): void => {
    console.log('Add link clicked');
  };

  return (
    <div className="p-4 w-full space-y-6">
      <h2 className="text-lg font-semibold">They will get</h2>
      
 
      <div className="flex items-center justify-between p-4 bg-[#f5f5f7] rounded-lg">
        <span className="text-gray-900 font-medium">an opening DM</span>
        <button
          onClick={handleToggleOpeningDm}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            isOpeningDmEnabled ? 'bg-green-500' : 'bg-gray-300'
          }`}
          type="button"
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              isOpeningDmEnabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {isOpeningDmEnabled && (
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg border">
            <div className="space-y-3">
              <p className="text-gray-800">
                {"Hey there! I'm so happy you're here, thanks so much for your interest 😊"}
              </p>
              <p className="text-gray-800">
               {" Click below and I'll send you the link in just a sec 👇"}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Send me the link"
              value={linkMessage}
              onChange={handleLinkMessageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <button 
                className="text-blue-500 text-sm hover:underline focus:outline-none"
                type="button"
              >
                Why does an Opening DM matter?
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <h3 className="text-gray-900 font-medium">a DM with the link</h3>
        
        <textarea
          placeholder="Write a message"
          value={dmMessage}
          onChange={handleDmMessageChange}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        />

        <button
          onClick={handleAddLink}
          className="w-full flex items-center justify-center space-x-2 py-3 border-2 border-dashed border-gray-300 rounded-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          type="button"
        >
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span className="text-gray-600 font-medium">Add A Link</span>
        </button>
      </div>


    </div>
  );
};

export default Dm;