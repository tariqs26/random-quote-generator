import "./globals.css";

export const metadata = {
  title: "Random Quote Generator",
  description: "A random quote generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto p-12 bg-black min-h-screen text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
