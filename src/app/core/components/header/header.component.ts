import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navLinks = [
    {
      path: '/collections',
      label: 'Collections'
    },
    {
      path: '/men',
      label: 'Men'
    },
    {
      path: '/women',
      label: 'Women'
    },
    {
      path: '/about',
      label: 'About'
    },
    {
      path: '/contact',
      label: 'Contact'
    }
  ]
}
