//********forEach method********** */
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item){  //callback function 
    console.log(item);         //js ruby java python cpp
} )

coding.forEach( (item) => {
    console.log(item);        //js ruby java python cpp
} )

//********************************* */
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)    //js ruby java python cpp

//*************** */
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);       // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ] // ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ] // ........
} )                                                         

//****************************** */
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);  //javascript  //java // python
} )

myCoding.forEach( (item) => {
    console.log(item);          // { languageName: 'javascript', languageFileName: 'js' } // { languageName: 'java', languageFileName: 'java' }
} )                            //{ languageName: 'python', languageFileName: 'py' }
               
myCoding.forEach( (item,index, arr) => {
    console.log(index);       // 0 1 2      
  
} ) 

myCoding.forEach( (item) => {
    console.log(item.languageFileName);  //js  //java // py
} )