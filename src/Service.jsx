import React,{useEffect} from "react";
import Card from "./Card";
import {Data} from './Data'
const Service = () => {
    useEffect(()=>{
        document.title='Services-Ripplestacks'
      })
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services </h1><br />
        <div classname="container-fluild">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
               {
                Data.map((val,ind)=>{
                    return <Card
                        image={val.img}
                        title={val.title}
                        content={val.content}
                    />
                })
               }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
