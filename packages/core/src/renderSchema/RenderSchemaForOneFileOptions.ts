import { type FileDescription } from '../writeSchema/FileDescription';

/**
 * Options for rendering a schema for one file.
 */
export interface RenderSchemaForOneFileOptions {
    schemaFile: FileDescription;
    outDirectory: string;
}
