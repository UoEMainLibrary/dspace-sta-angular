import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateLoaderMock } from '../../../../../shared/testing/translate-loader.mock';
import { MetadataValuesComponent } from '../../../../field-components/metadata-values/metadata-values.component';
import { mockItemWithMetadataFieldsAndValue } from '../item-page-field.component.spec';
import { MultiItemPageFieldComponent } from './multi-item-page-field.component';
import { APP_CONFIG } from '../../../../../../config/app-config.interface';
import { environment } from '../../../../../../environments/environment';
import { BrowseDefinitionDataService } from '../../../../../core/browse/browse-definition-data.service';
import { BrowseDefinitionDataServiceStub } from '../../../../../shared/testing/browse-definition-data-service.stub';

let comp: MultiItemPageFieldComponent;
let fixture: ComponentFixture<MultiItemPageFieldComponent>;

const mockValue = 'test value';
const mockField = 'dc.test';
const mockLabel = 'test label';
const mockFields = [mockField];

describe('MultiItemPageFieldComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateLoaderMock
        }
      })],
      providers: [
        { provide: APP_CONFIG, useValue: environment },
        { provide: BrowseDefinitionDataService, useValue: BrowseDefinitionDataServiceStub }
      ],
      declarations: [MultiItemPageFieldComponent, MetadataValuesComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).overrideComponent(MultiItemPageFieldComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(MultiItemPageFieldComponent);
    comp = fixture.componentInstance;
    comp.item = mockItemWithMetadataFieldsAndValue([mockField], mockValue);
    comp.fields = mockFields;
    comp.label = mockLabel;
    fixture.detectChanges();
  }));

  it('should display display the correct metadata value', () => {
    expect(fixture.nativeElement.innerHTML).toContain(mockValue);
  });
});
