import React, { ChangeEvent, useState } from 'react';
import { GoogleGenAI, createUserContent, createPartFromUri } from '@google/genai';
import { manager } from '../config';



const FileUploadAPI = () => {

    const [result, setResult] = useState<any>();
    const [inputImage, setInputImage] = useState<File>();
    const [inputPreviewImage, setInputPreviewImage] = useState<string>();
    const [loading, setLoading] = useState(false);


    const callGemini = async () => {

        if (!inputImage || !prompt) {
            return;
        }

        let result;
        setLoading(true);

        try {
            const genAI = new GoogleGenAI({ apiKey: manager.apiKey });

            //files
            const image = await genAI.files.upload({
                file: inputImage
            })

            //call it
            result = await genAI.models.generateContent({
                model: "gemini-2.0-flash",
                contents: [
                    createUserContent([
                        "this image is one of the image from Glioma, Meningioma, Pituitary and a person have no tumor image, so 1 type image from 4 types is present as input, and you task is to give the output array that have 6 things first is tumor exist just say tumor_exist : YES/NO, and second type is level : means just give number, third is which type : means in options [Glioma, Meningioma, Pituitary, No Tumor] and fourth is explaination : means just a string, Fifth type is size : of stone in millimetre, sixth is efficiency : , and also just give an object withouteven writing any extra string, otherwise my api fails ",
                        createPartFromUri(image.uri as string, image.mimeType as string)
                    ])
                ]
            })
            console.log(result);
            setResult(result?.candidates[0]?.content?.parts[0]?.text?.split(`\n`)?.join("")?.split("```json")[1]?.split("```")[0]);
        }
        catch (err) {
            console.log(err);
        }

        setLoading(false);


    }

    const handleImageInput = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target && e.target.files !== null) {
            setInputImage(e.target.files[0]);
        }

        if (e.target && e.target.files !== null) {

            const reader = new FileReader();
            reader.onload = (e) => {
                if (reader.readyState == 2) {
                    setInputPreviewImage(reader.result as string);
                }
            }

            reader.readAsDataURL(e.target.files[0]);
        }






    }


    return (
        <div className="flex flex-col items-center mt-8 p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-2xl h-[1000px]">
            <h1 className="text-4xl font-bold text-white mb-8">Brain Tumor Detection</h1>
            {inputPreviewImage && (
                <img
                    width={130}
                    className='mb-1 rounded-lg shadow-lg transform -translate-y-4 shadow-2xl shadow-gray-800'
                    src={inputPreviewImage}
                    alt="Preview"
                />
            )}

            <input
                type="file"
                accept='image/*'
                onChange={handleImageInput}
                className="border-2 shadow-red-300 border-gray-300 bg-gray-100 p-4 text-blue-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-200"
            />

            <button
                className="m-6 px-6 py-2 border-2 bg-gray-700 text-blue-600 rounded-lg shadow hover:bg-blue-600 hover:text-white transition duration-200"
                onClick={callGemini}
            >
                Start Detection
            </button>

            <div className='border-2 border-gray-300 mt-6 w-10/12 min-h-[120px] p-4 bg-gray-50 rounded-lg shadow-md overflow-auto'>
                <h2 className='text-lg font-semibold text-blue-600'>Detection Results:</h2>
                <div className='mt-2'>
                    <div className='flex items-center'>
                        <span className='text-blue-700 font-bold'>Tumor: </span>
                        <p className='ml-2 text-gray-800 font-medium'>{result && JSON.parse(result)?.tumor_exist}</p>
                    </div>

                    <div className='flex items-center'>
                        <span className='text-blue-700 font-bold'>Level: </span>
                        <p className='ml-2 text-gray-800 font-medium'>{result && JSON.parse(result)?.level}</p>
                    </div>

                    <div className='flex items-center'>
                        <span className='text-blue-700 font-bold'>Type: </span>
                        <p className='ml-2 text-gray-800 font-medium'>{result && JSON.parse(result)?.type}</p>
                    </div>

                    <div className='flex items-center'>
                        <span className='text-blue-700 font-bold'>Explanation: </span>
                        <p className='ml-2 text-gray-800 font-medium'>{result && JSON.parse(result)?.explanation}</p>
                    </div>

                    <div className='flex items-center'>
                        <span className='text-blue-700 font-bold'>Size: </span>
                        <p className='ml-2 text-gray-800 font-medium'>{result && JSON.parse(result)?.size}</p>
                    </div>

                    <div className='flex items-center'>
                        <span className='text-blue-700 font-bold'>Efficiency: </span>
                        <p className='ml-2 text-gray-800 font-medium'>{result && JSON.parse(result)?.efficiency}</p>
                    </div>
                </div>
            </div>

            {loading && <div className='mt-4 text-white font-semibold'>Loading...</div>}
        </div>
    )

}

export default FileUploadAPI;






