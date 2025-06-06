import { graphql, HttpResponse } from 'msw'
import { Enum_Product_Rating, ProductBySlugQuery } from 'types/generated'

export const productBySlugHandler = graphql.query<ProductBySlugQuery>('ProductBySlug', () => {
  return HttpResponse.json({
    data: {
      products: [
        {
          documentId: '16',
          cover: {
            url: '/uploads/alien_isolation_collection_40da70d5f4_132bd56a61_17e46b3b89.jpg'
          },
          name: 'Alien: Isolation - The Collection',
          short_description:
            'Discover the true meaning of fear in Alien: Isolation, a survival horror set in an atmosphere of constant dread and mortal danger. ',
          description:
            "<p>Discover the true meaning of fear in Alien: Isolation, a survival horror set in an atmosphere of constant dread and mortal danger.&nbsp;<br>&nbsp;</p><h3><strong>Content included</strong></h3><p>&nbsp;</p><h4>Alien: Isolation</h4><p>Discover the true meaning of fear in Alien: Isolation, a survival horror set in an atmosphere of constant dread and mortal danger.</p><p>&nbsp;</p><h4>Alien: Isolation - Corporate Lockdown</h4><p>Welcome to Corporate Lockdown, the first expansion pack for Alien: Isolation. This pack features three all-new maps: for Survivor Mode, a time-based challenge to test your skills.</p><p>&nbsp;</p><h4>Alien: Isolation - Crew Expendable</h4><p>See the original crew reunited aboard the Nostromo. Brett and Kane are dead; alongside Ash and Lambert, it is now down to you as Dallas, Parker or Ellen Ripley, to find a way to isolate the Alien and overcome the terror that confronts them.</p><p>&nbsp;</p><h4>Alien: Isolation - Last Survivor</h4><p>As Ellen Ripley, it is down to you to complete the last mission on board the Nostromo. The rest of the crew are dead. In a desperate bid to survive you must set the ship’s self-destruct and attempt to reach the escape shuttle.</p><p>&nbsp;</p><h4>Alien: Isolation - Lost Contact</h4><p>Welcome to Lost Contact, the fourth add-on content pack for Alien: Isolation, returning to the epic Salvage Mode. Trapped in deep space on board Sevastopol, you'll need to explore the station to complete objectives and survive.</p><p>&nbsp;</p><h4>Alien: Isolation - Safe Haven</h4><p>Welcome to Safe Haven, the third add-on content pack for Alien: Isolation, featuring the all-new Salvage Mode. How long can you survive?</p><p>&nbsp;</p><h4>Alien: Isolation - Trauma</h4><p>Welcome to Trauma, the second add-on content pack for Alien: Isolation. This pack features three all-new maps for Survivor Mode, a time-based challenge to test your skills.</p><p>&nbsp;</p><h4>Alien: Isolation - The Trigger</h4><p>Welcome to The Trigger, the fifth add-on content pack for Alien: Isolation. Can you make Sevastopol safe? You’ve been given a box of explosives and the locations to set them. All you need to do now is pull the trigger… and stay alive.</p>",
          price: 42.19,
          gallery: [
            {
              url: '/uploads/a_plague_tale_requiem_122835ed18_2bc808cc72.jpg'
            },
            {
              url: '/uploads/a_plague_tale_requiem_c2fa2068cf_8dddebe550.jpg'
            },
            {
              url: '/uploads/a_plague_tale_requiem_66c801b0ff_dc61048685_f7a66e2b22.jpg'
            },
            {
              url: '/uploads/a_plague_tale_requiem_7123c83920_8e3d9a95c8.jpg'
            }
          ],
          developers: [],
          release_date: '2025-05-07',
          platforms: [
            {
              name: 'Mac'
            },
            {
              name: 'Windows 8'
            },
            {
              name: 'Windows 7'
            },
            {
              name: 'Windows 10'
            },
            {
              name: 'Linux'
            },
            {
              name: 'PlayStation 4'
            },
            {
              name: 'PlayStation 5'
            },
            {
              name: 'Xbox Series X'
            }
          ],
          rating: Enum_Product_Rating.Br12,
          categories: []
        }
      ]
    }
  })
})
