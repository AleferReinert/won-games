import { graphql, HttpResponse } from 'msw'
import { Enum_Componentpagehighlight_Alignment, PageHomeQuery } from 'types/generated'

export const homePageHandler = graphql.query<PageHomeQuery>('PageHome', () => {
  return HttpResponse.json({
    data: {
      banners: [
        {
          documentId: '3',
          img: {
            url: '/uploads/a_plague_tale_requiem_122835ed18_2bc808cc72.jpg'
          },
          title: 'banner 1'
        },
        {
          documentId: '4',
          img: {
            url: '/uploads/a_plague_tale_requiem_c2fa2068cf_8dddebe550.jpg'
          },
          title: 'banner 2'
        }
      ],
      newProducts: [
        {
          documentId: '16',
          cover: {
            url: '/uploads/alien_isolation_collection_40da70d5f4_132bd56a61_17e46b3b89.jpg'
          },
          developers: [],
          name: 'Alien: Isolation - The Collection',
          price: 42.19,
          slug: 'alien-isolation-the-collection'
        },
        {
          documentId: '14',
          cover: {
            url: '/uploads/disco_elysium_1e03f55ef4_87ddc3f499.jpg'
          },
          developers: [],
          name: 'Disco Elysium The Ultimate Deluxe Edition',
          price: 56,
          slug: 'disco-elysium',
          promotional_price: 46
        }
      ],
      comingSoonProducts: [
        {
          documentId: '18',
          cover: {
            url: '/uploads/a_plague_tale_requiem_062159c4cc_5f80dc6be1_423db60ccf.jpg'
          },
          developers: [],
          name: 'A Plague Tale Requiem',
          price: 0,
          slug: 'a-plague-tale-requiem'
        },
        {
          documentId: '15',
          cover: {
            url: '/uploads/anno_1404_gold_edition_24be89b878_aad65ddf17_f10bea7885.jpg'
          },
          developers: [],
          name: 'Anno 1404',
          price: 0,
          slug: 'anno-1404'
        },
        {
          documentId: '12',

          cover: {
            url: '/uploads/control_ultimate_edition_bd3a596ba4_6e1bb322a0.jpg'
          },
          developers: [],
          name: 'Control Ultimated Edition',
          price: 0,
          slug: 'control-ultimated-edition'
        },
        {
          documentId: '11',
          cover: {
            url: '/uploads/cyberpunk_2077_d5c969894c_3960b5ac21_a8efbf3f15.jpg'
          },
          developers: [
            {
              name: 'Bippinbits'
            }
          ],
          name: 'Cyberpunk 2077',
          price: 33,
          slug: 'cyberpunk-2077'
        },
        {
          documentId: '17',
          cover: {
            url: '/uploads/day_of_the_tentacle_remastered_9fff13e2d2_5e0b7a1756.jpg'
          },
          developers: [],
          name: 'Day of the Tentacle Remastered',
          price: 33,
          slug: 'day-of-the-tentacle-remastered'
        },
        {
          documentId: '13',
          cover: {
            url: '/uploads/deus_ex_mankind_divided_deluxe_edition_ace26a8925_41233d48ce.jpg'
          },
          developers: [],
          name: 'Deus Ex Mankind Divided Deluxe',
          price: 199,
          slug: 'deus-ex-mankind-divided-deluxe'
        },
        {
          documentId: '20',
          cover: {
            url: '/uploads/diablo_3d0a641157_72b5d92014.jpg'
          },
          developers: [],
          name: 'Diablo',
          price: 199,
          slug: 'diablo'
        },
        {
          documentId: '21',
          cover: {
            url: '/uploads/dome_keeper_867d0efd45_c38c719f2b.jpg'
          },
          developers: [],
          name: 'Dome Keeper',
          price: 0,
          slug: 'dome-keeper'
        }
      ],
      freeProducts: [
        {
          documentId: '18',
          cover: {
            url: '/uploads/a_plague_tale_requiem_062159c4cc_5f80dc6be1_423db60ccf.jpg'
          },
          developers: [],
          name: 'A Plague Tale Requiem',
          price: 0,
          slug: 'a-plague-tale-requiem'
        },
        {
          documentId: '15',
          cover: {
            url: '/uploads/anno_1404_gold_edition_24be89b878_aad65ddf17_f10bea7885.jpg'
          },
          developers: [],
          name: 'Anno 1404',
          price: 0,
          slug: 'anno-1404'
        },
        {
          documentId: '12',
          cover: {
            url: '/uploads/control_ultimate_edition_bd3a596ba4_6e1bb322a0.jpg'
          },
          developers: [],
          name: 'Control Ultimated Edition',
          price: 0,
          slug: 'control-ultimated-edition'
        },
        {
          documentId: '21',
          cover: {
            url: '/uploads/dome_keeper_867d0efd45_c38c719f2b.jpg'
          },
          developers: [],
          name: 'Dome Keeper',
          price: 0,
          slug: 'dome-keeper'
        },
        {
          documentId: '19',
          cover: {
            url: '/uploads/cold_waters_2aa88bf86d_78cb1eff22.jpg'
          },
          developers: [],
          name: 'Cold Waters',
          price: 0,
          slug: 'cold-waters'
        }
      ],
      showcases: {
        newProducts: {
          title: 'New Releases',
          highlight: {
            title: 'Release highlight title',
            description: 'Lorem ipsum',
            buttonLabel: 'Buy now',
            buttonUrl: '/link',
            alignment: Enum_Componentpagehighlight_Alignment.Right,
            background: {
              url: '/uploads/a_plague_tale_requiem_062159c4cc_5f80dc6be1_423db60ccf.jpg'
            }
          }
        },
        popularProducts: {
          title: 'Most Popular',
          highlight: {
            title: 'Red Dead',
            description: 'Come and discover the new adventures of John Marston',
            buttonLabel: 'Buy now',
            buttonUrl: '/url',
            alignment: Enum_Componentpagehighlight_Alignment.Left,
            background: {
              url: '/uploads/a_plague_tale_requiem_062159c4cc_5f80dc6be1_423db60ccf.jpg'
            }
          },
          products: [
            {
              documentId: '14',
              name: 'Disco Elysium The Ultimate Deluxe Edition',
              slug: 'disco-elysium',
              price: 56,
              promotional_price: 46,
              developers: [],
              cover: {
                url: '/uploads/disco_elysium_1e03f55ef4_87ddc3f499.jpg'
              }
            },
            {
              documentId: '13',
              name: 'Deus Ex Mankind Divided Deluxe',
              slug: 'deus-ex-mankind-divided-deluxe',
              price: 199,
              developers: [],
              cover: {
                url: '/uploads/deus_ex_mankind_divided_deluxe_edition_ace26a8925_41233d48ce.jpg'
              }
            }
          ]
        },
        comingSoonProducts: {
          title: 'Coming Soon',
          highlight: {
            title: 'Borderlands 3',
            description: 'Borderlands is back with lots of new features.',
            buttonLabel: 'Buy now',
            buttonUrl: '/borderlands',
            alignment: Enum_Componentpagehighlight_Alignment.Right,
            background: {
              url: '/uploads/a_plague_tale_requiem_062159c4cc_5f80dc6be1_423db60ccf.jpg'
            }
          }
        },
        freeProducts: {
          title: 'Free Games',
          highlight: {
            title: 'Have you already heard of the classic CS:GO?',
            description: 'Play one of the greatest FPS classics',
            buttonLabel: 'Buy now',
            buttonUrl: '/cs-go',
            alignment: Enum_Componentpagehighlight_Alignment.Left,
            background: {
              url: '/uploads/a_plague_tale_requiem_062159c4cc_5f80dc6be1_423db60ccf.jpg'
            }
          }
        }
      }
    }
  })
})
