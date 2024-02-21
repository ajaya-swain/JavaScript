// *********Immediately Invoked Function Expressions (IIFE)***********

function chai(){
    console.log(`DB CONNECTED ZERO`);   
}
chai();             //DB CONNECTED ZERO
//******************************* */
(function chai(){     // this is called "named IIFE"
    console.log(`DB CONNECTED ONE`);    //DB CONNECTED ONE
})
();              //semicolon ";" is important to write 2 iife 

// () () 
//*************************** */

(() => {            //this is called "unnamed IIFE"
    console.log(`DB CONNECTED TWO `);
} )();      //DB CONNECTED TWO

//***************************** */

((name) => {       
    console.log(`DB NAME ${name}`);
} )('Ajaya')  //DB NAME Ajaya