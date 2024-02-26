import React from "react";
import { Icon } from '@iconify/react';

const Gallery: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-heading text-center p-4">
        Plusy
     </h1>
    <div className="flex justify-center">
      <div className="md:grid md:grid-cols-4 grid grid-cols-2 gap-4 mt-8 gap-y-16">
        <div>
          <Icon icon="fa6-solid:tree" color="#7c9c8c" width="58px" style={{ margin: "0 auto" }}/>
          <p className="text-center w-1/2 mx-auto mt-4 text-sm"><b>1 ha soukromého lesoparku</b></p>
        </div>
        <div>
          <Icon icon="fa6-solid:spa" color="#7c9c8c"  width="72px" style={{ margin: "0 auto" }}/>
          <p className="text-center w-1/2 mx-auto mt-5 text-sm"><b>Wellnes s bazénem a saunou</b></p>
        </div>
        <div>
          <Icon icon="fa6-solid:dumbbell"  color="#7c9c8c" width="64px" style={{ margin: "10px auto 20px" }}/>
          <p className="text-center w-1/2 mx-auto mt-5 text-sm"><b>Venkovní posilovna a tělocvična v interiéru</b></p>
        </div>
        <div>
          <Icon icon="fa6-solid:shower"  color="#7c9c8c" width="64px" style={{ margin: "0 auto" }}/>
          <p className="text-center w-1/3 mx-auto mt-5 text-sm"><b>Umývárna kol a psů </b></p>
        </div>
        <div>
          <Icon icon="fa6-solid:user-doctor"  color="#7c9c8c" width="56px" style={{ margin: "0 auto" }}/>
          <p className="text-center w-1/2 mx-auto mt-5 text-sm"><b>Místnost pro rodinného lékaře</b></p>
        </div>
        <div>
          <Icon icon="fa-solid:bus-alt"  color="#7c9c8c" width="64px" style={{ margin: "0 auto" }}/>
          <p className="text-center w-1/2 mx-auto mt-5 text-sm"><b>Shuttle - privátní doprava</b></p>
        </div>
        <div>
          <Icon icon="fa6-solid:children"  color="#7c9c8c" width="77.99px" style={{ margin: "0 auto" }}/>
          <p className="text-center mx-auto mt-5 text-sm"><b>Dětský klub</b></p>
        </div>
        <div>
          <Icon icon="fa6-solid:route"  color="#7c9c8c" width="64px" style={{ margin: "0 auto" }}/>
          <p className="text-center w-1/2 mx-auto mt-5 text-sm"><b>Přímé napojení na cyklostezku</b></p>
        </div>  
      </div>
    </div>
    </div>
  );
};

export default Gallery;