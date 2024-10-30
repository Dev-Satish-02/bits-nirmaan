import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'School Adoption Program',
      content: `The School Adoption Program (SAP) is one of the six education
                projects in Nirmaan. SAP aims to improve the learning
                environment of government schools by providing resources,
                infrastructure upgrades, and to enhance the overall education
                standard. Our ultimate goal is to provide enough comprehensive
                support to the schools so that they can eventually become selfreliant and sustain the improvements on their own.
                `,
      imageUrl:
        'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/SAP.jpg',
    },
    {
      title: 'Utkarsh',
      content: `Utkarsh is another project under the education domain.
                Volunteers identify and support underprivileged students with
                exceptional academic potential who are forced to discontinue
                their education due to financial constraints. We seek
                scholarships for these students by raising funds from faculty
                on campus. Additionally, we collaborate with other projects
                that encounter such children during their operations.`,
      imageUrl:
        'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/udaan.jpeg',
    },
    {
      title: 'Disha',
      content: `The Disha program is an educational initiative aimed at career
                counseling. It seeks to educate the students of grade 9 of the
                school Hemant Academy about long-term goals including
                career.`,
      imageUrl:
        'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/DIsha.jpg',
    },
    {
      title: 'Shiksha Ki Ore',
      content: `Shiksha Ki Ore (SKO) is another education project of Nirmaan,
                intending to offer quality education to children residing in
                rural areas, foster community development, and prevent child
                marriage. Its endeavors are presently channeled into ensuring
                access to education for the children of Natt Basti, a settlement
                2-3 km away from the BITS Pilani campus that the
                organization has adopted. It also focuses on helping the
                residents live a healthy, happy childhood.`,
      imageUrl:
        'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/SKO.jpg',
    },
    {
      title: 'Gyan Bodh Baas',
      content: `Gyan Bodh baas (GB baas) is another project of Nirmaan that
                aims to revamp the standard of education. At present GB bass
                is focused on improving education systems and providing
                access to quality education and expanding access to learning
                opportunities, especially in underserved areas.`,
      imageUrl:
        'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/GB.jpg',
    },
    {
      title: 'Pilani Ki Paathshala',
      content: `Pilani ki Pathshala (PKP) is another project under the
                education domain of Nirmaan. Volunteers functions as
                mentors and tutors to the children of the Mungda basti that
                the project has adopted. The primary goal is to foster the
                educational growth of the children who benefited from this
                project. Volunteers also strived to bond with the children,
                encouraging them to share both academic and non-academic
                problems they faced in their day-to-day lives.`,
      imageUrl:
        'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/PKP.jpg',
    },
    {
      title: 'Unnati',
      content: `Unnati is a project under the Nirmaan dedicated to
                empowering women. Our mission is to guide beneficiaries in
                establishing sustainable businesses through skill development,
                mentorship, and resource access. Women acquire skills like
                stitching and jewelry making, creating products such as jute
                handbags, bracelets, and organic Holi colors. Unnati stands as
                a beacon of hope, fostering a society where women are strong
                and self-reliant.`,
      imageUrl:
        'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/unnati.jpeg',
    },
    {
      title: 'Swayamshakti',
      content: `Swayamshakti is a project under the Women Empowerment
                domain of Nirmaan. The group of volunteers helps rural
                women from Pilani and surrounding areas acquire skills such
                as stitching, weaving, and embroidery. They create products
                like scrunchies, cushions, and tote bags, which are sold at
                college fest stalls. The goal is to empower these women to
                become independent and contribute to their families'
                incomes.`,
      imageUrl:
        'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/swayamshakti.jpg',
    },
    {
      title: 'Pragati',
      content: `Pragati is a project based on the VTC model under the domain
                of Women Empowerment with the goal of instilling selfconfidence and independence In women in rural India by
                equipping them with the knowledge and means to pursue a
                profession. Interactive training sessions are organized by the
                team and focused on teaching and developing beneficiaries'
                embroidery skills, painting skills and many more to making
                salable products and help them to generate revenue.`,
      imageUrl:
        'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/Pragati.jpg',
    },
    {
      title: 'Participatory Community Development',
      content: `The Participatory Community Development project of Nirmaan
                works with the residents of bastis in and around Pilani to
                improve their quality of life and equip them with basic day-today necessities. This seeks to engage local populations in
                development projects in order to make the projects more
                sustainable and successful.`,
      imageUrl:
        'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/PCD.jpg',
    },
    {
      title: 'Udaan',
      content: `Project Udaan is aimed at youth empowerment by finding
                possible employment opportunities and providing upskilling
                courses to beneficiaries, thus enabling them to pursue careers
                in various fields of their choice.`,
      imageUrl:
        'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/udaan.jpeg',
    },
  ];

  openIndex: number | null = null;

  toggleAccordion(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
