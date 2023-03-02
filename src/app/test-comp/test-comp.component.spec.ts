import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompComponent } from './test-comp.component';

describe('Component: test-comp',()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[TestCompComponent]
    });
  })

  it('should create component app',()=>{
    let fixture=TestBed.createComponent(TestCompComponent);
    let app=fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })
})
