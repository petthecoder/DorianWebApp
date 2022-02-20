import { Component,} from '@angular/core';
import { ConfigurationService } from 'src/app/services/configuration.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {

  constructor(private configurationService: ConfigurationService){

  }

  changeTheme(theme:string){
    this.configurationService.setCurrentTheme(theme);
  }

}
