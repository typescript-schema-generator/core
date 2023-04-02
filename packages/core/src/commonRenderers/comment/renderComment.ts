import { CommentStrategy } from './CommentStrategy';

/**
 *
 */
export interface RenderCommentOptions {
    /**
     *
     */
    strategy: CommentStrategy;
    /**
     *
     */
    indentation: number;
    /**
     *
     */
    maxLineLength?: number;
    /**
     *
     */
    preferMultipleLines?: boolean;
}

const map: Record<CommentStrategy, (comment: string, options: RenderCommentOptions) => string> = Object.freeze({
    [CommentStrategy.separateLine]: renderSeparateLineComment,
    [CommentStrategy.block]: renderBlockComment,
    [CommentStrategy.jsDoc]: renderJsDocComment,
    [CommentStrategy.none]: () => '',
});

function renderSeparateLineComment(comment: string, { indentation }: RenderCommentOptions): string {
    return ' '.repeat(indentation) + '// ' + comment + '\n';
}

function renderBlockComment(comment: string, { indentation, preferMultipleLines }: RenderCommentOptions): string {
    if (preferMultipleLines)
        return ' '.repeat(indentation) + '/*\n' + ' '.repeat(indentation) + comment + '\n' + ' '.repeat(indentation) + ' */\n';

    return ' '.repeat(indentation) + '/* ' + comment + ' */\n';
}

function renderJsDocComment(comment: string, { indentation, preferMultipleLines }: RenderCommentOptions): string {
    if (preferMultipleLines)
        return ' '.repeat(indentation) + '/**\n' + ' '.repeat(indentation) + ' * ' + comment + '\n' + ' '.repeat(indentation) + ' */\n';

    return ' '.repeat(indentation) + '/** ' + comment + ' */\n';
}

/**
 *
 * @param comment
 * @param options
 * @returns
 */
export function renderComment(comment: string, options: RenderCommentOptions): string {
    return map[options.strategy](comment, options);
}
