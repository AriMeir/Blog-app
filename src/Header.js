import {FaLaptop, FaTabletAlt, FaMobileAlt} from 'react-icons/fa'
import { Link } from "react-router-dom";
import useWindowSize from './hooks/useWindowSize';
function Header({ title }) {
  const {width} = useWindowSize();
    return (
      
      <header className="Header">
        <Link className="headerLink" to='/'>
        <h1>{title}</h1>
        </Link>
        {width < 768 ? <FaMobileAlt/> :
         width< 992 ? <FaTabletAlt/> :
         <FaLaptop/>}
      </header>
      
    );
  }
  
  export default Header;