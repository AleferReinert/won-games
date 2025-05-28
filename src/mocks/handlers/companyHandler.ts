import { graphql, HttpResponse } from 'msw'

export const companyHandler = graphql.query('Company', () => {
  return HttpResponse.json({
    data: {
      company: {
        data: {
          attributes: {
            name: 'Won Games',
            email: 'support@wongames.com',
            phone: '16104333002',
            street: 'Maple Street',
            number: '1325',
            neighborhood: 'Downtown',
            city: 'Chicago',
            zipcode: '62701',
            state: 'IL',
            country: 'United States',
            complement: 'Apartment 5A',
            logoLight: {
              data: {
                attributes: {
                  url: '/img/test/logo-light.webp',
                  width: 964,
                  height: 288,
                  formats: {
                    small: {
                      ext: '.webp',
                      url: '/uploads/small_logo_light_bb67aea554.webp',
                      hash: 'small_logo_light_bb67aea554',
                      mime: 'image/webp',
                      name: 'small_logo-light.webp',
                      path: null,
                      size: 9.24,
                      width: 500,
                      height: 149
                    },
                    medium: {
                      ext: '.webp',
                      url: '/uploads/medium_logo_light_bb67aea554.webp',
                      hash: 'medium_logo_light_bb67aea554',
                      mime: 'image/webp',
                      name: 'medium_logo-light.webp',
                      path: null,
                      size: 17.48,
                      width: 750,
                      height: 224
                    },
                    thumbnail: {
                      ext: '.webp',
                      url: '/uploads/thumbnail_logo_light_bb67aea554.webp',
                      hash: 'thumbnail_logo_light_bb67aea554',
                      mime: 'image/webp',
                      name: 'thumbnail_logo-light.webp',
                      path: null,
                      size: 3.2,
                      width: 245,
                      height: 73
                    }
                  }
                }
              }
            },
            logoDark: {
              data: {
                attributes: {
                  url: '/img/test/logo-dark.webp',
                  width: 964,
                  height: 288
                }
              }
            },
            logoIcon: {
              data: {
                attributes: {
                  url: '/img/test/logo-icon.webp',
                  width: 369,
                  height: 234
                }
              }
            },
            socialLinks: [
              {
                name: 'Facebook',
                url: 'https://facebook.com/example/wongames'
              },
              {
                name: 'Instagram',
                url: 'https://instagram.com/example/wongames'
              },
              {
                name: 'YouTube',
                url: 'https://youtube.com/example/wongames'
              }
            ]
          }
        }
      }
    }
  })
})
