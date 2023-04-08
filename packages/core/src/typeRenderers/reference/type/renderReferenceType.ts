import { type ReferenceType } from '../../../model';
import { type TypeDeclarationRenderingContext } from '../../../renderSchema/TypeDeclarationRenderingContext';

/**
 * Renders a reference type.
 * @param referenceType
 * @param context
 * @returns
 */
export function renderReferenceType(referenceType: ReferenceType, _context: TypeDeclarationRenderingContext): string {
    return referenceType.name;
}
