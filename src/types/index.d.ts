export type Module = {
  title: string;
  materials: {
    title: string;
    type: "video";
    duration: string;
  }[];
};

export type Reviewer = {
  account: {
    id: string;
    name: string;
    status: string;
    profileUrl: string;
  };
  text: string;
  rating: number;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  image: { url: string; alt: string };
  instructors: Instructor[];
  price: {
    original: number;
    discounted: number;
    discount_percentage: number;
  };
  rating: {
    average: number;
    ratingCount: number;
  };
  modules: Module[];
  reviews: Reviewer[];
  features: {
    title: string;
    items: { iconUrl: string; text: string }[];
  }[];
};

export type User = {
  id: string;
  email: string;
  password: string;
  phoneCountry: string;
  phoneNumber: string;
  fullname: string;
};

export type Instructor = {
  id: string;
  name: string;
  position: string;
  company: string;
  description: string;
  profileUrl: string;
};

export type CreateUserInput = Omit<User, "id"> & { confirmPassword: string };
export type UpdateUserInput = Partial<CreateUserInput>;

export type Session = {
  user: User;
  token: string; // fake token
};
