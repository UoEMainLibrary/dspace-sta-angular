import { Component, Input } from '@angular/core';

import { MetadataValuesComponent } from '../metadata-values/metadata-values.component';
import { MetadataValue } from '../../../core/shared/metadata.models';

/**
 * This component renders the configured 'values' into the ds-metadata-field-wrapper component as a link without a label.
 * It puts the given 'separator' between each two values
 * and creates an 'a' tag for each value,
 * using the 'linktext' as it's value (if it exists)
 * and using the values as the 'href' attribute (and as value of the tag when no 'linktext' is defined)
 */
@Component({
  selector: 'ds-metadata-uri-values-labelless',
  styleUrls: ['./metadata-uri-values-labelless.component.scss'],
  templateUrl: './metadata-uri-values-labelless.component.html'
})
export class MetadataUriValuesLabellessComponent extends MetadataValuesComponent {

  /**
   * Optional text to replace the links with
   * If undefined, the metadata value (uri) is displayed
   */
  @Input() linktext: any;

  /**
   * The metadata values to display
   */
  @Input() mdValues: MetadataValue[];

  /**
   * The seperator used to split the metadata values (can contain HTML)
   */
  @Input() separator: string;

}
