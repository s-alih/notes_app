const wish = {
    name:'Birthday party',
    gestList:['sali','aida','shuaib','nahan'],
    printGestList(){
       console.log('Gests for ' + this.name);
       this.gestList.forEach((gest)=>{
           console.log(gest +' is attending '+this.name);
       }) 
    }

}
wish.printGestList()