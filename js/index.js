'use strict';
// const rad = document.querySelectorAll('#delpik');
       
//         rad.onclick = function () {
//             //const delv = document.querySelectorAll('input[name="delpik"]');
//             const addy = document.querySelector('address')
//             let selectedValue = rad.value
//                 if (selectedValue === 'pickup') {
//                     addy = input.disabled = true;
//                     break;
//                 }
//             }
            
//         };
function Cbtn(){
  if(document.getElementById('pickup').checked)
 {
        document.getElementById('address').disabled=true; 
   }else{
                    document.getElementById('address').disabled = false;
                }
 }
 function Number(inputtxt)
 {
   const inval = /^\d{10}$/;
   if(inputtxt.value.match(inval))
   {
       return true;
   }
   else
   {
      alert("Invalid Number");
      return false;
   }
   }
 