import { type EnumerationType, type TypeDeclaration } from '../../../model';
import { type TypeDeclarationRenderingContext } from '../../../renderSchema/TypeDeclarationRenderingContext';
import { type RenderedTypeDeclaration } from '../../RenderedTypeDeclaration';
import { renderEnumerationType } from '../type/renderEnumerationType';

/**
 * Renders a type declaration for an enumeration type.
 * @param enumerationTypeDeclaration
 * @param context
 * @returns
 */
export function renderEnumerationTypeDeclaration(
    { declaration, type }: TypeDeclaration<EnumerationType>,
    context: TypeDeclarationRenderingContext,
): RenderedTypeDeclaration {
    return {
        name: declaration.name,
        references: [],
        subTypes: [],
        value: renderEnumerationType(type, context),
    };
}
