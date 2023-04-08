import { type ObjectType, type TypeDeclaration } from '../../../model';
import { type TypeDeclarationRenderingContext } from '../../../renderSchema/TypeDeclarationRenderingContext';
import { type RenderedTypeDeclaration } from '../../RenderedTypeDeclaration';
import { renderObjectType } from '../type/renderObjectType';

/**
 * Renders a type declaration for an object type.
 * @param objectTypeDeclaration
 * @param context
 * @returns
 */
export function renderObjectTypeDeclaration(
    { declaration, type }: TypeDeclaration<ObjectType>,
    context: TypeDeclarationRenderingContext,
): RenderedTypeDeclaration {
    let typeDeclaration: string = '';

    if (context.options.exportStrategy === 'DEFAULT') typeDeclaration += 'export default ';
    if (context.options.exportStrategy === 'NAMED') typeDeclaration += 'export ';

    if (context.options.object.declaration.strategy === 'INTERFACE')
        typeDeclaration += 'interface ' + declaration.name + ' ' + renderObjectType(type, context);

    if (context.options.object.declaration.strategy === 'CLASS')
        typeDeclaration += 'class ' + declaration.name + ' ' + renderObjectType(type, context);

    if (context.options.object.declaration.strategy === 'TYPE')
        typeDeclaration += 'type ' + declaration.name + ' = ' + renderObjectType(type, context);

    if (context.options.scalar.declaration.endWithSemicolon) typeDeclaration += ';';

    return {
        name: declaration.name,
        references: [],
        subTypes: [],
        value: typeDeclaration,
    };
}
