import { Component } from '@angular/core';
import {
  async,
  inject,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CalculatorComponent } from './calculator';
import { OperationService } from '../services/operationService';
import { OperatorsEnum } from '../domain/operators';
import { Operation } from '../domain/operation';

describe('Calculator Component', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule],
            declarations: [CalculatorComponent],
            providers: [FormBuilder, OperationService]
        });
    });

    it('should compile',
        async(() => {
        TestBed
            .compileComponents()
            .then(() => {
                let fixture = TestBed.createComponent(CalculatorComponent);
                let template = fixture.debugElement.nativeElement;

                expect(template.querySelectorAll('h1')[0].textContent).toEqual('Calculator');
            });
        }));

    it('should create a FormGroup containing the "input1", "input2", "operation" FormControls',
        async(() => {
        TestBed
            .compileComponents()
            .then(() => {
                let fixture = TestBed.createComponent(CalculatorComponent);
                let component = fixture.debugElement.componentInstance;
                component.ngOnInit();
                
                expect(component.group instanceof FormGroup).toBe(true);
                expect(component.group.contains('input1')).toBe(true);
                expect(component.group.contains('input2')).toBe(true);
                expect(component.group.contains('operation')).toBe(true);
            });
        }));

    it('should validate the input controls',
        async(() => {
        TestBed
            .compileComponents()
            .then(() => {
                let fixture = TestBed.createComponent(CalculatorComponent);
                let component = fixture.debugElement.componentInstance;
                component.ngOnInit();
                
                component.group.controls['input1'].setValue('10');
                component.group.controls['input2'].setValue('10');
                component.group.controls['operation'].setValue('1');
                
                expect(component.group.controls['input1'].valid).toBe(true);
                expect(component.group.controls['input2'].valid).toBe(true);
                expect(component.group.controls['operation'].valid).toBe(true);
                expect(component.group.valid).toBe(true);

                component.group.controls['input1'].setValue('abc');
                component.group.controls['input2'].setValue('abc');

                expect(component.group.controls['input1'].valid).toBe(false);
                expect(component.group.controls['input2'].valid).toBe(false);
                expect(component.group.valid).toBe(false);
            });
        }));

    it('should get the operator sign for and operator id',
        async(() => {
        TestBed
            .compileComponents()
            .then(() => {
                let fixture = TestBed.createComponent(CalculatorComponent);
                let component = fixture.debugElement.componentInstance;
                
                expect(component.getOperatorSign(OperatorsEnum.addition)).toBe('+');
                expect(component.getOperatorSign(OperatorsEnum.subtraction)).toBe('-');
                expect(component.getOperatorSign(OperatorsEnum.multiplication)).toBe('*');
                expect(component.getOperatorSign(OperatorsEnum.division)).toBe('/');
                expect(component.getOperatorSign(OperatorsEnum.squareBy)).toBe('^');
            });
        }));

    it('should calculate the result when an operation is run',
        async(() => {
        TestBed
            .compileComponents()
            .then(() => {
                let fixture = TestBed.createComponent(CalculatorComponent);
                let component = fixture.debugElement.componentInstance;
                component.ngOnInit();
                component.operation.input1 = 1;
                component.operation.input2 = 1;
                component.operation.operationId = OperatorsEnum.addition;
                component.runOperation(component.operation);
                
                expect(component.operation.result).toBe(2);
            });
        }));

    it('should clear the result when the input control value changes',
        async(() => {
        TestBed
            .compileComponents()
            .then(() => {
                let fixture = TestBed.createComponent(CalculatorComponent);
                let component = fixture.debugElement.componentInstance;
                component.ngOnInit();
                component.operation.input1 = 1;
                component.operation.input2 = 1;
                component.operation.operationId = OperatorsEnum.addition;
                component.runOperation(component.operation);
                
                expect(component.operation.result).toBe(2);

                component.group.controls['input1'].setValue('10');

                expect(component.operation.result).toBe(undefined);
            });
        }));
});