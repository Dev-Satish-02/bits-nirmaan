import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  cards = [
      { photo: 'images/team/Akshar.jpg', name: 'Akshar Pandey', title: 'President' },
      { photo: 'images/team/Samyek.jpg', name: 'Samyek Jain', title: 'Vice President' },
      { photo: 'images/team/Nishtha.jpg', name: 'Nishtha Khandelwal', title: 'Head of Human Resources' },
      { photo: 'images/team/Shreyansh.jpg', name: 'Shreyansh', title: 'Finance Head & Head of External Relations' },
      { photo: 'images/team/Shobhit.jpg', name: 'Shobhit Gautam', title: 'Head of Education Operations & Yuvaan Coordinator' },
      { photo: 'images/team/Bhoomika.jpg', name: 'Bhoomika Jain', title: 'Head of Education Development' },
      { photo: 'images/team/Shivika.jpg', name: 'Shivika', title: 'Women Empowerment Head' },
      { photo: 'images/team/Chinmay.jpg', name: 'Chinmay Mittal', title: 'Community Development Head' },
      { photo: 'images/team/Shlok.jpg', name: 'Shlok Jaiswal', title: 'Head of Public Relations' },
  ];
  events = [
      { photo: 'images/team/Dhananjay.jpg', name: 'Dhananjay Varun', title: 'JOGW Coordinator' },
      { photo: 'images/team/Rakshita.jpg', name: 'Rakshita Dave', title: 'JOGW Joint Coordinator' },
      { photo: 'images/team/Riddhi.jpg', name: 'Riddhi Beria', title: 'OASIS Coordinator' },
      { photo: 'images/team/Daman.jpg', name: 'Daman Garg', title: 'OASIS Joint Coordinator' },
      { photo: 'images/team/Shrey.jpg', name: 'Shrey Saxena', title: 'APOGEE Coordinator' },
      { photo: 'images/team/Manish.jpg', name: 'Manish Goyal', title: 'APOGEE Joint Coordinator' },
      { photo: 'images/team/Arnab.jpg', name: 'Arnab Marothia', title: 'BOSM Coordinator' },
      { photo: 'images/team/Rakshita.jpg', name: 'Rakshita Dave', title: 'BOSM Joint Coordinator' }  
  ]
}
