import { serverurl } from "./serverurl";
import { compai } from "./Commonapi";

export const addmenuname = async(body)=>{
    return compai("post",`${serverurl}/addmenuname`,body)
}

export const getmenuname = async()=>{
    return compai("get",`${serverurl}/getmenuname`)
}

export const additem = async (reqbody)=>{
    return compai("post",`${serverurl}/additem`,reqbody)
}

export const getitem = async ({ category }) => {
    return compai("get", `${serverurl}/getitem?category=${category}`);
  };
  