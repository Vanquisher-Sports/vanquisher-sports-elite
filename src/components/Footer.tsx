import logo from "@/assets/logo.png";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Summer Camp", href: "#summer-camp" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="section-container py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <img src={logo} alt="Vanquisher Sports" className="h-14 w-auto mb-3" />
          <p className="text-sm text-muted-foreground mt-3 max-w-xs leading-relaxed">
            Building India's next generation of badminton champions through structured coaching and competitive exposure.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4 font-sans">Quick Links</h4>
          <div className="space-y-2">
            {footerLinks.map((l) => (
              <a key={l.href} href={l.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4 font-sans">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>+91 9611691277</p>
            <p>Vanquishersportsevents@gmail.com</p>
            <p>7A, 4th C Main Road Dr. Vivekananda Layout, Santrupthi Nagar, Sankranthi Layout, near Naturals Ice Cream, JP Nagar 7th Phase, Arekere, Bengaluru, Karnataka 560078</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-10 pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vanquisher Sports. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
