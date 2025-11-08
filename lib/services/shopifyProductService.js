'use server';

import {
  isShopifyConfigured,
  shopifyRequest,
  getShopifyStoreUrl,
} from "@/lib/shopify/client";

const PRODUCTS_QUERY = /* GraphQL */ `
  query Products($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          description
          handle
          vendor
          onlineStoreUrl
          featuredImage {
            url
            altText
          }
          variants(first: 1) {
            edges {
              node {
                id
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

const buildCartUrl = (variantId, storeUrl, quantity = 1) => {
  if (!variantId || !storeUrl) return null;
  const numericId = variantId.split("/").pop();
  if (!numericId) return null;
  return `${storeUrl}/cart/${numericId}:${quantity}`;
};

function mapProduct(node) {
  const priceInfo = node.priceRange?.minVariantPrice;
  return {
    id: node.id,
    title: node.title,
    description: node.description,
    subtitle: node.vendor,
    handle: node.handle,
    image: node.featuredImage?.url ?? null,
    imageAlt: node.featuredImage?.altText ?? node.title,
    price: priceInfo?.amount ?? null,
    currency: priceInfo?.currencyCode ?? "USD",
    url: node.onlineStoreUrl ?? null,
    primaryVariantId: node.variants?.edges?.[0]?.node?.id ?? null,
  };
}

export async function fetchShopifyProducts(limit = 6) {
  const storeUrl = getShopifyStoreUrl();

  if (!isShopifyConfigured()) {
    return {
      products: [],
      storeUrl,
      configured: false,
    };
  }

  try {
    const data = await shopifyRequest(PRODUCTS_QUERY, { first: limit });
    const products =
      data?.products?.edges?.map((edge) => mapProduct(edge.node)) ?? [];
    const hydratedProducts = products.map((product) => ({
      ...product,
      cartUrl: buildCartUrl(product.primaryVariantId, storeUrl),
    }));

    return {
      products: hydratedProducts,
      storeUrl,
      configured: true,
    };
  } catch (error) {
    console.error("Failed to fetch Shopify products:", error);
    return {
      products: [],
      storeUrl,
      configured: true,
      error: error.message,
    };
  }
}
