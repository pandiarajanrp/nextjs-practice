import { comments } from '../../data/mock';
import { redirect } from "next/navigation";

export async function GET(request: Request, context: any) {
    const { id } = context.params
    const comment = comments.find(item => item.id === id);
    if (!comment) {
        redirect('/comments/api')
    }
    console.log('***** comment', comment)
    return Response.json(comment);
}