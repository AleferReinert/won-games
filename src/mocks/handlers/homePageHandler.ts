import { graphql, HttpResponse } from 'msw'

export const homePageHandler = graphql.query('PageHome', () => {
  return HttpResponse.json({
    data: {
      banners: {
        data: [
          {
            id: '3',
            attributes: {
              img: {
                data: {
                  attributes: {
                    url: '/uploads/a_plague_tale_requiem_122835ed18_2bc808cc72.jpg',
                    alternativeText: null
                  }
                }
              },
              title: 'banner 1',
              description: null,
              button: null,
              ribbon: null
            }
          },
          {
            id: '4',
            attributes: {
              img: {
                data: {
                  attributes: {
                    url: '/uploads/a_plague_tale_requiem_c2fa2068cf_8dddebe550.jpg',
                    alternativeText: null
                  }
                }
              },
              title: 'banner 2',
              description: null,
              button: null,
              ribbon: null
            }
          }
        ]
      },
      newProducts: {
        data: [
          {
            id: '16',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/uploads/alien_isolation_collection_40da70d5f4_132bd56a61_17e46b3b89.jpg',
                    alternativeText: null
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'Alien: Isolation - The Collection',
              price: 42.19,
              slug: 'alien-isolation-the-collection',
              promotional_price: null,
              ribbon_label: null
            }
          },
          {
            id: '14',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/uploads/disco_elysium_1e03f55ef4_87ddc3f499.jpg',
                    alternativeText: null
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'Disco Elysium The Ultimate Deluxe Edition',
              price: 56,
              slug: 'disco-elysium',
              promotional_price: 46,
              ribbon_label: null
            }
          }
        ]
      },
      comingSoonProducts: {
        data: [
          {
            id: '18',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/uploads/a_plague_tale_requiem_062159c4cc_5f80dc6be1_423db60ccf.jpg',
                    alternativeText: null
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'A Plague Tale Requiem',
              price: 0,
              slug: 'a-plague-tale-requiem',
              promotional_price: null,
              ribbon_label: null
            }
          },
          {
            id: '15',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/uploads/anno_1404_gold_edition_24be89b878_aad65ddf17_f10bea7885.jpg',
                    alternativeText: null
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'Anno 1404',
              price: 0,
              slug: 'anno-1404',
              promotional_price: null,
              ribbon_label: null
            }
          },
          {
            id: '12',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/uploads/control_ultimate_edition_bd3a596ba4_6e1bb322a0.jpg',
                    alternativeText: null
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'Control Ultimated Edition',
              price: 0,
              slug: 'control-ultimated-edition',
              promotional_price: null,
              ribbon_label: null
            }
          },
          {
            id: '11',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/uploads/cyberpunk_2077_d5c969894c_3960b5ac21_a8efbf3f15.jpg',
                    alternativeText: null
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'Bippinbits'
                    }
                  }
                ]
              },
              name: 'Cyberpunk 2077',
              price: 33,
              slug: 'cyberpunk-2077',
              promotional_price: null,
              ribbon_label: null
            }
          },
          {
            id: '17',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/uploads/day_of_the_tentacle_remastered_9fff13e2d2_5e0b7a1756.jpg',
                    alternativeText: null
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'Day of the Tentacle Remastered',
              price: 33,
              slug: 'day-of-the-tentacle-remastered',
              promotional_price: null,
              ribbon_label: null
            }
          },
          {
            id: '13',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/uploads/deus_ex_mankind_divided_deluxe_edition_ace26a8925_41233d48ce.jpg',
                    alternativeText: null
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'Deus Ex Mankind Divided Deluxe',
              price: 199,
              slug: 'deus-ex-mankind-divided-deluxe',
              promotional_price: null,
              ribbon_label: null
            }
          },
          {
            id: '20',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/uploads/diablo_3d0a641157_72b5d92014.jpg',
                    alternativeText: null
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'Diablo',
              price: 199,
              slug: 'diablo',
              promotional_price: null,
              ribbon_label: null
            }
          },
          {
            id: '21',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/uploads/dome_keeper_867d0efd45_c38c719f2b.jpg',
                    alternativeText: null
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'Dome Keeper',
              price: 0,
              slug: 'dome-keeper',
              promotional_price: null,
              ribbon_label: null
            }
          }
        ]
      },
      freeProducts: {
        data: [
          {
            id: '18',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/uploads/a_plague_tale_requiem_062159c4cc_5f80dc6be1_423db60ccf.jpg',
                    alternativeText: null
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'A Plague Tale Requiem',
              price: 0,
              slug: 'a-plague-tale-requiem',
              promotional_price: null,
              ribbon_label: null
            }
          },
          {
            id: '15',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/uploads/anno_1404_gold_edition_24be89b878_aad65ddf17_f10bea7885.jpg',
                    alternativeText: null
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'Anno 1404',
              price: 0,
              slug: 'anno-1404',
              promotional_price: null,
              ribbon_label: null
            }
          },
          {
            id: '12',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/uploads/control_ultimate_edition_bd3a596ba4_6e1bb322a0.jpg',
                    alternativeText: null
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'Control Ultimated Edition',
              price: 0,
              slug: 'control-ultimated-edition',
              promotional_price: null,
              ribbon_label: null
            }
          },
          {
            id: '21',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/uploads/dome_keeper_867d0efd45_c38c719f2b.jpg',
                    alternativeText: null
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'Dome Keeper',
              price: 0,
              slug: 'dome-keeper',
              promotional_price: null,
              ribbon_label: null
            }
          },
          {
            id: '19',
            attributes: {
              cover: {
                data: {
                  attributes: {
                    url: '/uploads/cold_waters_2aa88bf86d_78cb1eff22.jpg',
                    alternativeText: null
                  }
                }
              },
              developers: {
                data: []
              },
              name: 'Cold Waters',
              price: 0,
              slug: 'cold-waters',
              promotional_price: null,
              ribbon_label: null
            }
          }
        ]
      },
      showcases: {
        data: {
          attributes: {
            newProducts: {
              title: 'New Releases',
              highlight: {
                title: 'Release highlight title',
                description: 'Lorem ipsum',
                buttonLabel: 'Buy now',
                buttonUrl: '/link',
                alignment: 'right',
                background: {
                  data: {
                    attributes: {
                      url: '/uploads/a_plague_tale_requiem_062159c4cc_5f80dc6be1_423db60ccf.jpg',
                      alternativeText: null
                    }
                  }
                },
                floatImg: {
                  data: null
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
                alignment: 'left',
                background: {
                  data: {
                    attributes: {
                      url: '/uploads/a_plague_tale_requiem_062159c4cc_5f80dc6be1_423db60ccf.jpg',
                      alternativeText: null
                    }
                  }
                },
                floatImg: {
                  data: null
                }
              },
              products: {
                data: [
                  {
                    id: '14',
                    attributes: {
                      name: 'Disco Elysium The Ultimate Deluxe Edition',
                      slug: 'disco-elysium',
                      price: 56,
                      promotional_price: 46,
                      ribbon_label: null,
                      developers: {
                        data: []
                      },
                      cover: {
                        data: {
                          attributes: {
                            url: '/uploads/disco_elysium_1e03f55ef4_87ddc3f499.jpg',
                            alternativeText: null
                          }
                        }
                      }
                    }
                  },
                  {
                    id: '13',
                    attributes: {
                      name: 'Deus Ex Mankind Divided Deluxe',
                      slug: 'deus-ex-mankind-divided-deluxe',
                      price: 199,
                      promotional_price: null,
                      ribbon_label: null,
                      developers: {
                        data: []
                      },
                      cover: {
                        data: {
                          attributes: {
                            url: '/uploads/deus_ex_mankind_divided_deluxe_edition_ace26a8925_41233d48ce.jpg',
                            alternativeText: null
                          }
                        }
                      }
                    }
                  }
                ]
              }
            },
            comingSoonProducts: {
              title: 'Coming Soon',
              highlight: {
                title: 'Borderlands 3',
                description: 'Borderlands is back with lots of new features.',
                buttonLabel: 'Buy now',
                buttonUrl: '/borderlands',
                alignment: 'right',
                background: {
                  data: {
                    attributes: {
                      url: '/uploads/a_plague_tale_requiem_062159c4cc_5f80dc6be1_423db60ccf.jpg',
                      alternativeText: null
                    }
                  }
                },
                floatImg: {
                  data: null
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
                alignment: 'left',
                background: {
                  data: {
                    attributes: {
                      url: '/uploads/a_plague_tale_requiem_062159c4cc_5f80dc6be1_423db60ccf.jpg',
                      alternativeText: null
                    }
                  }
                },
                floatImg: {
                  data: null
                }
              }
            }
          }
        }
      }
    }
  })
})
