import { type ReferenceType, type TypeDeclaration } from '../../../model';
import { type Context } from '../../../renderSchema/Context';
import { type RenderedTypeDeclaration } from '../../RenderedTypeDeclaration';
import { renderReferenceType } from '../type/renderReferenceType';

/**
 * Renders a type declaration for a reference type.
 * @param referenceTypeDeclaration
 * @param context
 * @returns
 */
export function renderReferenceTypeDeclaration(
    { declaration, type }: TypeDeclaration<ReferenceType>,
    context: Context,
): RenderedTypeDeclaration {
    return {
        name: declaration.name,
        references: [],
        subTypes: [],
        value: renderReferenceType(type, context),
    };
}
