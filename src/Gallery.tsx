import React from "react";
import { Icon } from '@iconify/react';

const Gallery: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-4 mt-8">
        <div>
            <Icon icon="fa6-solid:tree" color="#7c9c8c" width="50px" style={{ margin: "0 70px" }}/>
            <p>ahoj</p>
        </div>
        <Icon icon="fa6-solid:spa" color="#7c9c8c"  width="50px" style={{ margin: "0 70px" }}/>
        <Icon icon="fa6-solid:dumbbell"  color="#7c9c8c" width="50px" style={{ margin: "0 70px" }}/>
        <Icon icon="fa6-solid:shower"  color="#7c9c8c" width="50px" style={{ margin: "0 70px" }}/>
        <Icon icon="fa6-solid:user-doctor"  color="#7c9c8c" width="50px" style={{ margin: "0 70px" }}/>
        <Icon icon="fa-solid:bus-alt"  color="#7c9c8c" width="55px" style={{ margin: "0 70px" }}/>
        <Icon icon="fa6-solid:children"  color="#7c9c8c" width="65px" style={{ margin: "0 70px" }}/>
        <Icon icon="fa6-solid:route" color="#7c9c8c" width="50px" style={{ margin: "0 70px" }}/>
      </div>
    </div>
  );
};

export default Gallery;