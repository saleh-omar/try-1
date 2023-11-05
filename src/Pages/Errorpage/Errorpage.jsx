import React from 'react';
import swal from 'sweetalert';



const Errorpage = () => {
    return (
        <div>
            { sweetAlert("Oops...", "404 Page not Found", "error")}
            
           
        </div>
    );
};

export default Errorpage;