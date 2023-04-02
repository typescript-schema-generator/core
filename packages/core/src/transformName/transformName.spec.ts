import { transformName } from './transformName';
import { TransformNameStrategy } from './TransformNameStrategy';

describe('transformName', () => {
    const flatCaseHelloWorld: string = 'helloworld';
    const camelCaseHelloWorld: string = 'helloWorld';
    const pascalCaseHelloWorld: string = 'HelloWorld';
    const snakeCaseHelloWorld: string = 'hello_world';
    const screamingSnakeCaseHelloWorld: string = 'HELLO_WORLD';

    it('should transform camel case input', () => {
        expect(transformName(camelCaseHelloWorld, TransformNameStrategy.keep)).toEqual(camelCaseHelloWorld);
        expect(transformName(camelCaseHelloWorld, TransformNameStrategy.flatCase)).toEqual(flatCaseHelloWorld);
        expect(transformName(camelCaseHelloWorld, TransformNameStrategy.camelCase)).toEqual(camelCaseHelloWorld);
        expect(transformName(camelCaseHelloWorld, TransformNameStrategy.pascalCase)).toEqual(pascalCaseHelloWorld);
        expect(transformName(camelCaseHelloWorld, TransformNameStrategy.snakeCase)).toEqual(snakeCaseHelloWorld);
        expect(transformName(camelCaseHelloWorld, TransformNameStrategy.screamingSnakeCase)).toEqual(screamingSnakeCaseHelloWorld);
    });

    it('should transform pascal case input', () => {
        expect(transformName(pascalCaseHelloWorld, TransformNameStrategy.keep)).toEqual(pascalCaseHelloWorld);
        expect(transformName(pascalCaseHelloWorld, TransformNameStrategy.flatCase)).toEqual(flatCaseHelloWorld);
        expect(transformName(pascalCaseHelloWorld, TransformNameStrategy.camelCase)).toEqual(camelCaseHelloWorld);
        expect(transformName(pascalCaseHelloWorld, TransformNameStrategy.pascalCase)).toEqual(pascalCaseHelloWorld);
        expect(transformName(pascalCaseHelloWorld, TransformNameStrategy.snakeCase)).toEqual(snakeCaseHelloWorld);
        expect(transformName(pascalCaseHelloWorld, TransformNameStrategy.screamingSnakeCase)).toEqual(screamingSnakeCaseHelloWorld);
    });

    it('should transform snake case input', () => {
        expect(transformName(snakeCaseHelloWorld, TransformNameStrategy.keep)).toEqual(snakeCaseHelloWorld);
        expect(transformName(snakeCaseHelloWorld, TransformNameStrategy.flatCase)).toEqual(flatCaseHelloWorld);
        expect(transformName(snakeCaseHelloWorld, TransformNameStrategy.camelCase)).toEqual(camelCaseHelloWorld);
        expect(transformName(snakeCaseHelloWorld, TransformNameStrategy.pascalCase)).toEqual(pascalCaseHelloWorld);
        expect(transformName(snakeCaseHelloWorld, TransformNameStrategy.snakeCase)).toEqual(snakeCaseHelloWorld);
        expect(transformName(snakeCaseHelloWorld, TransformNameStrategy.screamingSnakeCase)).toEqual(screamingSnakeCaseHelloWorld);
    });

    it('should transform screaming snake case input', () => {
        expect(transformName(screamingSnakeCaseHelloWorld, TransformNameStrategy.keep)).toEqual(screamingSnakeCaseHelloWorld);
        expect(transformName(screamingSnakeCaseHelloWorld, TransformNameStrategy.flatCase)).toEqual(flatCaseHelloWorld);
        expect(transformName(screamingSnakeCaseHelloWorld, TransformNameStrategy.camelCase)).toEqual(camelCaseHelloWorld);
        expect(transformName(screamingSnakeCaseHelloWorld, TransformNameStrategy.pascalCase)).toEqual(pascalCaseHelloWorld);
        expect(transformName(screamingSnakeCaseHelloWorld, TransformNameStrategy.snakeCase)).toEqual(snakeCaseHelloWorld);
        expect(transformName(screamingSnakeCaseHelloWorld, TransformNameStrategy.screamingSnakeCase)).toEqual(screamingSnakeCaseHelloWorld);
    });
});
