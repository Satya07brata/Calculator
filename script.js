let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=string.replace('^' , '**');
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if( e.target.innerHTML=='AC'){
            string="";
            document.querySelector('input').value=string;

        }
        else if( e.target.innerHTML=='%'){
            string=document.querySelector('input').value;
            let string1="";

            if(string.indexOf("-")){
                let string2=string.split("-")[0];
                console.log(string2);
                string=string.replace('-','*');
                string=eval(string+('/100'));
                string=eval(string2-string); 
                console.log(string);
            }
            else{
                string1=string.split("+")[0];
                console.log(string1);
                string=string.replace('+','*');
                string=eval(string+('/100'));
                string=eval(string1+string); 
                console.log(string);
            }

            // if(string.indexOf("+")===0){
            //     let string2=string.split("-")[0];
            //     console.log(string2);
            //     string=string.replace('-','*');
            //     string=eval(string+('/100'));
            //     string=eval(string2-string); 
            //     console.log(string)
                
            // }
            // else{
                
            //     let string1=string.split("+")[0];
            //     console.log(string1);
            //     string=string.replace('+','*');
            //     string=eval(string+('/100'));
            //     string=eval(string1+string); 
            //     console.log(string)

            // }
            
     

            // string=eval(string);
            document.querySelector('input').value=string;

        }
        else if( e.target.innerHTML=='DEL'){
            string=document.querySelector('input').value.slice(0, -1);
            document.querySelector('input').value=string;

        }
        else{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
})