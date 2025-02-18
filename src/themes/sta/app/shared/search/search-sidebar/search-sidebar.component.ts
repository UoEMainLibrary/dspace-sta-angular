/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE_ATMIRE and NOTICE_ATMIRE files at the root of the source
 * tree and available online at
 *
 * https://www.atmire.com/software-license/
 */
import { Component } from '@angular/core';
import {
  SearchSidebarComponent as BaseComponent,
} from '../../../../../../app/shared/search/search-sidebar/search-sidebar.component';
import { SEARCH_CONFIG_SERVICE } from '../../../../../../app/my-dspace-page/my-dspace-page.component';
import { SearchConfigurationService } from '../../../../../../app/core/shared/search/search-configuration.service';
import { TranslateModule } from '@ngx-translate/core';
import { SearchModule } from '../../../../../../app/shared/search/search.module';
import { SharedModule } from '../../../../../../app/shared/shared.module';
import { NgIf } from '@angular/common';


@Component({
    selector: 'ds-search-sidebar',
    // styleUrls: ['./search-sidebar.component.scss'],
    styleUrls: ['../../../../../../app/shared/search/search-sidebar/search-sidebar.component.scss'],
    // templateUrl: './search-sidebar.component.html',
    templateUrl: '../../../../../../app/shared/search/search-sidebar/search-sidebar.component.html',
    providers: [
        {
            provide: SEARCH_CONFIG_SERVICE,
            useClass: SearchConfigurationService
        }
    ],
    standalone: true,
    imports: [NgIf, SharedModule, SearchModule, TranslateModule]
})

export class SearchSidebarComponent extends BaseComponent {
}
