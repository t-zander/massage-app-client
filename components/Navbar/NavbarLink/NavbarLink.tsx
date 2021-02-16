import React, { ReactElement } from 'react';
import { Link, Theme } from '@material-ui/core';
import NextLink from 'next/link';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    transition: 'color .4s',
    color: theme.palette.primary.contrastText,
    textTransform: 'uppercase',
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main,
      textDecoration: 'none'
    }
  }
}));

interface NavbarLinkProps {
  href: string;
  children: ReactElement | string;
  className?: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({
  href,
  children,
  className
}) => {
  const classes = useStyles();

  return (
    <NextLink href={href} passHref>
      <Link className={clsx(classes.root, className)}>{children}</Link>
    </NextLink>
  );
};

export default NavbarLink;
