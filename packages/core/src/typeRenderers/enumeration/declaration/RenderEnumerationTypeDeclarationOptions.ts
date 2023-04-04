import { type CommentStrategy } from '../../../commonRenderers/comment/CommentStrategy';
import { type TransformNameStrategy } from '../../../transformName/TransformNameStrategy';
import { type RenderEnumerationStrategy } from './RenderEnumerationStrategy';

/**
 * Options for rendering an enumeration type declaration.
 */
export interface RenderEnumerationTypeDeclarationOptions {
    commentStrategy?: CommentStrategy;
    endWithSemicolon?: boolean;
    nameStrategy?: TransformNameStrategy;

    strategy: RenderEnumerationStrategy;
}
