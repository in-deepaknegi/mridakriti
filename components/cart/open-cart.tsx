
export default function OpenCart({
    quantity
}: {
    quantity?: number;
}) {
    return (
        <div className="relative">
            <div className="flex gap-1">
                <span className="sr-only">Cart</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-dusk-700"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    ></path>
                </svg>
            </div>

            {quantity ? (
                <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-soil-100 text-[11px] font-medium text-white">
                    {quantity}
                </div>
            ) : null}
        </div>
    );
}
