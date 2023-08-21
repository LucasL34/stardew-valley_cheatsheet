import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-stardew-white text-stardew-black">
        {children}
      </body>
    </html>
  );
}
