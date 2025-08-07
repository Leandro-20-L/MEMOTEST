import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  imports: [CommonModule,FormsModule],
  standalone: true,
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('1.2s ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.8s ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('pulse', [
      transition(':enter', [
        animate('1.5s ease-in-out', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.1)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class SplashScreenComponent {

  

}
