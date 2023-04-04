import { type CommentStrategy } from '../../../commonRenderers/comment/CommentStrategy';
import { type TransformNameStrategy } from '../../../transformName/TransformNameStrategy';
import { type RenderObjectTypeDeclarationStrategy } from './RenderObjectTypeDeclarationStrategy';

/**
 * Options for rendering an object type declaration.
 */
export interface RenderObjectTypeDeclarationOptions {
    commentStrategy?: CommentStrategy;
    endWithSemicolon?: boolean;
    nameStrategy?: TransformNameStrategy;

    strategy: RenderObjectTypeDeclarationStrategy;
}
