import { type CommentStrategy } from '../../../commonRenderers/comment/CommentStrategy';
import { renderComment } from '../../../commonRenderers/comment/renderComment';
import { type ArrayType, type TypeDeclaration } from '../../../model';
import { type Context } from '../../../renderSchema/Context';
import { transformName } from '../../../transformName/transformName';
import { type RenderedTypeDeclaration } from '../../RenderedTypeDeclaration';
import { renderArrayType } from '../type/renderArrayType';

/**
 * Renders a type declaration for an array type.
 * @param arrayTypeDeclaration
 * @param context
 * @returns
 */
export function renderArrayTypeDeclaration({ declaration, type }: TypeDeclaration<ArrayType>, context: Context): RenderedTypeDeclaration {
    let renderedArrayTypeDeclaration: string = '';

    if (declaration.description) {
        const arrayTypeDeclarationCommentStrategy: CommentStrategy | undefined = context.options.array.declaration.commentStrategy;

        const comment: string = renderComment(declaration.description, {
            indentation: context.currentIndentation,
            strategy: arrayTypeDeclarationCommentStrategy ?? context.options.typeDeclaration.commentStrategy,
        });

        renderedArrayTypeDeclaration += comment;
    }

    const name: string = transformName(
        declaration.name,
        context.options.array.declaration.nameStrategy ?? context.options.typeDeclaration.preferredNameStrategy,
    );

    renderedArrayTypeDeclaration += name;

    const renderedArrayType: string = renderArrayType(type, context);

    renderedArrayTypeDeclaration += renderedArrayType;

    return {
        name: name,
        references: [],
        subTypes: [],
        value: renderedArrayTypeDeclaration,
    };
}
