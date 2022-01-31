import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
  }

  classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('.Navbar__Link-toggle').addEventListener('click', this.onClick.bind(this));
  }
  
  onClick(event: any) {
    this.classToggle();
  }

}
