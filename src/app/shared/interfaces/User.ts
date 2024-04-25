export interface User {
  name: string;
  surname: string;
  role: string;
  avatar: string;
  company: string;
  positon: string;
}

// This is the interface that the API will return
// Since we don't know which fields can be empty, we're not implementing it
// Until the login endpoint is available

/* export interface User {
  id:               string;
  email:            string;
  uid:              string;
  role:             string;
  firstname:        string;
  lastname:         string;
  owner:            number;
  displayname:      string;
  motto:            string;
  bio:              string;
  skills:           string;
  linkedin_account: string;
  twitter_account:  string;
  mobile:           string;
  phone:            string;
  positon:          string;
  company:          string;
  country:          string;
  language:         string;
  avatar:           string;
  password:         string;
} */
