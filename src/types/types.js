

import { CSSProperties, ChangeEvent, HTMLInputTypeAttribute, ReactNode } from "react";
import { Key } from "react";
import { Path } from "react-router-dom";



  /**
    ** This describes the type of Button
    ** There are currently three types of buttons:
    ** PRIMARY, SECONDARY, and TERTIARY
  */
  
  export const  ButtonType =  {
    PRIMARY :"PRIMARY",
    SECONDARY :"SECONDARY",
    TERTIARY :"TERTIARY"
  }
  
  // export type IButton = {
  //   buttonType: ButtonType, // can either be PRIMARY or SECONDARY or TERTIARY
  //   text: string, // text of the button
  //   hasLine: boolean, // line for the button
  //   style: {}, // additional stylings for button
  //   click: any, // function to call
  //   isLoading: boolean, // if true, disable button to prevent further clicking
  //   cName?: string, // additional className for the button
  //   animatable: boolean; // describe if button should animated.
  //   Icon?:React.ReactNode
  // }
  
 
  
  
//   export type ICarouselItems = [{
//     id: number;
//     imgSrc: string;
//     caption: string;
//     description: string;
//   }]
  
  
//   export type IFormInput = {
//     placeholder: string;
//     name: string;
//     type: HTMLInputTypeAttribute;
//     className?: string;
//     id: string;
//     label?: string;
//     onChange: (event: ChangeEvent<HTMLInputElement>) => void;
//     style?: CSSProperties;
//     value: string;
//   }
  
//   export type IProjectCards = {
//     imgSrc: string;
//     cardTitle: string;
//     cardText: string;
//     minHeight?: string;
//     maxHeight?: string;
//   };
  
//   export type ISectionHeader = {
//     titleText: string;
//     descText: string;
//   };
  
//   export type IHoverAbleCard = {
//     bgImage: string;
//     bgImageHeight: string;
//     bgImageWidth: string;
//     title?: string;
//     btnText: string;
//     btnFunction: () => void;
//     backgroundImageHasShadow: boolean;
//   }
  
//   export type ISsubNavBottomImages = {
//     id: number;
//     name: string;
//     url: string;
//   }[]
  
  
//   /**
//    ** This is only application to components that use the SecondaryHeader component
//    ** secondaryHeaderBackgroundIcon: represents the icon URL of the secondary header
//    ** secondaryHeaderTitle: represents the title of the secondary header
//    ** secondaryHeaderSubTitle: represents the subtitle of the secondary header
//    ** subNavComponent corresponds to the component returned based on match URLSearchQuery
//    ** secondaryHeaderTitle corresponds to the secondary header title for the header
//    */
  
//   export type SecondaryHeaderType = {
//     secondaryHeaderBackgroundIcon?: string | undefined;
//     secondaryHeaderTitle?: string | undefined;
//     secondaryHeaderSubTitle?: string | undefined;
//     hasSubNav: boolean;
//     isHovered?: boolean;
//   };
  
//   export type ILocation = {
//     pathname: any;
//     state: any;
//     key: Key;
//   }
  
//   export type IImageFrameWithHoverEffect = {
//     backgroundImage: string;
//     height: string;
//     width: string
//   }
  
//   export type IFormTextarea = {
//     placeholder: string;
//     name: string;
//     cName?: string;
//     id: string;
//     hasLabel: boolean;
//     label?: string;
//     onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
//     style?: CSSProperties;
//     value: string;
//   }
  
//   export type IP = {
//     click?: () => void, // function to call
//     textColor: string;
//     text: string;
//     style?: {};
//     cName?: string;
//     children?: ReactNode;
//     animatable: boolean; // describes if paragraph should be animated
//   }
  
//   export type IServices = {
//     setServiceType: any,
//     serviceType: any,
//   }
  
//   export type IServiceWithCTAButtons = {
//     bgImage: string;
//     primaryButtonText: string;
//     secondaryButtonText: string;
//     subTitleText: string;
//     titleText: string;
//     hasListItems: boolean;
//     listItemsHeadingText: string;
//     hasListItemsSubHeading: boolean;
//     listItemsSubHeadingText: string;
//     listItems: string[];
//     primaryButtonClickEvent: () => void;
//     secondaryButtonClickEvent: () => void;
//     listItemsFooterText: string;
//   }
  
  
//   export type ISubNavLinks = {
//     id: number;
//     name: string;
//     path: string;
//   }[]
  
//   export type ISubTitle = {
//     click?: () => void, // function to call
//     textColor: string;
//     text: string;
//     style?: {};
//     cName?: string;
//     children?: ReactNode;
//     animatable: boolean; // describes if subtitle should be animated
//   }
  
  
//   export type ITitle = {
//     click?: () => void, // function to call
//     textColor: string;
//     text: string;
//     style?: {};
//     cName?: string;
//     children?: ReactNode
//     animatable: boolean; // describes if title should be animated
//   }
  
//   export type INavLink = {
//     id: number;
//     path: string;
//     name: string;
//   }
  
//   /**
//   ** Type for `useLocationPathName` hook
//   ** location: ILocation, corresponds to the location params returned by `react-router-dom`
//   ** limit: number, corresponds to the number or index for the pathname
//   ** isFirstLetterUppercased: boolean, indicates if the first letter should be capitalized
//   */
  
  
// //   export type IUseLocationPathName = {
// //     location: ILocation,
// //     limit: number,
// //     isFirstLetterUppercased: boolean,
// //     searchQuery: string;
// //     pathname?: keyof typeof Path
// //   }
  
  
//   export type IUseSubNavComponent = {
//     searchParam: string | null,
//     searchQuery: string,
//     secondaryHeaderTitle: string,
//     subNavComponent: () => JSX.Element;
//   }
  
  
//   export type IClassCard = {
//     id: number;
//     cardTitle1: string;
//     cardTitle2: string;
//     cardTitle3: string;
//     cardTitle4?: string;
//     cardText: string;
//     cardHeaderText: string;
  
  
//   }[]
  
  