import { Resend } from 'resend';
export async function onRequestPost({ request, env }: any) {
if (request.headers.get("content-length") > 1000) {
  return new Response(JSON.stringify({ message: "Details too large" }), { status: 413 });
}
if (!request.headers.get("content-type")?.includes("application/json")) {
    return new Response(JSON.stringify({ message: "Invalid content type" }), { status: 415 });
  }


const body = await request.json();

if (!body.name || body.name.length > 50) {
  return new Response(JSON.stringify({ message: "Name too long" }), { status: 400 });
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
  return new Response(JSON.stringify({ message: "Invalid email" }), { status: 400 });
}

if (body.message?.length > 200) {
  return new Response(JSON.stringify({ message: "Message too long" }), { status: 400 });
}
  try {

  } catch {
    return new Response(JSON.stringify({ message: "Invalid JSON body" }), { status: 400 });
  }

  const resend = new Resend(env.RESEND_API_KEY);
  try {
await resend.emails.send({
        to: env.TO_SEND,
        from: "onboarding@resend.dev",
        subject: `New Enquiry from ${body.name}`,
        html: `<p>Hey MyCoreOffice, You have a new enquiry</p></br>:
       <p> Name: ${body.name}</p>
       <p> Email: ${body.email}</p>
        <p>Phone:${body.phone}</p>
       <p> Query:${body.queryType}</p>
      <p>  Message: ${body.message}</p>
        `,
    })


    return new Response(JSON.stringify({ ok: true ,message:"good"}), );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Failed to send email" }),
      { status: 500 }
    );
  }
}



