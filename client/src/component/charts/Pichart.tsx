import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import axios from 'axios';
import { manager } from '../../config';
import { socket } from '../../lib/socketProvider';

export default function PieChartComponent() {

    const [ piChartData, setPiChartData] = React.useState([]);
        
        async function getTestingData(){

        const res = await axios.get(`${manager.server}/get-test-data`, { headers:{"Content-Type":"application/json"}});
        console.log(res);

        let dataMap = res?.data?.data?.text?.map(( textData:string, i:number)=>{
            return(
                { value: textData, label: res?.data?.data?.label[i]}
            )
        });

        setPiChartData(dataMap);
        console.log(dataMap)

        }


    React.useEffect(()=>{

        getTestingData();

    },[]);



  const piChartLabelData = [
    {
        label:"Positive",
        value: 0
    },
    {
        label: "Negative",
        value:0
    }
  ]

  piChartData?.forEach((data:{ label:number, value:string})=>{

    data.label===1 ? (piChartLabelData[0].value++) : (piChartLabelData[1].value++);
  })



  const inputTestDataFromClient = ( data:any)=>{
      getTestingData();
      console.log("socket ",data);
  }

  React.useEffect(()=>{

    socket.on("INPUT-TEST-DATA-FROM-CLIENT", inputTestDataFromClient);

    ()=>{
        socket.off( "INPUT-TEST-DATA-FROM-CLIENT", inputTestDataFromClient);
    }

  },[]);




  return (
    <PieChart 
    colors={["rgb(23, 234, 41)","orange"]}
      sx={{width:"100%", height:"100%", background:"rgb(51, 71, 104)", borderRadius:"20px"}}
      series={[
        {
          data: piChartLabelData,
          arcLabel: (item)=>`${item.label}`,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter: (item: { value: number }) =>{return `${item.value}-test`;}
        ,
        },
      ]}
      height={200}
      width={200}
    />
  );
}