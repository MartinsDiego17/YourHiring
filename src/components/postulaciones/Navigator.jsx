import { Input, Select, SelectItem, Modal, ModalContent, ModalHeader, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import "@fortawesome/fontawesome-free/css/all.css";
import { emptyStorage } from "../../utils/emptyStorage";

const Navigator = () => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const options = ["Más antigua", "Más reciente"];
    const handleDelete = (fn) => {
        fn();
        emptyStorage();
    };

    return (
        <div className="flex justify-between place-items-end mt-[2.5%] mb-[5%]">

            <Button className="buttonDefault rounded-full" onPress={onOpen}>eliminar postulaciones <i class="iconAwesome fa-solid fa-trash"></i></Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center">
                                ¿Estás seguro de querer eliminar todas las postulaciones que haz ingresado hasta el momento?
                            </ModalHeader>
                            <ModalFooter className="flex justify-center" >
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    cerrar
                                </Button>
                                <Button color="primary" className="buttonDefault" onPress={() => handleDelete(onClose)}>
                                    Si, estoy seguro
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <Input className="w-[30%]" type="text" variant="underlined" label="Buscar postulación" />
            <Select
                variant="underlined"
                placeholder="Ordenar por"
                className="w-[30%]"
            >
                {
                    options.map(op => (
                        <SelectItem key={op}>
                            {op}
                        </SelectItem>
                    ))
                }
            </Select>
        </div>
    )
}

export default Navigator
