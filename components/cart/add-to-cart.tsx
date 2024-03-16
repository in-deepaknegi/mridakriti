"use client";

import { Plus } from "lucide-react";

import clsx from "clsx";
import { addItem } from "@/components/cart/actions";
import LoadingDots from "@/components/loading-dots";
import { ProductVariant } from "@/lib/shopify/types";
import { useSearchParams } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton({
    availableForSale,
    selectedVariantId,
}: {
    availableForSale: boolean;
    selectedVariantId: string | undefined;
}) {
    const { pending } = useFormStatus();
    const buttonClasses =
        "flex max-w-[10rem] flex-1 items-center justify-center rounded-xl border border-transparent bg-soil-300 px-6 py-3 text-base text-white hover:bg-soil-400 sm:w-full";
    const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";

    if (!availableForSale) {
        return (
            <button aria-disabled className={clsx(buttonClasses, disabledClasses)}>
                Out Of Stock
            </button>
        );
    }

    if (!selectedVariantId) {
        return (
            <button
                aria-label="Please select an option"
                aria-disabled
                className={clsx(buttonClasses, disabledClasses)}
            >
                <div className="absolute left-0 ml-4">
                    <Plus className="h-5" />
                </div>
                Add To Cart
            </button>
        );
    }

    return (
        <button
            onClick={(e: React.FormEvent<HTMLButtonElement>) => {
                if (pending) e.preventDefault();
            }}
            aria-label="Add to cart"
            aria-disabled={pending}
            className={clsx(buttonClasses, {
                "hover:opacity-90": true,
                disabledClasses: pending,
            })}
        >
            <div className="absolute left-0 ml-4">
                {pending ? (
                    <LoadingDots className="mb-3 bg-white" />
                ) : (
                    <Plus className="h-5" />
                )}
            </div>
            Add To Cart
        </button>
    );
}

export function AddToCart({
    variants,
    availableForSale,
}: {
    variants: ProductVariant[];
    availableForSale: boolean;
}) {
    const [message, formAction] = useFormState(addItem, null);
    const searchParams = useSearchParams();
    const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
    const variant = variants.find((variant: ProductVariant) =>
        variant.selectedOptions.every(
            (option) => option.value === searchParams.get(option.name.toLowerCase()),
        ),
    );
    const selectedVariantId = variant?.id || defaultVariantId;
    const actionWithVariant = formAction.bind(null, selectedVariantId);

    return (
        <form action={actionWithVariant}>
            <SubmitButton
                availableForSale={availableForSale}
                selectedVariantId={selectedVariantId}
            />
            <p aria-live="polite" className="sr-only" role="status">
                {message}
            </p>
        </form>
    );
}
