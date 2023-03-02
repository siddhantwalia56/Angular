import {  ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { DataService } from '../shared/data.service';

import { TestCompComponent } from './test-comp.component';
import { TestCompService } from './test-comp.service';

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

  it('check service',()=>{
    let fixture=TestBed.createComponent(TestCompComponent);
    let app=fixture.debugElement.componentInstance;
    let testservice=fixture.debugElement.injector.get(TestCompService);
    fixture.detectChanges();
    expect(testservice.user.name).toEqual(app.user.name)
  })

  it('should dispaly the user name if user is logged in',()=>{
    let fixture=TestBed.createComponent(TestCompComponent);
    let app=fixture.debugElement.componentInstance;
    app.isLoggedIn=true;
    fixture.detectChanges();
    let compiled= fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(app.user.name)
  })

  it('should not dispaly the user name if user is not logged in',()=>{
    let fixture=TestBed.createComponent(TestCompComponent);
    let app=fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let compiled= fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name)
  })

  it('should fetch data successfully if called asynchronously',fakeAsync(()=>{
    let fixture=TestBed.createComponent(TestCompComponent);
    let app=fixture.debugElement.componentInstance;
    let dataservice=fixture.debugElement.injector.get(DataService);
    let spy=spyOn(dataservice, 'getDetails')
    .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick();
      expect(app.data).toBe('Data');

  }));


})
