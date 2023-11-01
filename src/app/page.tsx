import Image from "next/image";
import Marquee from "@/components/marquee";
import { Button } from "@/components/ui/button";
import logo from "../../public/logo.svg";
import mobileLogo from "../../public/mobile-logo.svg";
import navLogo from "../../public/nav-logo.svg";
import heroImage from "../../public/hero-img.svg";
import firstAsterisk from "../../public/first-asterisk.svg";
import secondAsterisk from "../../public/second-asterisk.svg";
import footerImage from "../../public/footer-img.svg";
import addToCartImage from "../../public/add-to-cart.svg";

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
          <Image
            alt="Basement logo for desktop"
            src={logo}
            width={192}
            height={48}
            className="h-7 hidden md:block"
            aria-hidden="true"
          />
          <Image
            src={mobileLogo}
            alt="Basement logo for mobile"
            width={40}
            height={43}
            className="h-10 md:hidden"
            aria-hidden="true"
          />
          <Image
            src={navLogo}
            alt="Navigation bar logos"
            width={284}
            height={24}
            className="hidden md:block"
            aria-hidden="true"
          />
          <Button variant="outline" size="default" className="text-lg">
            CART (0)
          </Button>
        </nav>
        <Image
          src={heroImage}
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
              src={firstAsterisk}
              alt="three dimentional asterisk flying around"
              className="z-999  w-36 h-36  hidden md:block animate-spin-slow absolute left-9 -bottom-14"
            />
            <Image
              src={secondAsterisk}
              alt="three dimentional asterisk flying around rotated"
              className="z-999 w-36 h-36 hidden md:block absolute right-14 bottom-0"
            />
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
                  <Image
                    src={addToCartImage}
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
          })}
        </div>
      </main>
      <footer className="flex flex-end justify-end">
        <Image
          src={footerImage}
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
