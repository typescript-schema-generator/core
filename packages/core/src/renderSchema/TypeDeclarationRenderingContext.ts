import { type RenderSchemaOptions } from './RenderSchemaOptions';

export interface AnonymousType {
    name: string;
}

/**
 * Context of render one type declaration
 */
export interface TypeDeclarationRenderingContext {
    options: RenderSchemaOptions;
    currentIndentation: number;
    subTypes: AnonymousType[];
}
