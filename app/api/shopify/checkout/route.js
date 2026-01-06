import { NextResponse } from "next/server";
import {
  isShopifyConfigured,
  shopifyRequest,
} from "@/lib/shopify/client";

const CART_CREATE_MUTATION = /* GraphQL */ `
  mutation CartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export async function POST(request) {
  if (!isShopifyConfigured()) {
    return NextResponse.json(
      { error: "Shopify credentials are not configured." },
      { status: 500 }
    );
  }

  const { items } = await request.json();

  if (!items?.length) {
    return NextResponse.json(
      { error: "Cart is empty." },
      { status: 400 }
    );
  }

  const lines = items
    .filter((item) => item.variantId)
    .map((item) => ({
      merchandiseId: item.variantId,
      quantity: Math.max(1, Math.min(20, Number(item.quantity) || 1)),
    }));

  if (!lines.length) {
    return NextResponse.json(
      { error: "No valid items in cart." },
      { status: 400 }
    );
  }

  try {
    const data = await shopifyRequest(CART_CREATE_MUTATION, {
      input: {
        lines,
      },
    });
    if (!data) {
      return NextResponse.json(
        { error: "Shopify store is unavailable." },
        { status: 503 }
      );
    }

    const cart = data?.cartCreate?.cart;
    const userErrors = data?.cartCreate?.userErrors ?? [];

    if (userErrors.length) {
      return NextResponse.json(
        { error: userErrors.map((err) => err.message).join(", ") },
        { status: 400 }
      );
    }

    if (!cart?.checkoutUrl) {
      return NextResponse.json(
        { error: "Unable to create checkout session." },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: cart.checkoutUrl });
  } catch (error) {
    console.error("[ShopifyCheckout] Failed to create checkout", error);
    return NextResponse.json(
      { error: error.message || "Failed to create checkout session." },
      { status: 500 }
    );
  }
}
