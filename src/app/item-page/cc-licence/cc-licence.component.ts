import { Component, Input } from '@angular/core';
import { Item } from 'src/app/core/shared/item.model';

@Component({
  selector: 'ds-cc-licence',
  templateUrl: './cc-licence.component.html',
  styleUrls: ['./cc-licence.component.scss']
})
  
export class CcLicenceComponent {

  @Input() item: Item;

  ccLicenceValue: string;

  ngOnInit(): void {

    this.ccLicenceValue = this.item.metadata['dc.rights']?.[0]?.value || 'No license available';

  }
}