import { inject, async, TestBed, fakeAsync, tick } from '@angular/core/testing';
import {OperationService} from './operationService';
import {Operation} from '../domain/operation';
import {OperatorsEnum} from '../domain/operators';

describe('Operation Service', () => {

    let service:OperationService = new OperationService();

    it('should be able to add two numbers', () => {
        let operation: Operation = new Operation();
        operation.input1 = 1;
        operation.input2 = 1;
        operation.operationId = OperatorsEnum.addition;
        expect(service.runOperation(operation)).toEqual(2);
    });

    it('should be able to subtract two numbers', () => {
        let operation: Operation = new Operation();
        operation.input1 = 10;
        operation.input2 = 2;
        operation.operationId = OperatorsEnum.subtraction;
        expect(service.runOperation(operation)).toEqual(8);
    });

    it('should be able to multiply two numbers', () => {
        let operation: Operation = new Operation();
        operation.input1 = 2;
        operation.input2 = 2;
        operation.operationId = OperatorsEnum.multiplication;
        expect(service.runOperation(operation)).toEqual(4);
    });

    it('should be able to devide two numbers', () => {
        let operation: Operation = new Operation();
        operation.input1 = 15;
        operation.input2 = 5;
        operation.operationId = OperatorsEnum.division;
        expect(service.runOperation(operation)).toEqual(3);
    });

    it('should be able to square one number by another', () => {
        let operation: Operation = new Operation();
        operation.input1 = 16;
        operation.input2 = 4;
        operation.operationId = OperatorsEnum.squareBy;
        expect(service.runOperation(operation)).toEqual(2);
    });
});
