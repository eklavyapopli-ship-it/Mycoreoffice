import type { Metadata } from "next";
import LocationsClient from "./locations-client";

export const metadata: Metadata = {
  title: "Prime Virtual Office Locations Across India | MyCoreOffice",
  description: "Get a professional business address for GST registration & company formation across Delhi, Noida, Gurgaon, Mumbai, Bangalore & more. Enquire now!",
  alternates:{
    canonical:"https://mycoreoffice.com/locations"
  },
  keywords: [
    "virtual office address for gst registration",
    "virtual office address for company registration",
    "virtual office address in Delhi",
    "virtual office address in Noida",
    "virtual office address in gurgaon",
    "virtual office address in banglore",
    "virtual office address in Mumbai for gst registration",
    "virtual office address in rohini",
    "virtual office address in pitampura",
    "virtual office address in Hyderabad",
    "virtual office address in Ahmedabad",
    "virtual office address in Chennai",
    "virtual office address in chandigarh",
    "virtual office address in himachal",
    "virtual office address in jammu",
    "virtual office address in Delhi for gst registration",
    "virtual office address in kolkata",
    "virtual office address in Navi Mumbai",
    "virtual office address in Ranchi",
    "virtual office address in goa",
  ],
};

export default function LocationsPage() {
  return <LocationsClient />;
}