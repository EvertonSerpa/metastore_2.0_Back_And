import { Prisma } from '@prisma/client';

export class Telephone implements Prisma.TelephoneUncheckedCreateInput {
  id?: string;
  phone_number: string;
  country_code: string;
  region_code: string;
  updateAt?: string | Date;
  createAt?: string | Date;
  userId: string;
}
