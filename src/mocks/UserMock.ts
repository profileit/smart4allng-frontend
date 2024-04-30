import { User } from "src/app/shared/interfaces/User";


export const User1: User = {
  name: 'John',
  surname: 'Doe',
  role: 'CEO at Company',
  company: 'Profile',
  position: 'CEO',
  avatar: '../../assets/images/user_default.jpg',
};

export const User2: User = {
  name: 'Jane',
  surname: 'Doe',
  role: 'CTO at Company',
  company: 'Profile',
  position: 'CTO',
  avatar: '../../assets/images/user_default.jpg',
};

export const User3: User = {
  name: 'John',
  surname: 'Smith',
  role: 'Developer at Company',
  company: 'Profile',
  position: 'Frontend Developer',
  avatar: '../../assets/images/user_default.jpg',
};

export const User4: User = {
  name: 'Jane',
  surname: 'Smith',
  role: 'Developer at Company',
  company: 'Profile',
  position: 'Backend Developer',
  avatar: '../../assets/images/user_default.jpg',
};

export const User5: User = {
  name: 'Jud',
  surname: 'Smith',
  role: 'Developer at Company',
  company: 'Smart4',
  position: 'Backend Developer',
  avatar: '../../assets/images/user_default.jpg',
};

export const mockedUserList: User[] = [User1, User2, User3, User4, User5];
