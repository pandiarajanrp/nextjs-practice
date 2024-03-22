import { comments } from '../../data/mock';

export async function GET(request: Request, context: any) {
    const { id } = context.params
    const comment = comments.find(item => item.id === id);
    console.log('***** comment', comment)
    return Response.json(comment);
}