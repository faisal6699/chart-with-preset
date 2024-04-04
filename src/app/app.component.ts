import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as presetSdk from '@preset-sdk/embedded';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'chart-with-preset';
  private myLightDashboard: any;


  ngOnInit() {
    console.log(presetSdk)
    this.myLightDashboard = presetSdk.embedDashboard({
      fetchGuestToken(): Promise<string> {
        return Promise.resolve("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImtleTIifQ.eyJ1c2VyIjp7ImZpcnN0X25hbWUiOiJmYWlzYWwiLCJsYXN0X25hbWUiOiJhaG1lZCIsInVzZXJuYW1lIjoiZmFpc2FsMzk0OSJ9LCJyZXNvdXJjZXMiOlt7InR5cGUiOiJkYXNoYm9hcmQiLCJpZCI6IjNkYzM1OWNjLTk5NzktNGQzNi1iMWIxLWFlMjRlYzZhNmVkMSJ9XSwicmxzX3J1bGVzIjpbXSwiYXVkIjoiMjI4MjUwN2UiLCJpYXQiOjE3MTIxMjAyNTIsImV4cCI6MTcxMjEyMDU1MiwidHlwZSI6Imd1ZXN0IiwianRpIjoiMTkwYWQ5ZjQtNmRhZC00NTdjLWFjMGYtYmE5NzlhODhlMjFiIn0.XBuBp8ZXuDkQEb_2K7E11CeMXGBEkcCC0IhglknWiE5GrT3JwzNJCctidfZPiTGojdJ75UXEK5T1WcZiBZMt51kcSx0FWcWQiS3L6JFj6EAuPcYMBHP_uHB_BhVD2fE1LzDIeHWMBYhRq_L0ebYA4_tPcVyKC-oGuMzDtqE9XUqnU8uNpOkHJ7pzqfOitoJuhYNagb1Lum03o8ZVpUrQPJXqM_7TSZbtKVlWzqe2cNIK-GYxFUR4iU5QLN18XWEGsKc72QTHI-82xvJ7PSUryEdklUaZ0eKuPRaWTdqemnU-AMeZfkAj8XB-nj3Sb_HaO2B8_rmEqaSuGOgF1SOxEtjH6Px6XhnwSgUsvWwgbi8mp1USnpKxPvZ_eaqz50FkDKzYu_ycYXhVU6-2Nds3Pu7jenYCaCyw0ZfwBq4DMlI6iHR-5jzoccBvnoUmEuHAK816rSQNtlgHT97YTAnqvTKgLHtD0n6HXQ7QS_EYVmEP1YZwXpN7IfPZCs44kfWtTvtZU30cE_zxCp0I-okMzzTLdoYmEz8F8d9Qz7iIr_qvlkeLEcRqtkmjj-X0YQ23KpYOuU2HyunswxDbaYmg2uQJoSSIhvBMwzlY39uFc5HrEZ9msaqUDqEtku6RtK_UZyUCQYJgiLmmNlkaxnrCvdpnr2DC3RMnm2_KbkbKcoQ")},
      debug: true,
      id: '3dc359cc-9979-4d36-b1b1-ae24ec6a6ed1',
      supersetDomain: 'https://2282507e.us2a.app.preset.io',
      mountPoint: document.getElementById("dashboard-container"), // any html element that can contain an iframe
      dashboardUiConfig: { // dashboard UI config: hideTitle, hideChartControls, filters (all optional)
        hideTitle: false, // change it to `true` to hide the dashboard title
        hideChartControls: false, // change it to `true` to hide the chart controls (ellipses menu)
        filters: {
          expanded: true, // change it to `false` so that dashboard filters are collapsed (for vertical filter bar)
        },
      }
    });
  }

}
