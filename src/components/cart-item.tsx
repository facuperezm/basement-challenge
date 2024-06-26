import { Product, ProductCart } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";

export default function CartItem({ product }: { product: Product }) {
  const [products, setProducts] = useLocalStorage<ProductCart[]>(
    "products",
    []
  );

  const productIndex = products.findIndex((item) => item.id === product.id);
  const checkoutProduct = products[productIndex];

  const addQuantity = () => {
    setProducts(
      products.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeQuantity = () => {
    setProducts((products) =>
      products.reduce<ProductCart[]>((acc, item) => {
        if (item.id === product.id) {
          const newQuantity = item.quantity - 1;
          if (newQuantity > 0) {
            acc.push({ ...item, quantity: newQuantity });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  const updateSize = (newSize: string) => {
    setProducts(
      products.map((item) =>
        item.id === product.id ? { ...item, cartItemAmount: newSize } : item
      )
    );
  };

  return (
    <li className="border border-white">
      <div className="flex">
        <div className="p-2 sm:p-3">
          <div className="flex w-24 h-full md:w-full items-center align-center my-auto bg-gradient-to-t from-[#1D1D1D] to-black group">
            <Image
              src={product.image}
              alt="an image of a shirt"
              width={226}
              height={218}
              className="my-auto"
            />
          </div>
        </div>
        <div className="flex p-3 justify-between flex-col ml-2 sm:ml-4 flex-1">
          <div className="flex-1 text-left">
            <h2 className="text-sm leading-4 md:text-4xl uppercase text-white">
              {product.name}
            </h2>
            <p className="text-stone-400 text-xs md:text-xl leading-5">
              {product.description}
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <p className="md:text-xl text-xs uppercase sm:leading-5 font-bold tracking-wide text-white">
                QUANTITY:
              </p>
              <span className="flex py-1 ml-4 rounded-3xl border border-white px-2 md:space-x-1.5 space-x-1">
                <button
                  onClick={removeQuantity}
                  className="text-white text-xs md:text-xl"
                >
                  -
                </button>
                <span className="text-white text-xs md:text-xl flex-1 w-4 text-center">
                  {checkoutProduct?.quantity}
                </span>
                <button
                  onClick={addQuantity}
                  className="text-white text-xs md:text-xl"
                >
                  +
                </button>
              </span>
            </div>
            <div className="flex justify-start gap-4 items-center mt-2">
              <p className="md:text-xl text-xs uppercase sm:leading-5 font-bold tracking-wide text-white">
                SIZE:
              </p>
              <div className="">
                {product.options[0].values.map((value) => (
                  <button
                    key={value}
                    onClick={() => updateSize(value)}
                    className={cn(
                      "border w-6 h-6 md:w-10 md:h-10 md:p-1 md:text-xl text-sm rounded-full",
                      {
                        "border-white":
                          value === checkoutProduct.cartItemAmount,
                        "border-black":
                          value !== checkoutProduct.cartItemAmount,
                      }
                    )}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
