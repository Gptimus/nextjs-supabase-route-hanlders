import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        persistSession: false,
      },
    }
  );
  const { data } = await supabase
    .from("todos")
    .select()
    .match({ is_completed: false });

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const { title } = await req.json();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        persistSession: false,
      },
    }
  );
  const { data } = await supabase.from("todos").insert({ title }).select();

  return NextResponse.json(data);
}

export async function PUT(req: Request) {
  const { id } = await req.json();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        persistSession: false,
      },
    }
  );
  const { data } = await supabase
    .from("todos")
    .update({ is_completed: true })
    .match({ id })
    .select();

  return NextResponse.json(data);
}
