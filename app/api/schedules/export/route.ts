import { NextResponse } from 'next/server';
import ical from 'ical-generator';
export async function GET(){
  const cal = ical({ name: 'Planning équipe' });
  cal.createEvent({ start: new Date(), end: new Date(Date.now()+2*3600000), summary: 'Exemple créneau', description:'Planning exporté' });
  return new NextResponse(cal.toString(), { headers: { 'content-type':'text/calendar; charset=utf-8','content-disposition':'attachment; filename=planning.ics' } });
}
