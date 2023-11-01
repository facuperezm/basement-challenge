import { cn } from "@/lib/utils";

function Marquee({ className = "" }: { className?: string }) {
  const children = (
    <>
      <li className="shrink-0">A man can’t have enough basement swag —</li>
      <li className="shrink-0">A man can’t have enough basement swag —</li>
      <li className="shrink-0">A man can’t have enough basement swag —</li>
      <li className="shrink-0">A man can’t have enough basement swag —</li>
      <li className="shrink-0">A man can’t have enough basement swag —</li>
      <li className="shrink-0">A man can’t have enough basement swag —</li>
      <li className="shrink-0">A man can’t have enough basement swag —</li>
      <li className="shrink-0">A man can’t have enough basement swag —</li>
    </>
  );

  const ulClassName =
    "flex animate-marquee shrink-0 whitespace-nowrap gap-2 pl-2 text-xl md:text-3xl";
  return (
    <div
      className={cn(
        "flex -mx-96 border-t-2 border-b-2 border-white py-1 md:py-2",
        className
      )}
    >
      <ul className={ulClassName}>{children}</ul>
      <ul className={ulClassName} aria-hidden={true}>
        {children}
      </ul>
    </div>
  );
}

export default Marquee;
