import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  title?: string;
  subtitle?: string;
  apartaments: Apartament[];
}

export interface Apartament {
  imgSrc: LiveImage;
  alt?: string;
  title: string;
  price: string;
  totalPrice: string;
}

export default function Shelf({ title, subtitle, apartaments }: Props) {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <div className="flex flex-col py-8 mt-[40px]">
        <h2 className="w-full font-serif font-black text-4xl mb-5 text-center">
          {title}
        </h2>
        <p className="text-xl font-sans text-center">{subtitle}</p>
      </div>
      <div className="flex gap-5 sm:flex-row flex-col">
        {apartaments.map((apart) => (
          <div className="w-full sm:w-1/3 flex flex-col relative">
            <i
              data-test-id="favButton"
              class="text-white absolute bg-[#0000001a] p-1 right-2.5 top-2.5 cursor-pointer rounded"
              data-testid="system:like"
              style="">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                className="h-6 w-6 fill-current">
                <path d="M21.85 4C19.588 4 17.417 5.059 16 6.734 14.583 5.059 12.412 4 10.15 4 6.146 4 3 7.165 3 11.193c0 4.944 4.42 8.973 11.115 15.094L16 28l1.885-1.726C24.58 20.166 29 16.137 29 11.193 29 7.165 25.854 4 21.85 4Zm-5.72 20.338-.13.131-.13-.131C9.682 18.701 5.6 14.973 5.6 11.193c0-2.615 1.95-4.577 4.55-4.577 2.002 0 3.952 1.295 4.641 3.086h2.431c.676-1.791 2.626-3.086 4.628-3.086 2.6 0 4.55 1.962 4.55 4.577 0 3.78-4.082 7.508-10.27 13.145Z"></path>
              </svg>
            </i>
            <Image
              class="object-contain w-auto rounded"
              sizes="(max-width: 640px) 75vw, 50vw"
              src={apart.imgSrc}
              alt={apart.alt}
              width={300}
              height={300}
            />
            <p className="text-sm pt-2.5">{apart.title}</p>
            <p className="text-sm font-bold mt-2 mb-1">{apart.price}</p>
            <p className="text-sm">{apart.totalPrice}</p>
          </div>
        ))}
      </div>
      <div className="flex w-full my-10 justify-center">
        <button className="p-5 text-sm font-bold rounded-lg bg-primary text-white flex">
          Ver mais apartamentos{" "}
          <svg
            className="fill-current w-[24px] h-[24px] ml-4"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            role="img">
            <path d="M5 14.625h16.733l-7.685-7.687L16 5l11 11-11 11-1.938-1.938 7.671-7.687H5v-2.75Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
