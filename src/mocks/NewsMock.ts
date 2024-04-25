import { News } from 'src/app/shared/interfaces/News';
import { mockedUserList } from './UserMock';

export const mockedNewsList: News[] = [
  {
    id: '1',
    title: 'News 1',
    content:
      'Mock new fron server Proident deserunt ipsum in magna ullamco veniam aliqua aliquip non ex anim. Et eiusmod pariatur velit laborum aute sit culpa et minim labore. Est fugiat laborum excepteur nisi deserunt laborum laboris Lorem anim eu duis do cupidatat. Adipisicing aliqua laboris mollit dolor duis incididunt dolor incididunt sit deserunt reprehenderit. Voluptate officia labore excepteur anim incididunt enim culpa ut. Nulla est eu commodo eu ullamco eiusmod cupidatat ex incididunt id consectetur.',
    badges: [
      { text: 'Smart4 Talk', color: 'primary' },
      { text: 'Group: General', color: 'tertiary' },
    ],
    image: 'https://picsum.photos/200/300',
    isNew: true,
    author: mockedUserList[0],
  },
  {
    id: '2',
    title: 'News 2',
    content:
      'Proident deserunt ipsum in magna ullamco veniam aliqua aliquip non ex anim. Et eiusmod pariatur velit laborum aute sit culpa et minim labore. Est fugiat laborum excepteur nisi deserunt laborum laboris Lorem anim eu duis do cupidatat. Adipisicing aliqua laboris mollit dolor duis incididunt dolor incididunt sit deserunt reprehenderit. Voluptate officia labore excepteur anim incididunt enim culpa ut. Nulla est eu commodo eu ullamco eiusmod cupidatat ex incididunt id consectetur.',
    badges: [
      { text: 'Smart4 Talk', color: 'primary' },
      { text: 'Group: General', color: 'tertiary' },
    ],
    image: 'https://picsum.photos/200/300',
    isNew: false,
    author: mockedUserList[1],
  },
  {
    id: '3',
    title: 'News 3',
    content:
      'Proident deserunt ipsum in magna ullamco veniam aliqua aliquip non ex anim. Proident deserunt ipsum in magna ullamco veniam aliqua aliquip non ex anim.',
    badges: [
      { text: 'Smart4 Talk', color: 'primary' },
      { text: 'Group: General', color: 'tertiary' },
    ],
    image: 'https://picsum.photos/200/300',
    isNew: false,
    author: mockedUserList[2],
  },
  {
    id: '4',
    title: 'News 4',
    content:
      'Exercitation culpa occaecat ad ipsum commodo cillum elit aute reprehenderit. Est duis incididunt officia reprehenderit labore enim ipsum ullamco cillum enim ut. Duis adipisicing nostrud adipisicing reprehenderit reprehenderit cillum incididunt voluptate. Sint aute consequat ea aliquip ad pariatur consectetur dolor do. Excepteur voluptate duis do cupidatat. Labore amet dolor est esse sint aliqua quis adipisicing. Exercitation culpa occaecat ad ipsum commodo cillum elit aute reprehenderit. Est duis incididunt officia reprehenderit labore enim ipsum ullamco cillum enim ut. Duis adipisicing nostrud adipisicing reprehenderit reprehenderit cillum incididunt voluptate. Sint aute consequat ea aliquip ad pariatur consectetur dolor do. Excepteur voluptate duis do cupidatat. Labore amet dolor est esse sint aliqua quis adipisicing. Exercitation culpa occaecat ad ipsum commodo cillum elit aute reprehenderit. Est duis incididunt officia reprehenderit labore enim ipsum ullamco cillum enim ut. Duis adipisicing nostrud adipisicing reprehenderit reprehenderit cillum incididunt voluptate. Sint aute consequat ea aliquip ad pariatur consectetur dolor do. Excepteur voluptate duis do cupidatat. Labore amet dolor est esse sint aliqua quis adipisicing.',
    badges: [
      { text: 'Smart4 Talk', color: 'primary' },
      { text: 'Group: General', color: 'tertiary' },
    ],
    image: 'https://picsum.photos/200/300',
    isNew: false,
    author: mockedUserList[3],
  },
  {
    id: '5',
    title: 'News 5',
    content:
      'Proident deserunt ipsum in magna ullamco veniam aliqua aliquip non ex anim. Proident deserunt ipsum in magna ullamco veniam aliqua aliquip non ex anim. Proident deserunt ipsum in magna ullamco veniam aliqua aliquip non ex anim.',
    badges: [
      { text: 'Smart4 Talk', color: 'primary' },
      { text: 'Group: General', color: 'tertiary' },
    ],
    image: 'https://picsum.photos/200/300',
    isNew: false,
    author: mockedUserList[3],
  },
  {
    id: '6',
    title: 'News 6',
    content: 'Proident deserunt ipsum in magna ullamco veniam aliqua aliquip non ex anim.',
    badges: [
      { text: 'Smart4 Talk', color: 'primary' },
      { text: 'Group: General', color: 'tertiary' },
    ],
    image: 'https://picsum.photos/200/300',
    isNew: false,
    author: mockedUserList[3],
  },
];
