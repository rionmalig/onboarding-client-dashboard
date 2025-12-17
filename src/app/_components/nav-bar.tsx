"use client";

const NavBar = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Onboarding Client Review</h1>
            <p className="text-sm text-muted-foreground mt-1">Review and edit AI-extracted website data</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;