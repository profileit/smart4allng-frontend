import { Ranking } from "src/app/shared/interfaces/Ranking";
import { User1, User2, User3, User4 } from "./UserMock";

export const Top10Mock: Ranking[] = [
  {
    id: 1,
    position: 2,
    points: 324,
    user: User1,
  },
  {
    id: 2,
    position: 1,
    points: 400,
    user: User2,
  },
  {
    id: 3,
    position: 5,
    points: 280,
    user: User3,
  },
  {
    id: 4,
    position: 4,
    points: 299,
    user: User4,
  },
  {
    id: 5,
    position: 3,
    points: 300,
    user: User1,
  },
  {
    id: 6,
    position: 6,
    points: 250,
    user: User1,
  },
  {
    id: 7,
    position: 8,
    points: 213,
    user: User1,
  },
  {
    id: 8,
    position: 7,
    points: 233,
    user: User1,
  },
  {
    id: 9,
    position: 10,
    points: 150,
    user: User1,
  },
  {
    id: 10,
    position: 9,
    points: 199,
    user: User1,
  },
];
