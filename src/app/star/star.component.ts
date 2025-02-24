import { Component} from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
  star:string  = '';

  submitStar(){
    console.log("submit")
    const numHTML = (document.getElementById('number-to-star')as HTMLInputElement);
    const numToStar = Number(numHTML.value) ;
    numHTML.value = ''
    console.log(numToStar)
    this.star = ''
    if(numToStar == 0){
      //console.log('input positive number')
      this.star += ('No Star')
    }
    else if(numToStar<0){
      this.star += ('Input Positive Number')
    }
    for( let i=0; i< numToStar;i++){

      for(let j=0; j<=i;j++){
        this.star += '*' //linebyline up->mid
      }
      this.star += '\n'
    }
    for( let i=numToStar-1;i>0 ;i--){
      for(let j=0;j<i ;j++){
        this.star += '*' //linebyline many->noi
      }
      this.star += '\n'
    }
    numHTML.value = ''
  }

}
