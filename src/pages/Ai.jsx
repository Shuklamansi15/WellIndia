import React, { useEffect } from 'react';

const Ai = () => {

  
  useEffect(() => {
   
    const scriptSrc = 'https://cdn.jotfor.ms/agent/embedjs/01987efcfb807de79e9cfb78537e205a03a4/embed.js';

    
    if (document.querySelector(`script[src='${scriptSrc}']`)) {
      return;
    }

    
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    script.id = 'jotform-embed-script'; 
    document.head.appendChild(script);

   
  }, []);

 
  return (
    <></>
  );
};

export default Ai;