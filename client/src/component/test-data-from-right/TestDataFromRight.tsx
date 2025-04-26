import React from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useToaster, toast } from 'react-hot-toast';

const TestDataFromRight = () => {

  
  const sampleText = [
    "perfect for breakfast or a mid day snack",
    "the product was excellent",
    " exceeded my expectations",
    "not worth the price", 
    "very disappointing experience",
    "product work is very good",
    "i like product quality",
    "the service was slow ",
    "the product have many defects",
    "the product worth it",
    "absolutely love this product",
    "this is the best purchase I've made all year!",
    "the product was exactly what I needed, highly recommend it",
    "I was really disappointed with the quality, it broke after one use",
    "great flavor and texture, will definitely buy again",
    "the instructions were unclear and hard to follow",
    "this is a fantastic product, exceeded all my expectations",
    "not what I expected", 
    "very misleading description",
    "the packaging was damaged upon arrival, very disappointing",
    "absolutely love the taste, will buy again for sure",
    "the item arrived late and was not as described",
    "fantastic customer service, very helpful and responsive",
    "the product was exactly what I needed",
    "I was really disappointed with the quality",
    "great flavor and texture, will definitely buy again",
    "the instructions were unclear and hard to follow"
  ];

  const handleCopyText = async ( content:string)=>{
    await window.navigator.clipboard.writeText(content);
    toast.success("Text Copied");
  };

  return (
    <div className='w-[40vw]'>
        <div className='text-xl text-center font-semibold tracking-wider text-gray-500 py-2'>Testing Data</div>
        {
            sampleText.map(( text, i)=>{
                return(
                    <div key={i} className='border-[1px]  p-2 border-gray-200 flex items-center'>
                        <div className='p-1 mr-2'>
                            <div onClick={()=>{ handleCopyText(text)}} className='border-2 p-[2px] rounded border-gray-400 bg-white text-gray-400 bg-white hover:bg-gray-300  hover:text-white'>
                                <ContentCopyIcon/>
                            </div>
                        </div>
                        <div className='text-gray-600'>{text}</div>
                    </div>
                )
            })
        }
        <div className='p-4'></div>
    </div>
  )
}

export default TestDataFromRight