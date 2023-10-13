import { Pipe, PipeTransform } from '@angular/core';
import { Iplyers } from '../model/olayers';

@Pipe({
  name: 'cricketersFilter'
})
export class CricketersFilterPipe implements PipeTransform {

  transform(value: Array<Iplyers>, Searchstring : string)  : Iplyers [] {
      console.log(Searchstring);
      console.log(value);
       let filteredArray : Array<Iplyers> = []


      
        if(!value){
          return []
        }
        if(!Searchstring){
            return value
        }
        filteredArray = value.filter(ele =>{
            return ele.team.toLocaleLowerCase().includes(Searchstring.toLocaleLowerCase())
        })
      return filteredArray
      
  }
              
    
  } 
    



