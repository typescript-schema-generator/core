import { type ReferenceType, type TypeDeclaration } from '../../../model';
import { type TypeDeclarationRenderingContext } from '../../../renderSchema/TypeDeclarationRenderingContext';
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
    context: TypeDeclarationRenderingContext,
): RenderedTypeDeclaration {
    return {
        name: declaration.name,
        references: [],
        subTypes: [],
        value: renderReferenceType(type, context),
    };
}
