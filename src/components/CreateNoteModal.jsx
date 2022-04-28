import {
  Modal,
  Button,
  IconButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
  Textarea,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const CreateNoteModal = ({ handleSaveNote }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [title, setTitle] = useState("");
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const handleHeadingChange = (e) => {
    setHeading(e.target.value);
    console.log(heading);
  };
  const handleBodyChange = (e) => {
    setContent(e.target.value);
    console.log(content);
  };

  const saveNote = () => {
    handleSaveNote(title, heading, content);
    setTitle("");
    setHeading("");
    setContent("");
    toast({
      title: "Note added",
      description: "Note added successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <>
      <IconButton
        colorScheme={useColorModeValue("purple", "orange")}
        variant="solid"
        position="fixed"
        bottom={0}
        right={0}
        m="35px 25px"
        onClick={onOpen}
        size="lg"
        icon={<FiPlus />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                placeholder="Your note title"
                value={title}
                onChange={handleTitleChange}
              />
              <FormLabel>Heading</FormLabel>
              <Input
                type="text"
                placeholder="Your note header"
                mb="1rem"
                value={heading}
                onChange={handleHeadingChange}
              />
              <Textarea
                placeholder="Start typing sth"
                value={content}
                onChange={handleBodyChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme={useColorModeValue("purple", "orange")}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              variant="ghost"
              colorScheme={useColorModeValue("purple", "orange")}
              onClick={saveNote}
            >
              Create note
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateNoteModal;
