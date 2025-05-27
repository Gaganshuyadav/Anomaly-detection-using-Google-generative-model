// src/TextBoxManager.js
import React, { useState } from 'react';
import MainImage from "/images/mainPoint.svg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Dialog, DialogContent, DialogTitle, Drawer, List, ListItem, Paper } from "@mui/material";
import Representation from '../component/Representation';
import { Link } from 'react-router';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import TestDataFromRight from '../component/test-data-from-right/TestDataFromRight';
import { useSelector } from "react-redux";
import { ComponentStateType } from '../redux/Slices/componentSlice';
import StartAnalyzingButton from '../utils/action';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Info from '../component/info/InfoBox';
import PieChartComponent from '../component/charts/Pichart';
import { TestInput } from '../component/test-input/TestInput';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';

export type InputDataType = {
  id: string,
  content: string
}

const TextBoxManager = () => {

  const { isLoading } = useSelector((state: { component: ComponentStateType }) => state.component);

  const [boxes, setBoxes] = useState<Array<InputDataType>>([{ id: String(Date.now() - 4), content: '' }, { id: String(Date.now() - 3), content: '' }, { id: String(Date.now() - 2), content: '' }, { id: String(Date.now() - 1), content: '' },]);

  const handleContentChange = (id: string, newContent: string) => {
    setBoxes(boxes.map(box => (box.id === id ? { ...box, content: newContent } : box)));
  };

  const addNewBox = () => {
    setBoxes([...boxes, { id: String(Date.now()), content: '' }]);
  };

  const [openAnalyzedDialog, setAnalyzedDialog] = useState(false);
  const [openTestCasesMenu, setOpenTestCasesMenu] = useState(false);
  const [ openModelInput, setOpenModelInput] = useState(false);
 
  const handleOpenTestCasesMenu = (command: boolean) => {
    setOpenTestCasesMenu(command);
  }

  const handleOpenAnalyzedDialog = (command: boolean) => {
    setAnalyzedDialog(command);
  }

  return (

    <>
    <div className="bg-gray-700 p-8 relative shadow-2xl shadow-black">

        {/* Go to Home Page */}
        <Link to={"/"}>
          <div className="fixed p-3 rounded-full m-6 bg-slate-800 shadow-2xl text-white hover:bg-slate-700 transition duration-300">
            <ArrowBackIcon />
          </div>
        </Link>
        
        {/* Open Test Cases */}
        <div
          onClick={() => { setOpenTestCasesMenu(true) }}
          className="fixed right-0 p-3 rounded-full m-6 bg-slate-600 shadow-2xl text-white hover:bg-slate-800 transition duration-300"
        >
          <ReceiptLongIcon sx={{ fontSize: "36px" }} />
        </div>
        
        <div className="flex flex-col lg:flex-row items-start justify-center lg:justify-between lg:space-y-0 lg:space-x-10 mt-4 ">
        
          {/* Input Box */}
          <Card className="w-full ml-20 border-slate-800 max-w-xl bg-slate-800 text-gray-100 rounded-2xl shadow-2xl">
            <CardHeader>
              <h1 className="text-3xl font-bold text-indigo-300 text-center mt-2">
                Give Input for Anomaly Detection
              </h1>
            </CardHeader>
            <CardContent className="space-y-4 h-[500px] overflow-auto">
              {boxes.map((box, i) => (
                <Textarea
                  key={box.id}
                  value={box.content}
                  onChange={(e) => handleContentChange(box.id, e.target.value)}
                  placeholder={`Write ${i + 1} input...`}
                  className="h-24 bg-slate-700 text-white border border-slate-600 focus:ring-indigo-500"
                />
              ))}
            </CardContent>
            <div className="flex items-center justify-evenly mb-6">
              <Button onClick={addNewBox} disabled={isLoading} className="bg-indigo-600 hover:bg-indigo-500">
                Add More Inputs
              </Button>

              <StartAnalyzingButton
               handleOpenAnalyzedDialog={handleOpenAnalyzedDialog}
               inputBoxes={boxes}
             />

            </div>
          </Card>
        
          {/* Pie Chart */}
          <div style={{backgroundColor:"rgb(30, 41, 59)", borderRadius:"20px"}} className=" flex justify-center items-center mr-30 mt-2 shadow-xl">
            <Paper sx={{ width: 400, height: 300, backgroundColor:"rgb(30, 41, 59)", borderRadius:"20px" }} className="rounded-2xl shadow-2xl bg-slate-800 p-4 ">
              <PieChartComponent />
            </Paper>
          </div>
        
        </div>
        
        {/* Fixed Input Test Button */}
        <div className="fixed bottom-20 right-5">
          <Popover open={openModelInput} onOpenChange={setOpenModelInput}>
            <PopoverTrigger asChild>
              <Button className="bg-indigo-600 hover:bg-indigo-500">Give Input</Button>
            </PopoverTrigger>
            <PopoverContent className='mr-70 shadow-none border-none bg-transparent relative'>
               <div className='relative -bottom-25 shadow-md rounded-lg' >
                 <TestInput open={openModelInput} setOpen={setOpenModelInput}/>
               </div>
             </PopoverContent>
          </Popover>
        </div>
        
        {/*  analyzer dialog */}
       <div>
         {openAnalyzedDialog &&
           (
             <Representation openDialog={openAnalyzedDialog} handleDialog={handleOpenAnalyzedDialog} />
           )
         }
       </div>
        
        {/* Test Cases Drawer */}
        <Drawer anchor={"right"} open={openTestCasesMenu} onClose={() => handleOpenTestCasesMenu(false)}>
          <div className="bg-slate-800 p-4 w-[60vw] md:w-[80vw]">
            <TestDataFromRight />
          </div>
        </Drawer>
        
        
      </div>
    </>

  );
};

