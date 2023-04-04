import { type IntersectionType } from '../../../model';
import { type Context } from '../../../renderSchema/Context';

/**
 * Renders an intersection type.
 * @param intersectionType
 * @param context
 * @returns
 */
export function renderIntersectionType(intersectionType: IntersectionType, _context: Context): string {
    return intersectionType.kind;
}
