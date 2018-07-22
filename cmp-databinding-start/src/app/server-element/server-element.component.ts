import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element: {type: string, name: string, content: string}; //variable element is an empty js object.
  //@Input() allows serverElements to be exposed to other elements. It must be imported from angular/core.
  //srvElement is an alias for element. This is how an alias for an exposed object is created, i.e srvElement can be used
  // to bing to element object.

  constructor() { }

  ngOnInit() {
  }

}
