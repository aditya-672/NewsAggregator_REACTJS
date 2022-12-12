import Newsicon from '../megaphone.png'
import Darkbutton from "./Darkbutton";
const Navbar = () => {

  return (
    <>
      <nav className="flex fixed w-full backdrop-blur-lg justify-between text-xl p-4 dark:bg-slate-800/90 dark:text-white bg-slate-300/90 text-black">
        <p className='flex items-center text-2xl'>News Website<img src={Newsicon} className="w-5 h-5 mx-2 dark:invert" /></p>
        <ul className="flex space-x-16 pr-12">
          <li>Home</li>
          <li>Contact Me</li>
          <li>
            <Darkbutton/>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
