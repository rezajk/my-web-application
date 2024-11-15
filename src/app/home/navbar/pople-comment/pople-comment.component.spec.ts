import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopleCommentComponent } from './pople-comment.component';

describe('PopleCommentComponent', () => {
  let component: PopleCommentComponent;
  let fixture: ComponentFixture<PopleCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopleCommentComponent]
    });
    fixture = TestBed.createComponent(PopleCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
