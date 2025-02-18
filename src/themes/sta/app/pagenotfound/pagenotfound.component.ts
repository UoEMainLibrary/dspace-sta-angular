import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageNotFoundComponent as BaseComponent } from '../../../../app/pagenotfound/pagenotfound.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'ds-pagenotfound',
    // styleUrls: ['./pagenotfound.component.scss'],
    styleUrls: ['../../../../app/pagenotfound/pagenotfound.component.scss'],
    // templateUrl: './pagenotfound.component.html'
    templateUrl: '../../../../app/pagenotfound/pagenotfound.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
    standalone: true,
    imports: [RouterLink, TranslateModule]
})

/**
 * This component representing the `PageNotFound` DSpace page.
 */
export class PageNotFoundComponent extends BaseComponent {}

