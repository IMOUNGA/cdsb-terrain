import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonContent} from '@ionic/angular/standalone';

@Component({
  selector: 'app-alertes-page',
  templateUrl: './alertes.page.html',
  styleUrls: ['./alertes.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule]
})
export class AlertesPage {

}
