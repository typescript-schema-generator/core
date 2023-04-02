import { camelCase, pascalCase, snakeCase } from 'change-case';
import { TransformNameStrategy } from './TransformNameStrategy';

const transformNameStrategyRecord: Record<TransformNameStrategy, (name: string) => string> = Object.freeze({
    [TransformNameStrategy.keep]: (name: string) => name,
    [TransformNameStrategy.flatCase]: (name: string) => name.toLocaleLowerCase().replace('_', '').replace('-', ''),
    [TransformNameStrategy.camelCase]: (name: string) => camelCase(name),
    [TransformNameStrategy.pascalCase]: (name: string) => pascalCase(name),
    [TransformNameStrategy.snakeCase]: (name: string) => snakeCase(name),
    [TransformNameStrategy.screamingSnakeCase]: (name: string) => snakeCase(name).toUpperCase(),
});

/**
 *
 * @param name
 * @param strategy
 * @returns
 */
export function transformName(name: string, strategy: TransformNameStrategy): string {
    return transformNameStrategyRecord[strategy](name);
}
