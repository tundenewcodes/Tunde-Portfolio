import navIcon from '../assets/icons/nav-icon.svg';
import{BiRightArrowAlt, BiLeftArrowAlt} from 'react-icons/bi'


export const useIcons = () => {
  return {
    navIcon,
    leftArrow:BiLeftArrowAlt,
    rightArrow:BiRightArrowAlt
  };
};

