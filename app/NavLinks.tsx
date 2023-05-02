import React from 'react';
import { categories } from '@/constants';
import NavLink from './NavLink';

export default function NavLinks() {
  return (
    <nav>
        {categories.map((category,i) => (
            <NavLink key={i} category={category} isActive={true} />
        ))}
    </nav>
  )
}
