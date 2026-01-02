import "./globals.css";

export const metadata = {
  title: "Thatipamula Sagar | Aspiring Software Engineer & Developer",
  description: "Aspiring Software Engineer with expertise in Data Structures, Algorithms, and OOP. Skilled in Java, SQL, HTML, CSS with hands-on projects and internship experience.",
  keywords: "Software Engineer, Java Developer, Web Developer, Data Structures, Algorithms, Sagar Portfolio",
  authors: [{ name: "Thatipamula Sagar" }],
  openGraph: {
    title: "Thatipamula Sagar | Software Engineer Portfolio",
    description: "Aspiring Software Engineer | Java | Web Development | DSA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thatipamula Sagar | Software Engineer",
    description: "Aspiring Software Engineer | Java | Web Development | DSA",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}

