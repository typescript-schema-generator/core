import { type ObjectType } from '../../../model';
import { type Context } from '../../../renderSchema/Context';

/**
 * Renders an object type.
 * @param objectType
 * @param context
 * @returns
 */
export function renderObjectType(objectType: ObjectType, _context: Context): string {
    return objectType.kind;
}