export default TextBoxManager;





    // <>

    //   {/* go to home page */}
    //   <Link to={"/"}>
    //     <div className='fixed p-2 rounded-lg m-8 bg-gray-800 shadow-lg text-white hover:bg-black'>
    //       <ArrowBackIcon />
    //     </div>
    //   </Link>

    //   {/* open test cases for analyser */}
    //   <div onClick={() => { setOpenTestCasesMenu(true) }} className='fixed right-0 p-2 rounded-full m-8 bg-gray-500 shadow-lg text-white hover:bg-gray-800'>
    //     <ReceiptLongIcon sx={{ fontSize: "40px" }} />
    //   </div>


    //   <div className="col-span-8 w-full flex flex-row items-start space-y-6 h-full">

    //     {/* input box */}
    //     <Card className="w-[550px] max-w-2xl ml-28 mt-12">
    //       <CardHeader>
    //         <h1 className="text-2xl font-semibold">
    //           Give Input for Anomaly Detection
    //         </h1>
    //       </CardHeader>
    //       <CardContent className="space-y-4 h-[520px] overflow-auto">
    //         {boxes.map((box,i) => (
    //           <Textarea
    //             key={box.id}
    //             value={box.content}
    //             onChange={(e) => handleContentChange(box.id, e.target.value)}
    //             placeholder={`Write ${i+1} input...`}
    //             className="h-24"
    //           />
    //         ))}
    //       </CardContent>
    //       <div className=" flex items-center justify-evenly">
    //         <Button onClick={addNewBox} disabled={isLoading} className=''>
    //           Add More Inputs
    //         </Button>
    //         <StartAnalyzingButton
    //           handleOpenAnalyzedDialog={handleOpenAnalyzedDialog}
    //           inputBoxes={boxes}
    //         />
    //       </div>
    //     </Card>

    //     {/* testing box */}
    //     <div className='h-[650px] w-[700px] m-auto ml-30 mt-15 flex justify-center '>
    //       {/* pichart */}
    //       <Paper sx={{ width: "400px", height:"300px", marginTop:"0px" }} className='rounded-lg overflow-y-auto'>
    //         <PieChartComponent/>
    //       </Paper>
    //     </div>

    //     {/* input test */}
    //     <div className='fixed bottom-20 right-5'>
    //       <Popover open={openModelInput} onOpenChange={setOpenModelInput}> 
    //         <PopoverTrigger asChild> 
    //           <Button>Give Input</Button>
    //         </PopoverTrigger>
    //         <PopoverContent className='mr-85 shadow-none border-none bg-transparent relative'>
    //           <div className='relative -bottom-25 shadow-md rounded-lg' >
    //             <TestInput open={openModelInput} setOpen={setOpenModelInput}/>
    //           </div>
    //         </PopoverContent>
    //       </Popover>
    //     </div>


    //   </div>

    //   {/*  analyzer dialog */}
    //   <div>
    //     {openAnalyzedDialog &&
    //       (
    //         <Representation openDialog={openAnalyzedDialog} handleDialog={handleOpenAnalyzedDialog} />
    //       )
    //     }
    //   </div>

    //   {/* test cases */}
    //   <div>
    //     <Drawer anchor={"right"} open={openTestCasesMenu} onClose={() => { handleOpenTestCasesMenu(false) }}>
    //       <TestDataFromRight />
    //     </Drawer>
    //   </div>


    // </>