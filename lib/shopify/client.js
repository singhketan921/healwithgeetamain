const SHOPIFY_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const SHOPIFY_TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN;

const API_VERSION = "2024-04";

export function isShopifyConfigured() {
  return Boolean(SHOPIFY_DOMAIN && SHOPIFY_TOKEN);
}

export async function shopifyRequest(query, variables) {
  if (!isShopifyConfigured()) {
    throw new Error("Shopify credentials are not configured.");
  }

  const endpoint = `https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Shopify request failed: ${response.status} ${text}`);
  }

  const payload = await response.json();
  if (payload.errors) {
    throw new Error(
      payload.errors.map((err) => err.message).join(", ") ||
        "Shopify GraphQL error"
    );
  }

  return payload.data;
}

export function getShopifyStoreUrl() {
  return SHOPIFY_DOMAIN ? `https://${SHOPIFY_DOMAIN}` : undefined;
}
