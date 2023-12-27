import {  Dispatch, RefObject, SetStateAction } from "react";

export type TrendProps = {
    img: string;
    name: string;
}

export type Item = {
   id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type checkboxItem = {
 
  [key:string]: string[]
  
}


export type TrendingProps = {
  trending:Item[]
}

export type SearchBarProps = {
  onClick?: () => void;
  type: string;
  search: RefObject<HTMLInputElement>
}

export type ItemProps = {
  productItem:Item
}

export type AccordionProps = {
  setMark: Dispatch<SetStateAction<checkboxItem>>
  mark:checkboxItem
}

export type sectionType = {
  id: number,
  title: string,
  value:string,
  checkboxes: string[],
  isOpen: boolean

}