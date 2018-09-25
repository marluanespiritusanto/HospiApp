import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  constructor(public settingService: SettingsService) {}

  ngOnInit() {
    this.PutCheckMark();
  }

  public ChangeThemeColor(theme: string, option: any) {
    this.settingService.ChangeThemeColor(theme);
    this.CheckColor(option);
  }

  public CheckColor(option: any) {
    [].slice.call(document.getElementsByClassName('selector')).forEach(el => {
      el.classList.remove('working');
    });
    option.classList.add('working');
  }

  public PutCheckMark() {
    const elements = [].slice.call(document.getElementsByClassName('selector'));
    elements.forEach(el => {
      if (el.getAttribute('data-theme') === this.settingService.Settings.theme) {
        el.classList.add('working');
        return;
      }
    });
  }
}
