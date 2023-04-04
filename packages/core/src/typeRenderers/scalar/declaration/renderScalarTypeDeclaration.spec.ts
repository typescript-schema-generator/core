import { TypeKey, type ScalarType } from '../../../model';
import { type Context } from '../../../renderSchema/Context';
import { type RenderSchemaOptions } from '../../../renderSchema/RenderSchemaOptions';
import { renderScalarTypeDeclaration } from './renderScalarTypeDeclaration';

describe('renderScalarTypeDeclaration', () => {
    const context: Context = { options: { scalar: { declaration: {} } } as RenderSchemaOptions } as Context;
    const scalarType: ScalarType = { kind: TypeKey.scalar, type: 'STRING' };

    it('should render a scalar type declaration with semicolon at the end', () => {
        context.options.scalar.declaration.endWithSemicolon = true;
        expect(renderScalarTypeDeclaration({ declaration: { description: undefined, name: 'Uuid' }, type: scalarType }, context)).toEqual({
            name: 'Uuid',
            references: [],
            subTypes: [],
            value: 'type Uuid = string;',
        });
    });

    it('should render a scalar type declaration without semicolon at the end', () => {
        context.options.scalar.declaration.endWithSemicolon = false;
        expect(renderScalarTypeDeclaration({ declaration: { description: undefined, name: 'Uuid' }, type: scalarType }, context)).toEqual({
            name: 'Uuid',
            references: [],
            subTypes: [],
            value: 'type Uuid = string',
        });
    });
});
