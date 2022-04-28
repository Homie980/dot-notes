import { AnimatePresence, motion } from "framer-motion";
import {
  IconButton,
  useColorMode,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  const toast = useToast();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={() =>
          toast({
            title: "Toggle color mode.",
            description: localStorage.getItem("chakra-ui-color-mode"),
            status: "info",
            duration: 3000,
            isClosable: true,
          })
        }
      >
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="Toggle Theme"
          colorScheme={useColorModeValue("purple", "orange")}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
