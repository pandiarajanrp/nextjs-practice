import { type NextRequest } from 'next/server.js';
import { headers, cookies } from 'next/headers';
import { comments } from '../data/mock';

const sendJson = (data: any, status?: number) => {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: {
      "content-type": "application/json",
      "set-cookie": "token=4545454"
    }
  })
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  //get query params from url
  const query = searchParams.get('query');
  //get headers
  const reqHeaders = headers();
  console.log('reqHeader :::', reqHeaders.get('authorization'))

  //get req cookies
  const reqCookie = request.cookies.get("token")
  const reqCk = cookies()
  console.log('reqCookie :::', reqCookie)
  console.log('reqCk :::', reqCk.get('token'))
  return sendJson(comments)
}


export async function POST(req: any) {
  const data = await req.json()
  comments.push(data);
  return sendJson({ status: true, message: 'Created Successfully' })
}