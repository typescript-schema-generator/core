/**
 *
 */
export enum TransformNameStrategy {
    /**
     * Keeps the name as provided
     */
    keep = 'KEEP',
    /**
     * helloworld
     */
    flatCase = 'FLAT_CASE',
    /**
     * helloWorld
     */
    camelCase = 'CAMEL_CASE',
    /**
     * HelloWorld
     */
    pascalCase = 'PASCAL_CASE',
    /**
     * hello_world
     */
    snakeCase = 'SNAKE_CASE',
    /**
     * HELLO_WORLD
     */
    screamingSnakeCase = 'SCREAMING_SNAKE_CASE',
}
