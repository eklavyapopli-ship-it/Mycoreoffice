import type { Metadata } from "next";
import OfficeSpaceContent from "./OfficeSpaceContent";

export const metadata: Metadata = {
  title: "Prime Managed Office Space for Rent | MyCoreOffice",
  description: "Premium, IT-enabled office spaces for teams of all sizes. Flexible plans, high-speed WiFi, ergonomic furniture & on-site support. Book a tour today!",
  alternates:{
    canonical:"https://mycoreoffice.com/office-space"
  }
};

export default function OfficeSpacePage() {
  return <OfficeSpaceContent />;
}
