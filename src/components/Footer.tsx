import { Phone, Mail, Instagram } from "lucide-react";
import ribbonIcon from "@/assets/purple-ribbon.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-deep to-accent text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={ribbonIcon} alt="CRADLE RUN" className="w-12 h-12" />
              <div>
                <div className="font-bebas text-2xl">CRADLE RUN™</div>
                <div className="text-sm opacity-80">2026 – PURPLE MILE</div>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Every season, a new fight. Same road. Rallying across Kenya to create awareness and drive change.
            </p>
          </div>
          
          {/* Partners */}
          <div>
            <h3 className="font-bebas text-xl mb-4">SEASON 1 PARTNERS</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                Byblos
              </li>
            </ul>
          </div>
          
          {/* Contact & Emergency */}
          <div>
            <h3 className="font-bebas text-xl mb-4">CONTACT & SUPPORT</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <div>
                  <div className="font-semibold">GBV Hotline</div>
                  <a href="tel:1195" className="opacity-90 hover:opacity-100">1195 (Toll-Free)</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <div>
                  <div className="font-semibold">Event Info</div>
                  <a href="mailto:info@cradlerun.co.ke" className="opacity-90 hover:opacity-100">info@cradlerun.co.ke</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4" />
                <div>
                  <div className="font-semibold">Follow the Journey</div>
                  <a href="https://instagram.com/cradlerun" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100">
                    @cradlerun #PurpleMile
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm opacity-80 mb-2">
            © 2026 CRADLE RUN™. All rights reserved.
          </p>
          <p className="text-xs opacity-70">
            CRADLE RUN is a registered trademark. Proceeds support Gender-Based Violence awareness and shelter programs across Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
