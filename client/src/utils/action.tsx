import React, { use, useState } from 'react';
import axios from 'axios';
import { manager } from '../config';
import { GenerateContentResult, GoogleGenerativeAI } from '@google/generative-ai';
import { ComponentStateType, RowData, setAnalyzedData, setLoading } from '../redux/Slices/componentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { InputDataType } from '../pages/AnalyzerBox';
import { toast}  from 'react-hot-toast';



// i am giving you input as string of array, and this strings are text and after taking input you just have to find the anomalies by analyzing all input strings, and when majority of string are similar and minority is differnet you just give false for those , and explain why they are anomalous and different from majority texts and  give output in this format:- [ { Text: "string", Classification: number, Score: number, Explanation: string, Anomalous: boolean }, { Text: " i love the sweet and candy flavor and love that they are chewier than some of the other bars.", Classification: 0, Score: 0.265, Explanation: "The review is normal and contains the top terms 'sweet', 'bar', 'flavor', 'kind'. Contains the term 'candy', with a cosine similarity of 0.706 with respect to the top term 'chocolate'.", Anomalous: false }, { Text: string, Classification: number, Score: number, Explanation: string, Anomalous: boolean }] , and please give output in this format only, and not give extra content with it other wise my api fails, and not even talk to me, other wise format fails, now read the input,  
// this is input string:


const StartAnalyzingButton = ( { handleOpenAnalyzedDialog , inputBoxes}:{ handleOpenAnalyzedDialog :Function, inputBoxes:InputDataType[]}) => {

    const dispatch = useDispatch();
    const { isLoading } = useSelector((state: { component: ComponentStateType }) => state.component);

    const callGemini = async ( inputContentBoxes:string[])=>{

        dispatch( setLoading(true));

        const genAI = new GoogleGenerativeAI(manager.apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash"});

        const propmt = `
        i am giving you input as string of array, and this strings are text and after taking input you just have to find the anomalies by analyzing all input strings, and when majority of string are similar and minority is differnet you just give false for those , and explain why they are anomalous and different from majority texts and  give output in this format:- [ { Text: "string", Classification: number, Score: number, Explanation: string, Anomalous: boolean },  { Text: "string", Classification: number, Score: number, Explanation: string, Anomalous: boolean }] , and please give output in this format only, and not give extra content with it other wise my api fails, and not even talk to me, other wise format fails, now read the input,
        this is input string:${inputContentBoxes}
        `;

        const result:GenerateContentResult = await model.generateContent(propmt);
        dispatch( setLoading(false));

        const resultText = result?.response?.candidates[0].content.parts[0].text;
        dispatch( setAnalyzedData(JSON.parse( resultText?.replace(/\n/g,"").replace(/```json/g,"").replace(/```/g,"")) as RowData));

      
    }

return (
        <button 
            onClick={() => { 

                if( inputBoxes[0].content.trim()==="" || inputBoxes[1].content.trim()==="" || inputBoxes[2].content.trim()==="" || inputBoxes[3].content.trim()==="" ){
                    toast.error("Input Container is Empty");
                }
                else{ 
                    handleOpenAnalyzedDialog (true);
                    const inputContentBoxes = inputBoxes.map((box)=>{return box.content});
                    callGemini(inputContentBoxes);
                } 
            }} 
            disabled={isLoading} className='trasition duration-300 w-8/12 shadow-gray-300 shadow-lg bg-gray-800  text-white font-semibold py-2 rounded-md hover:bg-gray-500 transition duration-200'>
              Start Analyzing Data
        </button>
  )

}

export default StartAnalyzingButton;