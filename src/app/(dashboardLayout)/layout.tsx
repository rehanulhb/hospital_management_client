import { getCookie } from "@/components/services/auth/tokenHandlers";
import LogoutButton from "@/components/shared/LogoutButton";
import React from "react";

const CommonDashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const accessToken = await getCookie("accessToken");
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto bg-muted/10 p-4 md:p-6">
          {accessToken && <LogoutButton />}
          <div className="max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default CommonDashboardLayout;
