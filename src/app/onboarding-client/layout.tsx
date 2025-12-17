import { UIStateProvider } from "./_contexts/ui-state-provider";
import "./layout.css";

export default function OnboardingClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 p-6">
        <UIStateProvider>
          {children}
        </UIStateProvider>
      </main>
    </div>
  );
}
