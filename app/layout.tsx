import "./globals.css";

export const metadata = {
  title: "Phoolchand Saini – Civil Engineer",
  description:
    "Reliable Civil Engineering, Repair & Consultancy Services. Contact Phoolchand Saini for professional civil work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        {children}
      </body>
    </html>
  );
}
