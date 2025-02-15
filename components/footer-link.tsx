import Footer from "@/components/ui/footer";

export default function FooterLink() {
    const bottomLinks = [
      { url: "/about-us", text: "About Us" },
      { url: "/code-of-conduct", text: "Code of Conduct" },
      { url: "https://2024.pycon.my", text: "PyCon MY 2024" },
    ];

    return (
      <Footer
        copyright="© 2025 PyCon Malaysia. All rights reserved."
        bottomLinks={bottomLinks}
      />
    );
}