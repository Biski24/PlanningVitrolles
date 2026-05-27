import { PrismaClient, ContractType, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();
async function main(){
  await prisma.user.deleteMany();
  const pwd = await bcrypt.hash('Password123!',10);
  await prisma.user.create({data:{email:'manager@planning.local',passwordHash:pwd,role:Role.MANAGER,profile:{create:{firstName:'Alice',lastName:'Manager',color:'#1d4ed8',desiredHoursPerWeek:35,contractType:ContractType.FULL_TIME,defaultAvailability:{monday:['09:00-19:00']}}}}});
  for(let i=1;i<=9;i++) await prisma.user.create({data:{email:`employe${i}@planning.local`,passwordHash:pwd,role:Role.EMPLOYEE,profile:{create:{firstName:`Employe`,lastName:`${i}`,color:'#16a34a',desiredHoursPerWeek:i%2?35:24,contractType:i%3===0?ContractType.APPRENTICESHIP:ContractType.PART_TIME,defaultAvailability:{monday:['09:00-18:00'],tuesday:['09:00-18:00']}}}}});
}
main().finally(()=>prisma.$disconnect());
