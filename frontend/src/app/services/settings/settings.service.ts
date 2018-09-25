import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

interface ISettings {
  themeUrl: string;
  theme: string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public Settings: ISettings = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default-dark'
  };
  private themePath: string = 'assets/css/colors/';

  constructor(@Inject(DOCUMENT) private _document) {}

  public SaveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.Settings));
  }

  public LoadSettings() {
    this.Settings = JSON.parse(localStorage.getItem('settings')) || this.Settings;
    this.ChangeThemeColor(this.Settings.theme);
  }

  public ChangeThemeColor(theme: string) {
    const THEME_URL = `${this.themePath + theme}.css`;
    this._document.getElementById('theme').setAttribute('href', THEME_URL);
    this.Settings.theme = theme;
    this.Settings.themeUrl = THEME_URL;
    this.SaveSettings();
  }
}
