import { Component } from '@angular/core';
import { ConfigurationService } from './services/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DorianWebApp';

  constructor(private configurationService: ConfigurationService){
    this.configurationService.loadConfig();
    this.configurationService.applyConfig();
  }
}
