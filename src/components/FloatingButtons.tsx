import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/51999999999", "_blank");
  };

  const handleTelegram = () => {
    window.open("https://t.me/techassist", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <Button
        size="lg"
        onClick={handleWhatsApp}
        className="rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      <Button
        size="lg"
        onClick={handleTelegram}
        variant="secondary"
        className="rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform"
      >
        <Send className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default FloatingButtons;
