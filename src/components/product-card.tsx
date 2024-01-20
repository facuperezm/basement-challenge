"use client";

import { Product, ProductCart } from "@/lib/types";
import { useLocalStorage } from "usehooks-ts";

import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  const [products, setProducts] = useLocalStorage<ProductCart[]>(
    "products",
    []
  );

  return (
    <article
      onClick={() => {
        const existingProduct = products.find(
          (item) => item.name === product.name
        );
        if (existingProduct) {
          setProducts(
            products.map((item) =>
              item.name === product.name
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          );
        } else {
          setProducts([
            ...products,
            { ...product, quantity: 1, cartItemAmount: "S" },
          ]);
        }
      }}
      className="group relative hover:cursor-pointer"
      key={product.id}
    >
      <div className="border-b-2 border-b-white -z-1 bg-gradient-to-t from-[#1D1D1D] to-black group">
        <Image
          src={product.image}
          alt="an image of a shirt"
          width={440}
          height={628}
          priority
          className="mx-auto"
        />
      </div>
      <div className="flex w-full h-full absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
        <Image
          src="/add-to-cart.svg"
          alt="an image saying add to cart"
          width={245}
          height={128}
          aria-hidden="true"
        />
      </div>
      <div className="flex justify-between w-full mt-2 ">
        <span className="text-xl">{product.name}</span>
        <span className="text-xl">${product.price}</span>
      </div>
    </article>
  );
}
