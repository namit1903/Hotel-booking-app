import {Link} from 'react-router-dom';

const Header=()=>{
  return(
    <div className="bg-blue-800 py-6">
    <div className="container mx-auto flex justify-between">

<span className="text-3xl text-white font-bold tracking-tight">
  <Link to="/">MERNHOLIDAYS.com</Link>
  </span>

<span className="flex space-x-2">
{//conditional statement

  <Link to ="/sign-in" className="flex bg-white items-center text-blue-600 px-3 font-bold 
   hover:bg-gray-600  ">
Sign in
</Link>
}</span>

    </div>
    </div>
  )
}
export default Header;  