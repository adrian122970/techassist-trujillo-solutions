import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FloatingButtons = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/51999999999", "_blank");
  };

  const handleTelegram = () => {
    window.open("https://t.me/techassist", "_blank");
  };

  return (
    <motion.div 
      className="fixed bottom-6 right-6 flex flex-col gap-3 z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          size="lg"
          onClick={handleWhatsApp}
          className="rounded-full w-16 h-16 shadow-2xl hover:shadow-glow transition-all duration-300 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 relative group"
        >
          <MessageCircle className="h-7 w-7" />
          <motion.div 
            className="absolute inset-0 rounded-full bg-green-400/30"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </Button>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          size="lg"
          onClick={handleTelegram}
          className="rounded-full w-16 h-16 shadow-2xl hover:shadow-glow transition-all duration-300 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 relative group"
        >
          <Send className="h-7 w-7" />
          <motion.div 
            className="absolute inset-0 rounded-full bg-blue-400/30"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default FloatingButtons;
