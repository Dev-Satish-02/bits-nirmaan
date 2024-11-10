import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class EventsComponent {
  openIndex: number | null = null;

  toggleAccordion(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
  
  events = [
    {
      title: 'KADAM',
      description: `Around 150 students from four schools participated in track and field events like the 100-meter race, long jump, and shuttle race at the BITS Pilani Gym Grounds. Winners received medals, and all participants were given certificates.`,
      imageUrl:
        'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/KADAM.jpg',
    },
    {
      title: 'OASIS',
      description: `Various products like tote bags, scrunchies, cushions, etc.
                    were made by projects Swayamshakti and Pragati and had
                    a positive reception from the BITS community.
                    To engage visitors, food and games stall were also setup
                    with people going home taking various prizes.`,
      imageUrl:
        'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/oasis.jpg',
    },
    {
      title: 'SORAD',
      description: `Nirmaan’s annual fundraising event, Save One Rupee A Day
                    (SORAD), was held in February. Mess signings were conducted
                    in all the hostel messes. With over twenty-five volunteers
                    involved in the process, due to student community’s immense
                    support, this was one of most successful SORADs ever.`,
      imageUrl:
        'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/SORAD.jpg',
    },
    {
      title: 'APOGEE',
      description: 'The women empowerment stall showcased unique handcrafted products by Project Swayamshakti beneficiaries, including keychains, earrings, scrunchies, coasters, denim bags, and wall hangings, supporting local artisans. A food stall with group challenges added to the fests enjoyment.',
      imageUrl:
        'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/APOGEE.jpg',
    },
    {
      title: 'YUVAAN',
      description: `Yuvaan is an event held in remembrance of Swami
                    Vivekananda, focusing on youth empowerment. Nirmaan in
                    collaboration with Fitbits, successfully organized a run that
                    saw enthusiastic participation from various members of the
                    community.`,
      imageUrl:
        'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/YUVAAN.jpg',
    },
    {
      title: 'JOY OF GIVING WEEK',
      description: `Joy of Giving Week is Nirmaan’s initiative to unite BITSians in
                    the spirit of ‘giving’ and the joy that emanates from it, both for
                    the giver and the receiver. Nirmaan organized a series of
                    events over the course of a week (from February 19th, 2024, to
                    February 25th, 2024) to encourage people to share love and joy
                    with those around them.`,
      imageUrl:
        'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/JOGW.jpg',
    },
  ];
}
