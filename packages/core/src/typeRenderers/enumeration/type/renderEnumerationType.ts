import { type EnumerationType } from '../../../model';
import { type TypeDeclarationRenderingContext } from '../../../renderSchema/TypeDeclarationRenderingContext';

/**
 * Renders an enumeration type.
 * @param enumerationType
 * @param context
 */
export function renderEnumerationType(enumerationType: EnumerationType, _context: TypeDeclarationRenderingContext): string {
    return enumerationType.kind;
}
