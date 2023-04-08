import { type IntersectionType } from '../../../model';
import { type TypeDeclarationRenderingContext } from '../../../renderSchema/TypeDeclarationRenderingContext';

/**
 * Renders an intersection type.
 * @param intersectionType
 * @param context
 * @returns
 */
export function renderIntersectionType(intersectionType: IntersectionType, _context: TypeDeclarationRenderingContext): string {
    return intersectionType.kind;
}
