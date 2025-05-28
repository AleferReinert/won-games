import { MockedResponse } from '@apollo/client/testing'
import { productsLimit } from 'app/(main)/explore/page'
import { PRODUCTS } from 'graphql/queries/products'

export const productsResponseMock: MockedResponse = {
  request: {
    query: PRODUCTS,
    variables: {
      limit: productsLimit,
      filters: { price: {}, and: [] }
    }
  },
  result: {
    data: {
      products: {
        data: [
          {
            id: '3',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/test/product.jpg',
                    alternativeText: ''
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'Troika Games'
                    }
                  }
                ]
              },
              name: 'The Legend of Zelda: Breath of the Wild',
              price: 24,
              slug: 'the-legend-of-zelda-breath-of-the-wild',
              promotional_price: null,
              ribbon_label: ''
            }
          },
          {
            id: '2',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/test/product.jpg',
                    alternativeText: 'Vampire: The Masquerade – Bloodlines'
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'Troika Games'
                    }
                  }
                ]
              },
              name: 'Vampire: The Masquerade – Bloodlines',
              price: 99,
              slug: 'vampire-the-masquerade-bloodlines',
              promotional_price: null,
              ribbon_label: ''
            }
          },
          {
            id: '1',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/test/product.jpg',
                    alternativeText: ''
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'inXile Entertainment'
                    }
                  }
                ]
              },
              name: 'Wasteland 3 Colorado Collection',
              price: 49,
              slug: 'wasteland-3-colorado-collection',
              promotional_price: null,
              ribbon_label: ''
            }
          },
          {
            id: '4',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/test/product.jpg',
                    alternativeText: ''
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'Rockstar Games'
                    }
                  }
                ]
              },
              name: 'Grand Theft Auto V',
              price: 60,
              slug: 'grand-theft-auto-v',
              promotional_price: 30,
              ribbon_label: '50% off'
            }
          },
          {
            id: '5',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/test/product.jpg',
                    alternativeText: ''
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'CD Projekt'
                    }
                  }
                ]
              },
              name: 'Cyberpunk 2077',
              price: 10,
              slug: 'cyberpunk-2077',
              promotional_price: null,
              ribbon_label: ''
            }
          },
          {
            id: '6',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/test/product.jpg',
                    alternativeText: ''
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'Bethesda'
                    }
                  }
                ]
              },
              name: 'The Elder Scrolls V: Skyrim',
              price: 30,
              slug: 'the-elder-scrolls-v-skyrim',
              promotional_price: null,
              ribbon_label: 'New'
            }
          },
          {
            id: '7',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/test/product.jpg',
                    alternativeText: ''
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'Ubisoft'
                    }
                  }
                ]
              },
              name: "Assassin's Creed Valhalla",
              price: 40,
              slug: 'assassins-creed-valhalla',
              promotional_price: null,
              ribbon_label: ''
            }
          },
          {
            id: '8',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '',
                    alternativeText: ''
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'Square Enix'
                    }
                  }
                ]
              },
              name: 'Final Fantasy XV',
              price: 35,
              slug: 'final-fantasy-xv',
              promotional_price: null,
              ribbon_label: ''
            }
          },
          {
            id: '9',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/test/product.jpg',
                    alternativeText: ''
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'Valve'
                    }
                  }
                ]
              },
              name: 'Half-Life: Alyx',
              price: 50,
              slug: 'half-life-alyx',
              promotional_price: null,
              ribbon_label: ''
            }
          }
        ],
        meta: {
          pagination: {
            total: 12
          }
        }
      }
    }
  }
}
