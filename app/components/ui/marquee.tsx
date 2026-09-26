import { SparkleIcon } from "lucide-react";

export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border bg-main text-foreground font-bold group">
      <div className="animate-marquee whitespace-nowrap py-5 group-hover:paused flex items-center justify-center">
        {items.map((item) => {
          return (
            <>
              <span key={item} className="mx-4 text-2xl md:text-4xl">
                {item}
              </span>
              <SparkleIcon />
            </>
          );
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-5 group-hover:paused flex items-center justify-center">
        {items.map((item) => {
          return (
            <>
              <span key={item} className="mx-4 text-2xl md:text-4xl">
                {item}
              </span>
              <SparkleIcon />
            </>
          );
        })}
      </div>

      {/* must have both of these in order to work */}
    </div>
  );
}
