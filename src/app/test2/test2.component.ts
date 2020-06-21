import { Component, OnInit } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  name='';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event){
    console.log("This is event binding example");
    console.log(event);
  }

  onClickofInput(value){
    console.log(value);
  }

  onClickOfInput1(event){
    console.log(event);
  }

}
