import { NextResponse } from "next/server";
import { fetchProductById } from "@/lib/services/productService";

export async function GET(_request, { params }) {
  const product = await fetchProductById(params.id);
  if (!product) {
    return NextResponse.json({ error: `Product with id '${params.id}' not found.` }, { status: 404 });
  }

  return NextResponse.json({ data: product });
}
