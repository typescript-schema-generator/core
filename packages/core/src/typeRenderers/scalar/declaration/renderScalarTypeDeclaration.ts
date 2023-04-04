import { type ScalarType, type TypeDeclaration } from '../../../model';
import { type Context } from '../../../renderSchema/Context';
import { type RenderedTypeDeclaration } from '../../RenderedTypeDeclaration';
import { renderScalarType } from '../type/renderScalarType';

/**
 * Renders a type declaration for a scalar type.
 * @param scalarTypeDeclaration
 * @param context
 * @returns
 */
export function renderScalarTypeDeclaration({ declaration, type }: TypeDeclaration<ScalarType>, context: Context): RenderedTypeDeclaration {
    let typeDeclaration: string = '';

    typeDeclaration += 'type ' + declaration.name + ' = ' + renderScalarType(type, context);

    if (context.options.scalar.declaration.endWithSemicolon) typeDeclaration += ';';

    return {
        name: declaration.name,
        references: [],
        subTypes: [],
        value: typeDeclaration,
    };
}
