import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Item } from '../../../../../../../app/core/shared/item.model';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { Context } from '../../../../../../../app/core/shared/context.model';

/**
 * Component that represents an untyped Item page for the STA theme
 */
@listableObjectComponent(Item, ViewMode.StandalonePage, Context.Any, 'sta')
@Component({
  selector: 'ds-sta-untyped-item',
  styleUrls: ['./sta-untyped-item.component.scss'],
  templateUrl: './sta-untyped-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaUntypedItemComponent {
  // Your component logic here
}