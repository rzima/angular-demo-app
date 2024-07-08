import { Component } from "@angular/core";
import { NavComponent } from "../nav/nav.component";
import { HeaderComponent } from "../header/header.component";
import { NotificationComponent } from "../notification/notification.component";

@Component({
    selector: 'app-container',
    standalone: true,
    imports: [NavComponent, HeaderComponent, NotificationComponent],
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})

export class ContainerComponent{

}