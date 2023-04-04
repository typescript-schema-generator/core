import { type RenderSchemaOptions } from './RenderSchemaOptions';

/**
 * Context of render one type declaration
 */
export interface Context {
    options: RenderSchemaOptions;
    currentIndentation: number;
}
