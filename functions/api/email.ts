import { QodeMLClient } from "email-sdk";
export async function onRequestPost({ request, env }: any) {


  const client = new QodeMLClient({
    host: "smtp.gmail.com",
    port: 587, 
    method: "PLAIN",
    username: env.EMAIL_FROM,
    password: env.PASS,
    useSsl: true,
    apiKey: env.QODEML_API,
}); 


  if (!request.headers.get("content-type")?.includes("application/json")) {
    return new Response(JSON.stringify({ message: "Invalid content type" }), { status: 415 });
  }

const body = await request.json();

if (!body.name || body.name.length > 100) {
  return new Response(JSON.stringify({ message: "Invalid name" }), { status: 400 });
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
  return new Response(JSON.stringify({ message: "Invalid email" }), { status: 400 });
}

if (body.message?.length > 1000) {
  return new Response(JSON.stringify({ message: "Message too long" }), { status: 400 });
}
  try {

  } catch {
    return new Response(JSON.stringify({ message: "Invalid JSON body" }), { status: 400 });
  }


  try {
await client.sendMail({
        to: env.TO_SEND,
        from: "New Enquiry",
        subject: "New Enquiry",
        body: `Hey MyCoreOffice, You have a new enquiry:
        Name: ${body.name}
        Email: ${body.email}
        Phone:${body.phone}
        Query:${body.queryType}
        Message: ${body.message}
        `,
      isHtml: false,
    })


    return new Response(JSON.stringify({ ok: true ,message:"good"}), );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Failed to send email" }),
      { status: 500 }
    );
  }
}


