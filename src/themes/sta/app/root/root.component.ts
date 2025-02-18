import { Component } from '@angular/core';
import { slideSidebarPadding } from '../../../../app/shared/animations/slide';
import { RootComponent as BaseComponent } from '../../../../app/root/root.component';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../app/shared/shared.module';
import { NgIf, AsyncPipe } from '@angular/common';
import { SystemWideAlertModule } from '../../../../app/system-wide-alert/system-wide-alert.module';
import { RootModule } from '../../../../app/root.module';

@Component({
    selector: 'ds-root',
    // styleUrls: ['./root.component.scss'],
    styleUrls: ['../../../../app/root/root.component.scss'],
    // templateUrl: './root.component.html',
    templateUrl: '../../../../app/root/root.component.html',
    animations: [slideSidebarPadding],
    standalone: true,
    imports: [RootModule, SystemWideAlertModule, NgIf, SharedModule, RouterOutlet, AsyncPipe]
})
export class RootComponent extends BaseComponent {

}
