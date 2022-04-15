

let promisetxt=document.querySelector('#promise');
let primesubmit=document.querySelector('#primenumberbtn');
let primeinput=document.querySelector('#primenumberinput');
primesubmit.addEventListener('click',()=>{
    let task=(success,failure)=>{
x=primeinput.value;
console.log(x);
        let n=false;
        let u='';
        let c=0;
        for(let i=2;i<=x/2;i++){
            if(x%i===0){
                 u+=" &nbsp &nbsp &nbsp &nbsp &nbsp  "+ i +"<br>";
                n=true;
                  c++;
                  
            }
        }

        
            if(n===true){
                
                success(`       &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 
                               ${x} is not a prime number.<br> <br>
                               &nbsp &nbsp &nbsp &nbsp 
                               because  ${x} is divible by -> <br>
                               
                               
                               ${u} 
                <br> so, the given number have ${c} divisables.
                so , it is not a prime number .<br><br>for more information about prime number
                 please visit <a target="_blank" class="text-white" href="https://www.cuemath.com/numbers/prime-numbers/"> -> GO </a>`);
                
               
            }
            if(n===false){
                failure(`${x} is prime`);
                
              
            }
        }
        
        task((message)=>{
        promisetxt.innerHTML=message;
        },(message)=>{
        promisetxt.innerHTML=(message);
        });
        
       

});