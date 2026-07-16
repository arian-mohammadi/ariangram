import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
]
})
export class ProjectsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
