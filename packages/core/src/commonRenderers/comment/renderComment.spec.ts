import { CommentStrategy } from './CommentStrategy';
import { renderComment } from './renderComment';

describe('renderComment', () => {
    const comment: string = 'hello world!';

    it('should render a separate line comment', () => {
        expect(
            renderComment(comment, {
                indentation: 0,
                maxLineLength: undefined,
                preferMultipleLines: undefined,
                strategy: CommentStrategy.separateLine,
            }),
        ).toEqual(`// ${comment}\n`);
    });

    it('should render a block comment in one line', () => {
        expect(
            renderComment(comment, {
                indentation: 0,
                maxLineLength: undefined,
                preferMultipleLines: undefined,
                strategy: CommentStrategy.block,
            }),
        ).toEqual(`/* ${comment} */\n`);
    });

    it('should render a block comment in multiple lines', () => {
        expect(
            renderComment(comment, {
                indentation: 0,
                maxLineLength: undefined,
                preferMultipleLines: true,
                strategy: CommentStrategy.block,
            }),
        ).toEqual(`/*\n${comment}\n */\n`);
    });

    it('should render a block comment in multiple lines with indentation', () => {
        expect(
            renderComment(comment, {
                indentation: 4,
                maxLineLength: undefined,
                preferMultipleLines: true,
                strategy: CommentStrategy.block,
            }),
        ).toEqual(`    /*\n    ${comment}\n     */\n`);
    });

    it('should render a js doc comment in one line', () => {
        expect(
            renderComment(comment, {
                indentation: 0,
                maxLineLength: undefined,
                preferMultipleLines: undefined,
                strategy: CommentStrategy.jsDoc,
            }),
        ).toEqual(`/** ${comment} */\n`);
    });

    it('should render a js doc comment in multiple lines', () => {
        expect(
            renderComment(comment, {
                indentation: 0,
                maxLineLength: undefined,
                preferMultipleLines: true,
                strategy: CommentStrategy.jsDoc,
            }),
        ).toEqual(`/**\n * ${comment}\n */\n`);
    });

    it('should render a js doc comment in multiple lines with indentation', () => {
        expect(
            renderComment(comment, {
                indentation: 4,
                maxLineLength: undefined,
                preferMultipleLines: true,
                strategy: CommentStrategy.jsDoc,
            }),
        ).toEqual(`    /**\n     * ${comment}\n     */\n`);
    });
});
