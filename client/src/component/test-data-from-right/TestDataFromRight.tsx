import React from 'react'; 
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import toast from 'react-hot-toast';

const TestDataFromRight = () => {

  const sampleText = [
    "perfect for breakfast or a mid day snack",
    "the product was excellent",
    "exceeded my expectations",
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

  const handleCopyText = async (content:string) => {
    await window.navigator.clipboard.writeText(content);
    toast.success("Text Copied");
  };

  return (
    <div className="bg-gradient-to-b from-gray-700 to-gray-900 pt-6 ">
      
      {/* Header */}
      <div className="bg-slate-800 text-gray-100 w-[95%] p-8 rounded-2xl shadow-2xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mt-4 text-indigo-300">Sample Test Data</h1>
          <p className="mt-4 text-lg text-gray-300">Click any text below to copy it to clipboard!</p>
        </div>
      </div>

      {/* Sample Text Cards */}
      <div className="w-[90%] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {sampleText.map((text, i) => (
          <div key={i} className="border border-gray-600 bg-slate-800 rounded-2xl shadow-lg p-4 flex items-center hover:bg-slate-700 transition duration-300">
            <button
              onClick={() => handleCopyText(text)}
              className="border-2 p-2 rounded-full border-gray-400 bg-white text-gray-600 hover:bg-indigo-500 hover:text-white transition duration-300 mr-4"
            >
              <ContentCopyIcon />
            </button>
            <p className="text-gray-300 text-lg">{text}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TestDataFromRight;
