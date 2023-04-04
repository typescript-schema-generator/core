import { existsSync, mkdirSync, rmdirSync, writeFileSync } from 'fs';
import { type FileDescription } from './FileDescription';
import { type WriteSchemaToMultipleFilesOptions } from './WriteSchemaToMultipleFilesOptions';

export function writeSchemaToMultipleFiles({ exportFile, outDirectory, schemaFiles }: WriteSchemaToMultipleFilesOptions): void {
    if (outDirectory.startsWith('/')) throw new Error('outDirectory cannot start with a slash.');

    if (existsSync(outDirectory)) rmdirSync(outDirectory, { recursive: true });

    mkdirSync(outDirectory, { recursive: true });

    schemaFiles.forEach((schemaFile: FileDescription) => {
        writeFileSync(`${outDirectory}/${schemaFile.name}.${schemaFile.extension}`, schemaFile.content);
    });

    if (exportFile) writeFileSync(`${outDirectory}/${exportFile.name}.${exportFile.extension}`, '// soon to come\n');
}
