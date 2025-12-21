import { Component } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { RouterLink } from "@angular/router";




@Component({
  selector: 'app-nav-bar',
  imports: [Toolbar, AvatarModule, ButtonModule, DrawerModule, RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
    visible: boolean = false;

}
