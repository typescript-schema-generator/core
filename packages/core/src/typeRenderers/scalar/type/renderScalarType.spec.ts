import { TypeKey } from '../../../model';
import { type Context } from '../../../renderSchema/Context';
import { renderScalarType } from './renderScalarType';

describe('renderScalarType', () => {
    const context: Context = {} as Context;

    it('should render a string type', () => {
        expect(renderScalarType({ kind: TypeKey.scalar, type: 'STRING' }, context)).toEqual('string');
    });

    it('should render a boolean type', () => {
        expect(renderScalarType({ kind: TypeKey.scalar, type: 'BOOLEAN' }, context)).toEqual('boolean');
    });

    it('should render a number type', () => {
        expect(renderScalarType({ kind: TypeKey.scalar, type: 'NUMBER' }, context)).toEqual('number');
    });

    it('should render a null type', () => {
        expect(renderScalarType({ kind: TypeKey.scalar, type: 'NULL' }, context)).toEqual('null');
    });

    it('should render a undefined type', () => {
        expect(renderScalarType({ kind: TypeKey.scalar, type: 'UNDEFINED' }, context)).toEqual('undefined');
    });
});
