import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  currentTheme: string;
  currentSection: string;
  profilePhoto: string;
  menuItems: any;


  loadConfig(){
    this.currentTheme = "simple";
    this.currentSection = "projectManager";
    this.profilePhoto = "assets/mock/roboto.jpg"
    this.menuItems = [
      {text: "Home", link: "home"},
      {text: "Project Manager", link: "projectManager"},
      {text: "Domotic", link: "domotic"}
    ];
  }

  applyConfig(){
    document.getElementById("cssTheme")["href"] = "/assets/css/" + this.currentTheme + "Theme.css"
  }

  getCurrentTheme(){
    return this.currentTheme;
  }

  setCurrentTheme(theme: string){
    this.currentTheme = theme;
    document.getElementById("cssTheme")["href"] = "/assets/css/" + this.currentTheme + "Theme.css"
  }

  getCurrentSection(){
    return this.currentSection;
  }

  setCurrentSection(section: string){
    this.currentSection = section;
  }

  getProfilePhoto(){
    return this.profilePhoto;
  }

  setProfilePhoto(photo: string){
    this.profilePhoto = photo;
  }

  getMenuItems(){
    return this.menuItems;
  }

  setMenuItems(items: any){
    this.menuItems = items;
  }

}
