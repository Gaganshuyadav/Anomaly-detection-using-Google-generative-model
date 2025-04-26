import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import axios from 'axios';
import { manager } from '../../config';

export default function PieChartComponent() {

    const [ piChartData, setPiChartData] = React.useState([]);

    React.useEffect(()=>{
        
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



  return (
    <PieChart 
      sx={{width:"100%", height:"100%"}}
      series={[
        {
          data: piChartLabelData,
          arcLabel: (item)=>`${item.label}`,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter: (item: { value: number }) =>{return `${item.value}-test`;},
        },
      ]}
      height={200}
      width={200}
    />
  );
}