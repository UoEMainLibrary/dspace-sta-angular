import { Component } from '@angular/core';
import { renderStartsWithFor, StartsWithType } from '../../../../../../app/shared/starts-with/starts-with-decorator';
import {
  StartsWithDateComponent as BaseComponent
} from '../../../../../../app/shared/starts-with/date/starts-with-date.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'ds-starts-with-date',
    // styleUrls: ['./starts-with-date.component.scss'],
    styleUrls: ['../../../../../../app/shared/starts-with/date/starts-with-date.component.scss'],
    // templateUrl: './starts-with-date.component.html',
    templateUrl: '../../../../../../app/shared/starts-with/date/starts-with-date.component.html',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgFor, TranslateModule]
})
@renderStartsWithFor(StartsWithType.date)
export class StartsWithDateComponent extends BaseComponent {
}
