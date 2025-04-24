import { MockedResponse } from '@apollo/client/testing'
import { PRODUCTS } from 'graphql/queries/products'
import { productsLimit } from 'pages/products'
import { ProductsQuery } from 'types/generated'

export const productsResponseMock: MockedResponse<ProductsQuery> = {
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
                    url: '/img/product-test.jpg'
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
              slug: 'the-legend-of-zelda-breath-of-the-wild'
            }
          },
          {
            id: '2',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/product-test.jpg'
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
              slug: 'vampire-the-masquerade-bloodlines'
            }
          },
          {
            id: '1',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/product-test.jpg'
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
              slug: 'wasteland-3-colorado-collection'
            }
          },
          {
            id: '4',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/product-test.jpg'
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
              slug: 'grand-theft-auto-v'
            }
          },
          {
            id: '5',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/product-test.jpg'
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
              slug: 'cyberpunk-2077'
            }
          },
          {
            id: '6',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/product-test.jpg'
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
              slug: 'the-elder-scrolls-v-skyrim'
            }
          },
          {
            id: '7',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/product-test.jpg'
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
              slug: 'assassins-creed-valhalla'
            }
          },
          {
            id: '8',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: ''
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
              slug: 'final-fantasy-xv'
            }
          },
          {
            id: '9',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/img/product-test.jpg'
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
              slug: 'half-life-alyx'
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
