import React from 'react'

const AppLayout = (WrappedComponents) => {
  return (props) => {
      return(
        <>
        <Headers />
         <WrappedComponents {...props}/>
        <Footer/>
        </>
        );
    }
}

export default AppLayout