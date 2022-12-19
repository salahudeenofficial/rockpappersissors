
function c() {

    min = Math.ceil(4);
    max = Math.floor(1);
    return Math.floor(Math.random() * (max - min) + min);

} 

function  p() {
    
    let  b = prompt("enter choice");
    switch (b.toLowerCase()) {
        case 'rock':
            return 1;
           
        case 'papper':
            return 2; 
            
       
        case 'sissor':
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
        return 1
    }
   
 }

 function game() {
    let cpts=0;
    let ppts=0;
    for(let i = 0;i<4;i++) {
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
        
        
    }
    console.log(cpts)
    if(cpts>ppts) {
        return 22
    } else if( cpts<ppts) {
        return 11
    }
}







