let i =0 
let cpts=0;
let ppts=0;

const r = document.querySelector('.r')
const ps = document.querySelector('.ps')
const cs = document.querySelector('.cs')
const btns = document.querySelectorAll('.btns')
const idk = function() {
    addEventListener('click',(e) => game(e))  }
 
 
 btns.forEach( idk)
function c() {

    min = Math.ceil(4);
    max = Math.floor(1);
    return Math.floor(Math.random() * (max - min) + min);


} 
//dd
p = function(b) {
    
   
    switch (b.toLowerCase()) {
        case 'rock':
            return 1;
           
        case 'papper':
            return 2; 
            
       
        case 'scissor':
            return 3
            
        default:
            alert("wrong choice");
            break;   
            
    }
    
}
let l;
function gameround(comp,pl) {
   

    
   
    if (comp == 1  && pl ==2) 
    {
       return 11
    } else if(comp ==2 && pl == 1) {
       return 22
    } else if (comp ==2 && pl ==3){
       return 11
    } else if (comp == 3 && pl ==2) {
      return 22
    } else if( comp ==1 && pl ==3) {
        return 22
    } else if( comp ==3 && pl ==1) {
        return 11
    } else if (comp == pl ) {
        r.innerHTML='this round was a draw'
        return 1
    }
   
 }

 function game(e) {
    
    let w = e.target.innerText;
    
   
    
  
  
    if (i < 4) {
     
    pl = p(w);
    let comp = c();//comp select
    let x = gameround(comp,pl);
   
        
        
     //pts   
    if (x==11) {
            ppts++;
    } else if (x==22) { 
            cpts++;
    } else if(x==1) {
        
    }
   
    i++;
    r.innerHTML = `round ${i}`
    ps.innerHTML =  `player:${ppts}`
    cs.innerHTML = `computer: ${cpts}`
    console.log("round ovrr")

    } else if (i==4) {
        pl = p(w);
        let comp = c();//comp select
        let x = gameround(comp,pl);
            
            
         //pts   
        if (x==11) {
                ppts++;
        } else if (x==22) { 
                cpts++;
        } 
        //winners and looser
        console.log(cpts)
        if(cpts>ppts) {
           // return 22
           console.log("c wins")
           r.innerText= 'computer wins'
        } else if( cpts<ppts) {
            //return 11
            r.innerText= 'player wins'
            console.log("p wins")
        }
        ps.innerHTML = `player: ${ppts}`
        cs.innerHTML = `computer:${cpts}`
        console.log("game ends")

        //reset
        i = 0;
        cpts=0;
        ppts=0;

    }
   

   
   /* for(let i = 0;i<4;i++) {
        let comp = c();//comp select
        let pl = p()//player select
        while(pl ==undefined) {
            pl = p();
        }
       
        let x = gameround(comp,pl);
        
        
        
        if (x==11) {
            ppts++;
        } else if (x==22) { 
            cpts++;
        }
        
        
    }*/
    
}








