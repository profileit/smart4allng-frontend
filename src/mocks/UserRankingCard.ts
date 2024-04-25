import { UserRankingCard } from "src/app/shared/interfaces/UserRankingCard";

export const UserRankingCardMock: UserRankingCard[] = [
  {
    name: 'Smart4Play',
    totalPoints: '310',
    categories: [
        {
            id: 0,
            name: 'Seller',
            skillLevel: [
                {
                    id: 10,
                    name: 'Newbie',
                    maxPoints: 150,
                    points: 20
                },
                {
                    id: 20,
                    name: 'Skilled',
                    maxPoints: 150,
                    points: 0
                },
                {
                    id: 30,
                    name: 'Master',
                    maxPoints: 150,
                    points: 0
                },
                {
                    id: 40,
                    name: 'Pro',
                    maxPoints: 150,
                    points: 0
                }
            ],
        },
        {
            id: 1,
            name: 'Communicator',
            skillLevel: [
                {
                    id: 10,
                    name: 'Newbie',
                    maxPoints: 150,
                    points: 35
                },
                {
                    id: 20,
                    name: 'Skilled',
                    maxPoints: 150,
                    points: 0
                },
                {
                    id: 30,
                    name: 'Master',
                    maxPoints: 150,
                    points: 0
                },
                {
                    id: 40,
                    name: 'Pro',
                    maxPoints: 150,
                    points: 0
                }
            ],
        },
        {
            id: 3,
            name: 'Headhunter',
            skillLevel: [
                {
                    id: 10,
                    name: 'Newbie',
                    maxPoints: 150,
                    points: 35
                },
                {
                    id: 20,
                    name: 'Skilled',
                    maxPoints: 150,
                    points: 0
                },
                {
                    id: 30,
                    name: 'Master',
                    maxPoints: 150,
                    points: 0
                },
                {
                    id: 40,
                    name: 'Pro',
                    maxPoints: 150,
                    points: 0
                }
            ],
        }
    ]
  },
  {
    name: 'ProfilePlay',
    totalPoints: '430',
    categories: [
        {
            id: 0,
            name: 'Teacher and Learner',
            
            skillLevel: [
                {
                    id: 10,
                    name: 'Newbie',
                    maxPoints: 150,
                    points: 150
                },
                {
                    id: 20,
                    name: 'Skilled',
                    maxPoints: 150,
                    points: 150
                },
                {
                    id: 30,
                    name: 'Master',
                    maxPoints: 150,
                    points: 30
                },
                {
                    id: 40,
                    name: 'Pro',
                    maxPoints: 150,
                    points: 0
                }
            ],
        },
        {
            id: 1,
            name: 'Writer',
            skillLevel: [
                {
                    id: 10,
                    name: 'Newbie',
                    maxPoints: 150,
                    points: 35
                },
                {
                    id: 20,
                    name: 'Skilled',
                    maxPoints: 150,
                    points: 0
                },
                {
                    id: 30,
                    name: 'Master',
                    maxPoints: 150,
                    points: 0
                },
                {
                    id: 40,
                    name: 'Pro',
                    maxPoints: 150,
                    points: 0
                }
            ],
        },
        {
            id: 3,
            name: 'Headhunter',
            skillLevel: [
                {
                    id: 10,
                    name: 'Skilled',
                    maxPoints: 300,
                    points: 225
                },
                // {
                //     id: 10,
                //     name: 'Newbie',
                //     maxPoints: 150,
                //     points: 150
                // },
                // {
                //     id: 20,
                //     name: 'Skilled',
                //     maxPoints: 150,
                //     points: 75
                // },
                // {
                //     id: 30,
                //     name: 'Master',
                //     maxPoints: 150,
                //     points: 0
                // },
                // {
                //     id: 40,
                //     name: 'Pro',
                //     maxPoints: 150,
                //     points: 0
                // }
            ],
        }
    ]
  }
]


