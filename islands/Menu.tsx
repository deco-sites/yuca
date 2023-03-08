import { useState } from "preact/hooks";

const menu = [
  { label: "Apartamentos" },
  { label: "Como funciona" },
  { label: "Sobre a Yuca" },
  { label: "Outras Soluções" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="w-8 h-8 sm:hidden" onClick={() => setOpen(!open)}>
        {!open ? (
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            role="img">
            <path d="M6.223 23.5h19.555c.672 0 1.222-.562 1.222-1.251 0-.687-.55-1.25-1.222-1.25H6.223c-.673 0-1.223.563-1.223 1.25 0 .689.55 1.251 1.223 1.251Zm0-6.251h19.555c.672 0 1.222-.562 1.222-1.25 0-.687-.55-1.249-1.222-1.249H6.223C5.55 14.75 5 15.312 5 15.999c0 .688.55 1.25 1.223 1.25ZM5 9.75c0 .687.55 1.249 1.223 1.249h19.555c.672 0 1.222-.562 1.222-1.249 0-.688-.55-1.25-1.222-1.25H6.223C5.55 8.5 5 9.062 5 9.75Z"></path>
          </svg>
        ) : (
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            role="img">
            <path d="M5.488 5.504a1.665 1.665 0 0 1 2.353 0L16 13.648l8.16-8.16a1.66 1.66 0 0 1 2.352 0 1.662 1.662 0 0 1 0 2.353L18.353 16l8.159 8.16a1.66 1.66 0 0 1 0 2.352 1.66 1.66 0 0 1-2.352 0L16 18.352l-8.159 8.16a1.662 1.662 0 0 1-2.353 0 1.66 1.66 0 0 1 0-2.352l8.16-8.16-8.16-8.159a1.675 1.675 0 0 1 0-2.337Z"></path>
          </svg>
        )}
      </button>
      <div
        className={`bg-white h-screen w-full absolute right-0 left-0 bottom-0 top-[68px] sm:hidden ${
          open ? "flex flex-col" : "hidden"
        }`}>
        {menu.map((item) => (
          <span className="px-5 py-2.5 text-sm text-primary-dark font-bold flex items-center cursor-pointer">
            {item.label}
          </span>
        ))}
      </div>
      <div className="hidden sm:flex flex-1 items-start">
        {menu.map((item) => (
          <span className="px-5 py-2.5 text-sm text-primary-dark font-bold flex items-center cursor-pointer">
            {item.label}
            <i
              class={`text-primary-dark ${
                item.label === "Apartamentos" ? "hidden" : null
              }`}
              data-testid="system:down">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                className="w-4 h-4 fill-current">
                <path d="m9.114 10.5 6.887 6.799 6.884-6.799L25 12.592 16.001 21.5 7 12.592 9.114 10.5Z"></path>
              </svg>
            </i>
          </span>
        ))}
      </div>
    </>
  );
}
