import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  a:number =10
  b:string = "amaan"
  c:boolean = true
  list :number[] = [1,2,3]
  list2:string[] = ["amaan","abc"]
  amaan:any=12
}
