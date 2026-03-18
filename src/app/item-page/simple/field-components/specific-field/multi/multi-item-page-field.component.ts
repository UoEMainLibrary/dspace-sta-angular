import { Component, Input } from '@angular/core';

import { Item } from '../../../../../core/shared/item.model';
import { ItemPageFieldComponent } from '../item-page-field.component';
import { MetadataValue } from 'src/app/core/shared/metadata.models';
import { MetadataValuesComponent } from "src/app/item-page/field-components/metadata-values/metadata-values.component";
// import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MetadataUriValuesLabellessComponent } from 'src/app/item-page/field-components/metadata-uri-values-labelless/metadata-uri-values-labelless.component';

@Component({
  selector: 'ds-multi-item-page-field',
  templateUrl: './multi-item-page-field.component.html',
  imports: [MetadataValuesComponent, CommonModule, MetadataUriValuesLabellessComponent ],
  standalone: true,
})
/**
 * This component can be used to represent metadata and an uri on a simple item page.
 * It is the most multi way of displaying metadata values
 * It expects 5 parameters: The item, a separator, the metadata keys or both the text and uri, and an i18n key
 */
export class MultiItemPageFieldComponent extends ItemPageFieldComponent {

  /**
   * The item to display metadata for
   */
  @Input() item: Item;

  /**
   * Separator string between multiple values of the metadata fields defined
   * @type {string}
   */
  @Input() separator: string;

  /**
   * Fields (schema.element.qualifier) used to render their values.
   */
  @Input() fields: string[];

  /**
   * URI Fields (schema.element.qualifier) used to render their values.
   */
  @Input() uriFields: string[];

  /**
   * Label i18n key for the rendered metadata
   */
  @Input() label: string;

  /**
   * Whether the {@link MarkdownPipe} should be used to render this metadata.
   */
  @Input() enableMarkdown = false;

  /**
   * Whether any valid HTTP(S) URL should be rendered as a link
   */
  @Input() urlRegex?: string;

  /**
   * Optional text to replace the links with
   * If undefined, the metadata value (uri) is displayed
   */
  @Input() linktext: any;

  /**
   * The metadata values to display
   */
  @Input() mdValues: MetadataValue[];


}
