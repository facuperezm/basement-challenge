import Image from "next/image";
import Marquee from "@/components/marquee";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export interface Product {
  id: string;
  image: string;
  price: number;
  name: string;
  description: string;
  options: Option[];
}
export interface Option {
  label: string;
  values: string[];
}

async function getProducts(): Promise<Product[]> {
  const products = await import("../assets/mocks/products.json").then(
    (res) => res.default
  );
  return products;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <header>
        <nav className="flex items-center p-4 justify-between w-full">
          <Icons.logo className="h-7 hidden md:block" aria-hidden="true" />
          <Icons.mobileLogo className="h-10 md:hidden" aria-hidden="true" />
          <Icons.headerlogo className="hidden md:block" aria-hidden="true" />
          <Button variant="outline" size="default" className="text-lg">
            CART (0)
          </Button>
        </nav>
        <Icons.heroimg
          className="w-full h-fit md:mt-4 px-4"
          aria-hidden="true"
        />
        <div className="relative py-4">
          <Marquee className="md:mt-4" />
          <div>
            <Icons.firstAsterisk className="z-999  w-36 h-36  hidden md:block animate-spin-slow absolute left-9 -bottom-14" />
            <Icons.secondAsterisk className="z-999 w-36 h-36 hidden md:block absolute right-14 bottom-0" />
          </div>
        </div>
      </header>
      <main className="mt-20">
        <div className="grid gap-4 grid-cols-1 px-4 md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
          {products.map((product) => {
            return (
              <article
                className="group relative hover:cursor-pointer"
                key={product.id}
              >
                <div className="border-b-2 border-b-white -z-1 bg-gradient-to-t from-[#1D1D1D] to-black group">
                  <Image
                    src={product.image}
                    alt="an image of a shirt"
                    width={440}
                    height={628}
                    className="mx-auto"
                  />
                </div>
                <div className="flex w-full h-full absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                  <Icons.hoverimg aria-hidden="true" />
                </div>
                <div className="flex justify-between w-full mt-2 ">
                  <span className="text-xl">{product.name}</span>
                  <span className="text-xl">${product.price}</span>
                </div>
              </article>
            );
          })}
        </div>
      </main>
      <footer className="flex flex-end justify-end">
        <Icons.footerimg
          className="w-full h-fit mt-4 px-4"
          aria-hidden="true"
        />
      </footer>
    </>
  );
}
