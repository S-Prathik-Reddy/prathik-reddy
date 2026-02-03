import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/prathik-sannapureddy/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/S-Prathik-Reddy', label: 'Github' }, 
  { icon: Mail, href: 'mailto:sreddy.prathik@gmail.com', label: 'Email' },
  ];
const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-gradient">Prathik Reddy</span>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in 2025
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full glass-card hover:border-primary/50 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Prathik Reddy SannapuReddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
