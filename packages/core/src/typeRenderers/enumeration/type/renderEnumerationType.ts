import { type EnumerationType } from '../../../model';
import { type Context } from '../../../renderSchema/Context';

/**
 * Renders an enumeration type.
 * @param enumerationType
 * @param context
 */
export function renderEnumerationType(enumerationType: EnumerationType, _context: Context): string {
    return enumerationType.kind;
}
