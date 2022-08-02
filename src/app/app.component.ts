import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-keyboard-tester';
  key: any = 'Press any key';
  history: string = '';

  disableFunctionKeys(e: KeyboardEvent) {
    var functionKeys = new Array(9, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123);
    if (functionKeys.indexOf(e.keyCode) > -1 || functionKeys.indexOf(e.which) > -1) {
        e.preventDefault();
    }
  };

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.key = event.key;
    this.disableFunctionKeys(event);
    this.history = this.history +' '+ this.key;
    console.log(this.key);
  }

  clear(){
    this.history = '';
  }
}
