import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        sport:
          "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 [a&]:hover:bg-blue-100 dark:[a&]:hover:bg-blue-900",
        event:
          "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300 [a&]:hover:bg-purple-100 dark:[a&]:hover:bg-purple-900",
        förvaltning:
          "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 [a&]:hover:bg-green-100 dark:[a&]:hover:bg-green-900",
        information:
          "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300 [a&]:hover:bg-rose-100 dark:[a&]:hover:bg-rose-900",
        näringsliv:
          "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 [a&]:hover:bg-amber-100 dark:[a&]:hover:bg-amber-900",
        projekt:
          "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300 [a&]:hover:bg-sky-100 dark:[a&]:hover:bg-sky-900",
        studiesocialt:
          "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300 [a&]:hover:bg-teal-100 dark:[a&]:hover:bg-teal-900",
        övrig:
          "bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-300 [a&]:hover:bg-pink-100 dark:[a&]:hover:bg-pink-900",
      },
    },
    defaultVariants: {
      variant: "sport",
    },
  }
)

function Badge({
  className,
  variant = "sport",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }