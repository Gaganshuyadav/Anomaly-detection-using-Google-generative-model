import React from 'react';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import { ComponentStateType } from '../redux/Slices/componentSlice';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const RepresentDataTable = () => {

  const { analyzedData } = useSelector((state: { component: ComponentStateType }) => state.component);


  const rows = analyzedData.length > 0 ? analyzedData.map((output, i) => {
    return (
      { id: i + 1, text: output.Text, classification: output.Classification, anomalous: output.Anomalous, score: output.Score, explaination: output.Explanation }
    )
  }) : [];

  //find max length for column so that it is able to adjust length
  const findWidthForEachText = (rows: any, field: string) => {
    let maxLength = 150;
    rows.forEach((row: any) => {
      if (row[field].toString().length > 0) {
        maxLength = Math.max(maxLength, row[field].toString().length);
      }
    })

    return field === "text" ? maxLength * 3 : maxLength * 7;

  }
  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', minWidth: 90 },
    {
      field: 'text',
      headerName: 'Text',
      width: findWidthForEachText(rows, "text")
    },
    {
      field: 'classification',
      headerName: 'Classification',
      minWidth: 150,
    },
    {
      field: 'anomalous',
      headerName: 'Anomalous',
      minWidth: 150
    }
    ,
    {
      field: 'score',
      headerName: 'Score',
      type: 'number',
      minWidth: 110,
    },
    {
      field: 'explaination',
      headerName: 'Explaination',
      minWidth: findWidthForEachText(rows, "explaination")
    },
  ];


  const chartData = analyzedData.length > 0 ? analyzedData.map((data,i)=>{
    return { name: `input${i+1}`, score: data.Score}
  }) : [];


  return (
    <div className="px-8 w-[80vw]">
      <DataGrid
        columns={columns}
        className='shadow-sm hover:shadow-lg'
        rows={rows}
        disableColumnMenu={true}
        disableColumnSorting={true}
        sx={{
          width: "1350px",
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "black",
            color: "white",
            marginTop:"30px"
          }
        }}

      />

      <Card className='border-2 w-[60vw] mx-auto mt-16 shadow-xl shadow-gray-600 transition '>
        <CardHeader>
          <h2 className="text-xl font-medium">Anomaly Scores Over Time</h2>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              {/* <RechartsTooltip /> */}
              <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className='ml-2 mt-16'>
        <Link to={"/"} className="px-6 tracking-wider bg-black hover:bg-gray-700 text-white py-2 px-4 rounded hover:bg-blue-700">Go to Home Page</Link>
      </div>
    </div>
  )
}

export default RepresentDataTable