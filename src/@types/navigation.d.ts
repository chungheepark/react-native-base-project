type Details = {
  id?: number;
  otherParam?: any;
};

type Home = {
  post?: string;
};

type Profile = {
  name?: string;
};

type RootStackParamList = {
  Home: Home;
  Details: Details;
  CreatePost: undefined;
  Profile: Profile;
};
