import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	allowAddServer = false;
	btntext = 'Unable to add server';
	serverCreationStatus = 'No server created Yet';	
	serverName = 'Test Server';
	serverCreated = false;
	serverList = ['TestServer1','TestServer2']; //initial list of servers

	constructor() {
		setTimeout( () => {
			this.allowAddServer = true;
			this.btntext = 'Add Server';
		},5000)
	}
	
	//its a convention to name it onxxxxxx
	onCreateServer() {
		this.serverCreated = true;
		this.serverList.push(this.serverName); //add new server
		this.serverCreationStatus = 'Server ' + this.serverName + ' Created';
	}
	onUpdateServerName (event: any) {
		//console.log(event);
		this.serverName = event.target.value; //In the console log click on any event->target -> value
	}

}
