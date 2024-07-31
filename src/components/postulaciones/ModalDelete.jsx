import { Modal, ModalContent, ModalHeader, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { emptyStorage } from "../../utils/emptyStorage";
import { getPostulations } from "../../utils/getPostulations";

const ModalDelete = ({
    setLocalPostulations,
    setEmptyList,
    emptyList,
}) => {

    const handleOpenDelete = (fn) => {
        fn();
        if (!getPostulations().length) setEmptyList(true);
    };
    const handleDelete = (fn) => {
        fn();
        emptyStorage();
        setLocalPostulations([]);
    };

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button color="danger" variant="flat" className="2xl:text-[1.1rem] rounded-full" onPress={() => handleOpenDelete(onOpen)}>eliminar postulaciones <i class="fa-solid fa-trash"></i></Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center">
                                {
                                    emptyList ? "No hay postulaciones por eliminar" : "¿Estás seguro de querer eliminar todas las postulaciones que haz ingresado hasta el momento?"
                                }
                            </ModalHeader>
                            <ModalFooter className="flex justify-center" >
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    cerrar
                                </Button>
                                {
                                    !emptyList && <Button color="primary" className="buttonDefault" onPress={() => handleDelete(onClose)}>
                                        Si, estoy seguro
                                    </Button>
                                }
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalDelete
