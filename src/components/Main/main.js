import React from 'react';
import Nav from '.././Navbar/navigator';



const Main = ({
    children
  }) => (
    <>
      <Nav/>
      <div className="container-fluid px-0 py-0 mx-0 my-0">
        <div>{children}</div>
      </div>
    </>
  );
  
  export default Main;