import { type ReferenceType } from '../../../model';
import { type Context } from '../../../renderSchema/Context';

/**
 * Renders a reference type.
 * @param referenceType
 * @param context
 * @returns
 */
export function renderReferenceType(referenceType: ReferenceType, _context: Context): string {
    return referenceType.kind;
}
