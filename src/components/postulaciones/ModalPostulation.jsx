import "@fortawesome/fontawesome-free/css/all.css";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Spinner } from "@nextui-org/react";
import FieldsModal from "./FieldsModal";
import { updatePostulation } from "../../utils/updatePostulation";
import { updateStorage } from "../../utils/updateStorage";
import ModalDelete from "./ModalDelete";

const ModalPostulation = ({
    handleSubmit,
    dataPostulation,
    setDataPostulation,
    errorSubmit,
    messageSuccess,
    buttonText,
    classIconButton,
    closePop,
    localPostulations,
    setLocalPostulations,
    emptyList,
    setEmptyList
}) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const handleOpen = (fn) => {
        if (typeof closePop !== "function") {
            setDataPostulation({
                id: "1",
                brandName: "",
                link: "",
                typeJob: "",
                date: {
                    day: "",
                    month: "",
                    year: ""
                },
                mode: "",
                state: "",
                salary: null,
                location: "",
                observations: ""
            })
        }
        fn();
        closePop();
    };

    const handleClose = (fn) => {
        fn();
    }

    const newHandleSubmit = (fn) => {
        const createOrUpdate = typeof closePop === "function" ? updatePostulation : updateStorage;
        handleSubmit(fn, createOrUpdate);
    }

    return (
        <div className="w-1/2 max-sm:w-full flex justify-end place-items-center max-sm:flex-col gap-x-[5%]" >
            <Button onPress={() => handleOpen(onOpen)} className={`
                ${typeof closePop === "function" && "max-sm:ml-auto"}
                max-sm:my-[4%] 2xl:text-[1.1rem] buttonDefault rounded-full`} >{buttonText} <i class={`iconAwesome ${classIconButton}`}></i></Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                id="modalPostulation"
                className="min-w-[70vw] absolute"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Información de la postulación</ModalHeader>
                            <ModalBody>
                                <FieldsModal
                                    setDataPostulation={setDataPostulation}
                                    dataPostulation={dataPostulation}
                                />
                            </ModalBody>
                            <h4 className={`${errorSubmit && "opacity-100"} ${messageSuccess && "hidden"} opacity-0 text-[#ff2323] text-right mr-[3%]`} >
                                Ha ocurrido un error al {typeof closePop === "function" ? "editar" : "ingresar"} la postulación, <br />por favor inténtalo nuevamente
                            </h4>
                            <h4 className={`${!messageSuccess && "hidden"} flex justify-end text-[#33964f] text-right mr-[3%]`} >
                                Haz {typeof closePop === "function" ? "editado" : "ingresado"} la postulación correctamente <Spinner className="ml-[15px]" color="success" />
                            </h4>
                            <ModalFooter className="mt-[1%]" >
                                <Button color="danger" variant="flat" onPress={() => handleClose(onClose)}>
                                    Cerrar
                                </Button>
                                <Button className="buttonDefault" onPress={() => newHandleSubmit(onClose)}>
                                    Confirmar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            {
                typeof closePop !== "function" &&
                <ModalDelete
                    localPostulations={localPostulations}
                    setLocalPostulations={setLocalPostulations}
                    setEmptyList={setEmptyList}
                    emptyList={emptyList}
                />
            }
        </div>
    );
}

export default ModalPostulation;