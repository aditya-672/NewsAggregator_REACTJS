import CategoryIcon from '@mui/icons-material/Category';

const Sidebar = (props) => {
  const handler = (e)=>{
    props.categoryhandler(e);
    console.log("From sidebar", e.target.value);
  }
  return (
    <div className="w-1/5 m-4">
        <p className="text-4xl text-center flex items-center gap-3"><CategoryIcon fontSize='large'/>Categories</p>
        <div className="mt-4 text-1xl text-left">
            <ul className='pl-4 p-2 flex flex-col items-start'>
                <button value="business" onClick={handler} className='font-medium focus:border-l  focus:pl-4 focus:p-8 hover:border-l hover:pl-4 p-8'>Business</button>
                <button value="entertainment" onClick={handler} className='font-medium focus:border-l focus:pl-4 focus:p-8 hover:border-l hover:pl-4 p-8'>Entertainment</button>
                <button value="health" onClick={handler} className='font-medium focus:border-l focus:pl-4 focus:p-8 hover:border-l hover:pl-4 p-8'>Health</button>
                <button value="science" onClick={handler} className='font-medium focus:border-l focus:pl-4 focus:p-8 hover:border-l hover:pl-4 p-8'>Science</button>
                <button value="sports" onClick={handler} className='font-medium focus:border-l focus:pl-4 focus:p-8 hover:border-l hover:pl-4 p-8'>Sports</button>
                <button value="technology" onClick={handler} className='font-medium focus:border-l focus:pl-4 focus:p-8 hover:border-l hover:pl-4 p-8'>Technology</button>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar