import { Button, ButtonProps } from "@material-ui/core";
import Link, { LinkProps } from "next/link";
import React, { forwardRef, Ref } from "react";

type LinkRef = HTMLAnchorElement | HTMLButtonElement;
type NextLinkProps = Omit<ButtonProps, "href"> &
  Pick<LinkProps, "href" | "as" | "prefetch" | "locale">;

const NextButtonLink = (
  { href, as, prefetch, locale, ...props }: LinkProps,
  ref: Ref<LinkRef>
) => (
  <Link href={href} as={as} prefetch={prefetch} locale={locale} passHref>
    <Button buttonRef={ref} {...props} />
  </Link>
);

export default forwardRef<LinkRef, NextLinkProps>(NextButtonLink);
