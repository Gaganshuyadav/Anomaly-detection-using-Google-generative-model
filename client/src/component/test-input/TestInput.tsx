import * as React from "react"

import { Button } from "../..//components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"
import axios from "axios"
import { manager } from "../../config"

export function TestInput( { open, setOpen}:{ open:boolean, setOpen:Function}) {

    const [ text, setText] = React.useState("");
    const [ classi, setClassi] = React.useState("");


    const handleInputData = async ()=>{

      if(text=="" || classi===""){
        return;
      }

        const res = await axios.post(`${manager.server}/store-test`, { text, classification:classi}, { headers:{"Content-Type":"application/json"}});
        console.log(res);
        setClassi("");
        setText("");
    }


  return (
    <Card className="w-[430px] bg-slate-700 border-slate-800 border-2">
      <CardHeader>
        <CardTitle>Write Input</CardTitle>
        <CardDescription>This input is used to train the model</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Input String</Label>
              <Input id="name" value={text} placeholder="write here.." onChange={(e)=>{ setText(e.target.value)}} spellCheck={false} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Classification</Label>
              <Select value={classi} onValueChange={(e)=>{ setClassi(e)}}>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select"  />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem className="hover:bg-black" value="positive">Positive</SelectItem>
                  <SelectItem className="hover:bg-black" value="negative">Negative</SelectItem>

                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={()=>{setOpen(false)}}>Cancel</Button>
        <Button onClick={handleInputData}>Add in Test</Button>
      </CardFooter>
    </Card>
  )
}


