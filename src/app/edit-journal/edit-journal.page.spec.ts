import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJournalPage } from './edit-journal.page';

describe('EditJournalPage', () => {
  let component: EditJournalPage;
  let fixture: ComponentFixture<EditJournalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditJournalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJournalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
