import Image from "next/image";
import Marquee from "@/components/marquee";

import { Product } from "@/lib/types";
import ProductCard from "@/components/product-card";
import Cart from "@/components/modal-cart";

async function getProducts(): Promise<Product[]> {
  const products = await import("../assets/mocks/products.json").then(
    (res) => res.default as Product[]
  );
  return products;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <header>
        <nav className="flex items-center p-4 justify-between">
          <Image
            alt="Basement logo for desktop"
            src="/logo.svg"
            width={192}
            height={48}
            className="h-7 hidden md:block"
            aria-hidden="true"
          />
          <Image
            src="/mobile-logo.svg"
            alt="Basement logo for mobile"
            width={40}
            height={43}
            className="h-10 md:hidden"
            aria-hidden="true"
          />
          <Image
            src="/nav-logo.svg"
            alt="Navigation bar logos"
            width={284}
            height={24}
            className="hidden md:block relative"
            aria-hidden="true"
          />
          <Cart />
        </nav>
        <Image
          src="/hero-img.svg"
          alt="Hero image saying Basement Supply"
          width={1376}
          height={365}
          className="w-full h-fit md:mt-4 px-4"
          aria-hidden="true"
        />
        <div className="relative py-4">
          <Marquee className="md:mt-4" />
          <div>
            <Image
              src="/first-asterisk.svg"
              width={144}
              height={144}
              alt="three dimentional asterisk flying around"
              className="z-999  w-36 h-36  hidden md:block animate-spin-slow absolute left-9 -bottom-14"
            />
            <Image
              src="/second-asterisk.svg"
              width={144}
              height={144}
              alt="three dimentional asterisk flying around rotated"
              className="z-999 w-36 h-36 hidden md:block absolute right-14 bottom-0"
            />
          </div>
        </div>
      </header>
      <main className="mt-20">
        <section className="grid gap-4 grid-cols-1 px-4 md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </section>
      </main>
      <footer className="flex flex-end justify-end">
        <Image
          src="/footer-img.svg"
          alt="footer image saying wear everyday"
          width={1376}
          height={486}
          className="w-full h-fit mt-4 px-4"
          aria-hidden="true"
        />
      </footer>
    </>
  );
}
