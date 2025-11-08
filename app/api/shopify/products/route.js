import { NextResponse } from "next/server";
import { fetchShopifyProducts } from "@/lib/services/shopifyProductService";

export async function GET() {
  const result = await fetchShopifyProducts(9);
  if (!result.configured) {
    return NextResponse.json(
      { error: "Shopify credentials not configured." },
      { status: 501 }
    );
  }

  if (result.error) {
    return NextResponse.json(
      { error: "Failed to fetch products", details: result.error },
      { status: 500 }
    );
  }

  return NextResponse.json({
    products: result.products,
    storeUrl: result.storeUrl,
  });
}
