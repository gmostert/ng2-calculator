import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import {Operation} from '../domain/operation';
import {OperatorsEnum, Operators} from '../domain/operators';
import {OperationService} from '../services/operationService';

/**
 * This component shows a breadcrumb trail for available routes the router can navigate to.
 * It subscribes to the router in order to update the breadcrumb trail as you navigate to a component.
 */
@Component({
    selector: 'calculator',
    templateUrl: 'calculator.html',
    styleUrls: ['calculator.css']
})
export class CalculatorComponent {
    public group:FormGroup;
    public operation:Operation;
    public operators = Operators.operatorList;

    constructor(private formBuilder:FormBuilder, private operationService:OperationService) { 
	}

    ngOnInit() {
        this.operation = new Operation();
		this.createFormControls();
    }

    /**
     * Show the mathimatical symbol for the specified operation id
     */
    public getOperatorSign(operatorId:number):string {
        return operatorId ? Operators.operatorList.filter(o => o.id == operatorId)[0].sign : '';
    }

    /**
     * Call the OperationService to perfrom teh calculation
     */
    public runOperation(operation:Operation):void {
        operation.result = this.operationService.runOperation(operation);
    }

    /**
     * Use the FormBuilder to create the form controls and add their validators
     */
    private createFormControls():void {
		this.group = this.formBuilder.group({
            'input1': [this.operation.input1, Validators.compose([Validators.required, Validators.pattern('^[0-9]+[.]?[0-9]*$')])], //validate decimal numbers
            'input2': [this.operation.input2, Validators.compose([Validators.required, Validators.pattern('^[0-9]+[.]?[0-9]*$')])], //validate decimal numbers
			'operation': [this.operation.operationId, Validators.required]
		});

        //clear out the result once anything changes
        this.group.controls['input1'].valueChanges.subscribe((val:string) => this.operation.result = undefined);
        this.group.controls['input2'].valueChanges.subscribe((val:string) => this.operation.result = undefined);
        this.group.controls['operation'].valueChanges.subscribe((val:string) => this.operation.result = undefined);
	}

}
