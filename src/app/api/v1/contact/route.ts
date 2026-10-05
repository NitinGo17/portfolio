import { NextResponse } from "next/server";
import { z } from "zod";

export const dynamic = "force-dynamic";

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(1).max(4000)
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: { code: "invalid_json", message: "Request body must be JSON." } },
      { status: 400 }
    );
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const field = parsed.error.issues[0]?.path?.[0];
    return NextResponse.json(
      { error: { code: "validation_failed", message: "Check the submitted fields.", field } },
      { status: 422 }
    );
  }

  // Persistence and email delivery are wired when the database and mail
  // provider are configured (see .env.example). Until then the endpoint
  // validates honestly rather than pretending to send.
  return NextResponse.json(
    { ok: true, received: { name: parsed.data.name } },
    { status: 201 }
  );
}
