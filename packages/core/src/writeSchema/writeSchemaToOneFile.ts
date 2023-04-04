import { existsSync, mkdirSync, rmdirSync, writeFileSync } from 'fs';
import { type WriteSchemaToOneFileOptions } from './WriteSchemaToOneFileOptions';

export function writeSchemaToOneFile({ outDirectory, schemaFile }: WriteSchemaToOneFileOptions): void {
    if (outDirectory.startsWith('/')) throw new Error('outDirectory cannot start with a slash.');
    if (schemaFile.name.includes('/')) throw new Error('outFile cannot contain a slash.');

    if (existsSync(outDirectory)) rmdirSync(outDirectory, { recursive: true });

    mkdirSync(outDirectory, { recursive: true });
    writeFileSync(`${outDirectory}/${schemaFile.name}.${schemaFile.extension}`, schemaFile.content);
}
