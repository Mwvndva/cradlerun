import { X } from "lucide-react"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"

interface MembershipModalProps {
  isOpen: boolean
  onClose: () => void
}

export function MembershipModal({ isOpen, onClose }: MembershipModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bebas text-purple-deep text-center">
            WELCOME TO THE CRADLE RUN FAMILY
          </DialogTitle>
          <DialogDescription className="text-foreground pt-4 space-y-6">
            <p className="text-lg">
              Cradle Run is not a rally. It is not a race. It is not even just a road trip.
            </p>
            <p>
              By paying your entry fee and joining the convoy, you are choosing to become a Lifetime Member of Africa's most exclusive motoring and social-impact community – a private network of high-net-worth individuals, entrepreneurs, creatives, CEOs, celebrities and change-makers who share one thing: they move together.
            </p>
            <p>
              This is your official invitation to something far bigger than five days on the road.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-purple-deep mb-4">What Lifetime Membership means for you</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold">Your Permanent Cradle Run Identification Number</h4>
                  <p className="text-foreground/90 mt-1">
                    You will be assigned a unique lifetime membership number (e.g. 27). This number will appear on:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Your official car door decals every future season</li>
                    <li>All your personalized merch</li>
                    <li>Your participant certificate</li>
                  </ul>
                  <p className="text-foreground/90 mt-2">
                    Lower numbers = earlier joiners. These numbers will never be re-issued.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Access to the Most Valuable Network in Africa</h4>
                  <p className="text-foreground/90 mt-1">
                    The convoy is only the beginning. Every end year, we host the Cradle Run Members-Only Mixer – an ultra-private evening in Nairobi attended only by past and present participants. No guests. No plus-ones. No media. Just the country's most interesting, connected and successful individuals in one room, with open bars, live performances and zero agenda except real conversation.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Priority & Legacy Benefits for Life</h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Lifetime priority entry to every future season (no waiting lists)</li>
                    <li>First access to limited-edition anniversary merch</li>
                    <li>Invitation to exclusive pre-season test drives and route reveals</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <p className="font-medium text-purple-900">
                    One Convoy. One Brotherhood/Sisterhood. Forever.
                  </p>
                </div>

                <p className="text-center text-lg font-medium text-purple-deep pt-4 border-t border-border">
                  This is not a ticket.
                  <br />
                  This is the start of your legacy.
                </p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-6">
          <Button 
            onClick={() => {
              onClose();
              window.open('https://paystack.shop/cradle-run', '_blank');
            }}
            className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-6 text-lg"
          >
            Become a Member Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
