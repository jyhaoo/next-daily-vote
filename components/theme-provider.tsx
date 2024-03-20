import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "@/node_modules/next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
