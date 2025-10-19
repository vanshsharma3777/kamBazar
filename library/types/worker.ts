import {User} from "@prisma/client"

export interface Worker {
  id: number;
  name: string;
  mobileNumber: string;
  profilePhoto: string | null;
  photo: string | null;
  video: string | null;
  dailyWage: number | 0;
  address: string | null;
  rating: number | null;
  occupation: string | null;
  feedback: string | null;
  pastDeals: string[];
  presentDeals: string[];
  age: number;
  verified: boolean;
  User: User[];
  createdAt: Date;
  updatedAt: Date;
}
