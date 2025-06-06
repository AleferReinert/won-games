import { graphql, HttpResponse } from 'msw'
import { ComingSoonQuery, Enum_Componentpagehighlight_Alignment } from 'types/generated'

export const comingSoonHandler = graphql.query<ComingSoonQuery>('ComingSoon', () => {
  return HttpResponse.json({
    data: {
      comingSoonProducts: [
        {
          documentId: '18',
          cover: {
            url: '/uploads/a_plague_tale_requiem_062159c4cc_5f80dc6be1_423db60ccf.jpg',
            alternativeText: ''
          },
          developers: [],
          name: 'A Plague Tale Requiem',
          price: 0,
          slug: 'a-plague-tale-requiem'
        },
        {
          documentId: '15',
          cover: {
            url: '/uploads/anno_1404_gold_edition_24be89b878_aad65ddf17_f10bea7885.jpg',
            alternativeText: ''
          },
          developers: [],
          name: 'Anno 1404',
          price: 0,
          slug: 'anno-1404'
        },
        {
          documentId: '12',
          cover: {
            url: '/uploads/control_ultimate_edition_bd3a596ba4_6e1bb322a0.jpg',
            alternativeText: ''
          },
          developers: [],
          name: 'Control Ultimated Edition',
          price: 0,
          slug: 'control-ultimated-edition'
        },
        {
          documentId: '11',
          cover: {
            url: '/uploads/cyberpunk_2077_d5c969894c_3960b5ac21_a8efbf3f15.jpg',
            alternativeText: ''
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
            url: '/uploads/day_of_the_tentacle_remastered_9fff13e2d2_5e0b7a1756.jpg',
            alternativeText: ''
          },
          developers: [],
          name: 'Day of the Tentacle Remastered',
          price: 33,
          slug: 'day-of-the-tentacle-remastered'
        },
        {
          documentId: '13',
          cover: {
            url: '/uploads/deus_ex_mankind_divided_deluxe_edition_ace26a8925_41233d48ce.jpg',
            alternativeText: ''
          },
          developers: [],
          name: 'Deus Ex Mankind Divided Deluxe',
          price: 199,
          slug: 'deus-ex-mankind-divided-deluxe'
        },
        {
          documentId: '20',
          cover: {
            url: '/uploads/diablo_3d0a641157_72b5d92014.jpg',
            alternativeText: ''
          },
          developers: [],
          name: 'Diablo',
          price: 199,
          slug: 'diablo'
        },
        {
          documentId: '19',
          cover: {
            url: '/uploads/cold_waters_2aa88bf86d_78cb1eff22.jpg',
            alternativeText: ''
          },
          developers: [],
          name: 'Cold Waters',
          price: 0,
          slug: 'cold-waters'
        }
      ],
      showcase: {
        comingSoonProducts: {
          title: 'Coming Soon',
          highlight: {
            title: 'Borderlands 3',
            description: 'Borderlands is back with lots of new features.',
            buttonLabel: 'Buy now',
            buttonUrl: '/borderlands',
            alignment: Enum_Componentpagehighlight_Alignment.Right,
            background: {
              url: '/uploads/a_plague_tale_requiem_062159c4cc_5f80dc6be1_423db60ccf.jpg',
              alternativeText: ''
            },
            floatImg: {
              alternativeText: '',
              url: '',
              __typename: 'UploadFile'
            }
          }
        }
      }
    }
  })
})
