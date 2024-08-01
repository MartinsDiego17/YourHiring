import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { deletePostulation } from "../../utils/deletePostulation";
import { getPostulations } from "../../utils/getPostulations";

interface DeleteButtonProps {
    setOpenPop: (arg: boolean) => void;
    id: string
    setLocalPostulations: (arg: any) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ setOpenPop, id, setLocalPostulations }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleLocalOpen = (fn: () => void) => {
        setOpenPop(false)
        fn();
    }

    const handleDelete = () => {
        deletePostulation(id);
        setLocalPostulations(getPostulations());
    };

    return (
        <>
            <Button
                isIconOnly
                onPress={() => handleLocalOpen(onOpen)}
                className={`2xl:text-[1.1rem]`}
                color="danger"
                variant="flat"
            >
                <i className={`fa-solid fa-trash  max-sm:text-[.9rem] 2xl:text-[1.1rem]`}></i>
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Eliminar postulación</ModalHeader>
                            <ModalBody>
                                <p>
                                    ¿Estás segura/o de querer eliminar esta postulación?
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                                <Button color="primary" onClick={handleDelete} onPress={onClose}>
                                    Eliminar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default DeleteButton;