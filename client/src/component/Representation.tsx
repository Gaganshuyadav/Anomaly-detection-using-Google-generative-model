import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import RepresentDataTable from './RepresentDataTable';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { ComponentStateType } from '../redux/Slices/componentSlice';
import Loader from './loader/Loader';

const Representation = ( { openDialog, handleDialog}:{ openDialog:boolean, handleDialog: Function}) => {

  const { isLoading } = useSelector((state: { component: ComponentStateType }) => state.component);

  return (
    <div>

        <Dialog
          open={openDialog}
          maxWidth={false}
          >
            {/* close icon */}
            <div onClick={()=>{ handleDialog(false)}} className={` ${openDialog ? "flex" : "none" } fixed top-[30px] right-40 text-gray-800 hover:text-gray-600 `}>
               <CloseIcon sx={{fontSize:"40px"}}/>
            </div>

            <DialogTitle className='flex justify-between'>
                  See The Results
            </DialogTitle> 
            <DialogContent >
                {
                  isLoading
                  ? 
                  <div className='px-40 py-10'>
                     <Loader/> 
                     <div className='text-gray-500 text-xl'>Loading...</div>
                  </div>
                  : 
                  <RepresentDataTable/>
                }
                
            </DialogContent>
            
          </Dialog>
    </div>
  )
}

export default Representation