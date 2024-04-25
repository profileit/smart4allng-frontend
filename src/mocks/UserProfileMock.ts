import { UserProfile } from "src/app/shared/interfaces/UserProfile";

export const UserProfileMock: UserProfile = {
  id: 1,
  name: 'John Doe',
  email: 'john@doe.com',
  company: 'Profile',
  position: 'CEO',
  imageUrl: require('../_mocks/assets/user_default.jpg'),
  role: 'Executive',
};
