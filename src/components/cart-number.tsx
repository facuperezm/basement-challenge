"use client";

import { useLocalStorage } from "usehooks-ts";
import { Button } from "./ui/button";
import { ProductCart } from "@/lib/types";
import React from "react";

export default function CartNumber() {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const [products] = useLocalStorage<ProductCart[]>("products", []);

  return (
    <Button variant="outline" size="default" className="text-lg">
      CART {isClient ? products.length : 0}
    </Button>
  );
}
