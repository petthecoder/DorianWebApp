import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/services/configuration.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  currentSection: string;
  profilePhoto: string;
  menuItems: any;
  profileStatus = false;
  leftMenuStatus = false;

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit(): void {
    this.currentSection = this.configurationService.getCurrentSection();
    this.profilePhoto = this.configurationService.getProfilePhoto();
    this.menuItems = this.configurationService.getMenuItems();
  }
  
  clickProfile() {
    if(this.profileStatus){
      document.getElementById('top-bar-profile-photo').classList.remove("anim-open");
      document.getElementById('top-bar-profile-photo').classList.add("anim-close");
      document.getElementById('profile-menu').classList.remove("anim-open");
      document.getElementById('profile-menu').classList.add("anim-close");
    } else{
      document.getElementById('top-bar-profile-photo').classList.remove("anim-close");
      document.getElementById('top-bar-profile-photo').classList.add("anim-open");
      document.getElementById('profile-menu').classList.remove("anim-close");
      document.getElementById('profile-menu').classList.add("anim-open");
    }
    this.profileStatus = !this.profileStatus;
  }

  openLeftMenu() {
    if(this.leftMenuStatus){
      document.getElementById('main-content').classList.remove("open");
      document.getElementById('left-bar').classList.remove("anim-open");
      document.getElementById('left-bar').classList.add("anim-close");
    } else {
      document.getElementById('main-content').classList.add("open");
      document.getElementById('left-bar').classList.remove("anim-close");
      document.getElementById('left-bar').classList.add("anim-open");
    }
    this.leftMenuStatus = !this.leftMenuStatus;
  }

}
