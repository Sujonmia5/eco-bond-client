import React from "react";
import PublicNavbar from "../../components/shared/PublicNavbar";
import PublicFooter from "@/components/shared/PublicFooter";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <PublicNavbar />
      {children}
      <PublicFooter />
    </div>
  );
};

export default PublicLayout;
