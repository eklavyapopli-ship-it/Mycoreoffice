
export async function onRequestPost({ request, env }: any) {




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
const send = await fetch("/api/email",{
    method:"POST",

        headers: { "Content-Type": "application/json" , "apiKey":env.MAIN_KEY},
        body:JSON.stringify({
            name:body.name,
            email:body.email,
            phone:body.phone,
            queryType:body.queryType,
            message:body.message
        })
 
})


    return new Response(JSON.stringify({ ok: true ,message:"good"}), );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Failed to send email" }),
      { status: 500 }
    );
  }
}


