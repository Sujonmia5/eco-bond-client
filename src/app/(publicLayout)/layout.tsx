import React from "react";
import PublicNavbar from "../../components/shared/PublicNavbar";
import PublicFooter from "@/components/shared/PublicFooter";
import Locomotive from "@/lib/LocomotiveProvider";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Locomotive>
      <PublicNavbar />
      {children}
      <PublicFooter />
    </Locomotive>
  );
};

export default PublicLayout;
