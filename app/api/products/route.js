import { NextResponse } from "next/server";
import { fetchProducts } from "@/lib/services/productService";

export async function GET() {
  const products = await fetchProducts();
  return NextResponse.json({
    data: products,
    meta: {
      count: products.length,
    },
  });
}
