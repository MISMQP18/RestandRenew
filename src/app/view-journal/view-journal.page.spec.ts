import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJournalPage } from './view-journal.page';

describe('ViewJournalPage', () => {
  let component: ViewJournalPage;
  let fixture: ComponentFixture<ViewJournalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewJournalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJournalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
