"use client";

import React, { useCallback } from "react";
import { useLocalStorage } from "usehooks-ts";
import CartItem from "./cart-item";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "./ui/sheet";
import { ProductCart } from "@/lib/types";
import { Button } from "./ui/button";

export default function Cart() {
  const [isClient, setIsClient] = React.useState(false);
  const [products] = useLocalStorage<ProductCart[]>("products", []);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const totalPrice = useCallback(
    () =>
      products.reduce(
        (ac, product) => ac + product.price * product.quantity,
        0
      ),
    [products]
  );

  const totalProducts = products
    .map((product) => product.quantity)
    .reduce((ac, product) => ac + product, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="text-lg">
          CART {isClient ? totalProducts : 0}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col md:max-w-[824px] overflow-y-auto overflow-x-hidden p-4">
        <SheetHeader>
          <SheetTitle className="text-center text-8xl font-bold shrink-0">
            YOUR{" "}
            <span className="text-black font-black outline-text">CART</span>
          </SheetTitle>
        </SheetHeader>
        <SheetDescription className="md:p-4 overflow-y-scroll md:-mb-4">
          <ul className="mt-4 space-y-2 md:space-y-4">
            {products.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                quantity={product.quantity}
              />
            ))}
          </ul>
        </SheetDescription>
        <SheetFooter className="md:grid md:grid-cols-2 md:border-t-2 text-4xl font-bold uppercase border-white md:divide-x-2 md:divide-y-0 divide-y divide-white">
          <div className="flex justify-between md:justify-start gap-1">
            <span className="text-2xl md:px-3 md:text-4xl py-2 text-left md:text-center my-auto">
              TOTAL
            </span>
            <span className="text-2xl md:px-3 md:text-4xl py-2 text-right md:text-center my-auto">
              ${totalPrice()}
            </span>
          </div>
          <p className="text-black font-black outline-text text-5xl tracking-[3px] md:text-4xl md:tracking-normal text-center py-3 md:py-6 uppercase">
            CHECKOUT
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
