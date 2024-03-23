import { type NextRequest } from 'next/server.js';
import { headers } from 'next/headers';
import { comments } from '../data/mock';

const sendJson = (data: any, status?: number) => {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: {
      "content-type": "application/json"
    }
  })
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  //get query params from url
  const query = searchParams.get('query');
  //get headers
  const reqHeaders = headers();
  console.log('**** reqHeader', reqHeaders.get('authorization'))
  return sendJson(comments)
}


export async function POST(req: any) {
  const data = await req.json()
  comments.push(data);
  return sendJson({ status: true, message: 'Created Successfully' })
}