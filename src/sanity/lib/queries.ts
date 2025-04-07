import { defineQuery } from 'next-sanity';
export const VANS_QUERY = defineQuery(`*[_type == 'van'
   && defined(slug.current)][0...6]{
      name,
      type,
      price,
      mainImage{
          alt,
          asset->{
              url
          }
      },
      slug,  
   } | order(name)`);

export const VAN_QUERY = defineQuery(`
    *[_type == 'van'
 && slug.current == $slug][0]{
    name,
    type,
    description,
    price,
    mainImage{
        alt,
        asset->{
            url
        }
    },
 }`);

export const MAIN_NAV_QUERY = defineQuery(`
    *[_type == 'navMenu'
 && slug.current == 'main-nav-menu'][0]{
  links[]{
    name,
    url}
 }`);

export const HOST_NAV_QUERY = defineQuery(`*[_type == 'navMenu' 
  && slug.current == 'host-nav-menu'][0]{
    links[]{
      name,
      url
    }
  }`);

export const HOST_VANS_QUERY = defineQuery(`
    *[_type == 'van'
  && defined(slug.current)
  && hosted == true][0...3]{
  name,
  price,
  slug,
  mainImage{
    asset->{url},
    alt
    }
  } | order(name)`);

export const HOST_VAN_QUERY = defineQuery(`*[_type == 'van'
    && slug.current == $slug][0]{
    name,
    price,
    mainImage{
        asset->{url},
        alt
        },
    description,
  }`);
