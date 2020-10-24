import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   worklists = [ 'Resolved various UI and Functionality issues.',
                'Worked on user rights for many roles in Web Application',
                'Resolved Various Tasks in Product.',
                'Integrated Facebook API in Web based Application ',
                'Hosted many clients website with company domain using goDaddy.',
                'Proficient understanding of code versioning tools such as Git, SVN.',   
              ];

}
