import { type ScalarType, type TypeScriptScalar } from '../../../model';
import { type Context } from '../../../renderSchema/Context';

const map: Record<TypeScriptScalar | 'NULL' | 'UNDEFINED', string> = Object.freeze({
    ['BOOLEAN']: 'boolean',
    ['NULL']: 'null',
    ['NUMBER']: 'number',
    ['STRING']: 'string',
    ['UNDEFINED']: 'undefined',
});

/**
 * Renders a scalar type.
 * @param scalarType {Object}
 * @param context
 * @returns
 */
export function renderScalarType(scalarType: ScalarType, _context: Context): string {
    return map[scalarType.type];
}
