import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Montserrat, Open_Sans } from "@next/font/google";
import clsx from "clsx";

const montserrat = Montserrat({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

import { api } from "../utils/api";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component
        className={clsx(openSans.className, montserrat.className)}
        {...pageProps}
      />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
