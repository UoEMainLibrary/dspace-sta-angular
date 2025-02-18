import { Component } from '@angular/core';
import { NavbarComponent as BaseComponent } from '../../../../app/navbar/navbar.component';
import { slideMobileNav } from '../../../../app/shared/animations/slide';
import { TranslateModule } from '@ngx-translate/core';
import { RootModule } from '../../../../app/root.module';
import { SharedModule } from '../../../../app/shared/shared.module';
import { NgClass, NgIf, NgFor, NgComponentOutlet, AsyncPipe } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * Component representing the public navbar
 */
@Component({
    selector: 'ds-navbar',
    // styleUrls: ['./navbar.component.scss'],
    styleUrls: ['../../../../app/navbar/navbar.component.scss',
        './navbar.component.scss'],
    templateUrl: './navbar.component.html',
    // templateUrl: '../../../../app/navbar/navbar.component.html',
    animations: [slideMobileNav],
    standalone: true,
    imports: [NgbDropdownModule, NgClass, NgIf, SharedModule, NgFor, NgComponentOutlet, RootModule, AsyncPipe, TranslateModule]
})
export class NavbarComponent extends BaseComponent {
}
