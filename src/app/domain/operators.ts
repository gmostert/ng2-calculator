/**
 * This enum contains the id for all available operations
 */
export enum OperatorsEnum {
    addition = 1 ,
    subtraction = 2,
    multiplication = 3,
    division = 4,
    squareBy = 5
}

/**
 * This is a list of all the available operations and their display names.
 */
export class Operators {
    static operatorList: Array<any> = [
        {'id': OperatorsEnum.addition, 'name': 'Addition', sign: '+'},
        {'id': OperatorsEnum.subtraction, 'name': 'Subtraction', sign: '-'},
        {'id': OperatorsEnum.multiplication, 'name': 'Multiplication', sign: '*'},
        {'id': OperatorsEnum.division, 'name': 'Division', sign: '/'},
        {'id': OperatorsEnum.squareBy, 'name': 'Square by N', sign: '^'}
    ];
}
