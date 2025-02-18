import { Component } from '@angular/core';
import {
  FileDownloadLinkComponent as BaseComponent
} from '../../../../../app/shared/file-download-link/file-download-link.component';
import { NgClass, NgIf, NgTemplateOutlet, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'ds-file-download-link',
    // templateUrl: './file-download-link.component.html',
    templateUrl: '../../../../../app/shared/file-download-link/file-download-link.component.html',
    // styleUrls: ['./file-download-link.component.scss'],
    styleUrls: ['../../../../../app/shared/file-download-link/file-download-link.component.scss'],
    standalone: true,
    imports: [RouterLink, NgClass, NgIf, NgTemplateOutlet, AsyncPipe]
})
export class FileDownloadLinkComponent extends BaseComponent {
}
