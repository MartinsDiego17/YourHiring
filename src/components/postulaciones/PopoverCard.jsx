import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import ModalPostulation from "./ModalPostulation";
import { useState } from "react";
import DeleteButton from "./DeleteButton";

const PopoverCard = ({
    id,
    brandName,
    link,
    typeJob,
    date,
    mode,
    state,
    salary,
    location,
    observations,
    handleSubmit,
    dataPostulation,
    setDataPostulation,
    errorSubmit,
    messageSuccess,
    setLocalPostulations
}) => {

    const [openPop, setOpenPop] = useState(false);

    const handleOpen = () => {
        setOpenPop(true);
        setDataPostulation({
            id,
            brandName,
            link,
            typeJob,
            date,
            mode,
            state,
            salary,
            location,
            observations,
        })
    };


    return (
        <Popover placement="right">
            <PopoverTrigger>
                <Button className="max-sm:ml-[2vw] p-0 m-0 bg-[transparent] min-w-[3vw] my-auto" isIconOnly onClick={handleOpen}>
                    <i class="fa-solid fa-list-ul p-0 m-0 2xl:text-[1.3rem] text-[1rem] totalDark "></i>
                </Button>
            </PopoverTrigger>
            <PopoverContent className={`${!openPop ? "hidden" : "visible"} max-sm:w-[80vw] w-[35vw] shadow-2xl`}>
                <div className="px-4 py-2 w-full">

                    <div className="flex justify-between">
                        <h2 className="text-small font-bold flex justify-between place-items-center gap-2">
                            <a href={link} target="_blank" className="flex place-items-center">
                                {brandName} <i class="ml-[10%] fa-solid fa-share"></i>
                            </a>
                        </h2>
                        <ModalPostulation
                            handleSubmit={handleSubmit}
                            dataPostulation={dataPostulation}
                            setDataPostulation={setDataPostulation}
                            errorSubmit={errorSubmit}
                            messageSuccess={messageSuccess}
                            buttonText={"editar postulación"}
                            classIconButton={"fa-solid fa-pen"}
                            closePop={() => setOpenPop(false)}
                        />
                    </div>
                    <p className="text-tiny" >{typeJob}</p>
                    <hr className="my-[3%]" />

                    <h4 className="mb-[2%] font-bold">Fecha de postulación
                        <span className="pb-[.3%] font-normal opacity-90 ml-[2%]">{date.day} / {date.month} / {date.year}</span>
                    </h4>

                    <h4 className="mb-[2%] font-bold">Modalidad de trabajo
                        <span className="pb-[.3%] font-normal opacity-90 ml-[2%]">{mode}</span>
                    </h4>

                    <h4 className="mb-[2%] font-bold">Estado de la postulación
                        <span className="pb-[.3%] font-normal opacity-90 ml-[2%]">{state}</span>
                    </h4>

                    <h4 className="mb-[2%] font-bold">Salario
                        <span className="pb-[.3%] font-normal opacity-90 ml-[2%]">
                            {
                                salary ? `$${salary}` : "no indicado"
                            }
                        </span>
                    </h4>

                    <h4 className="mb-[2%] font-bold">Ubicación
                        <span className="pb-[.3%] font-normal opacity-90 ml-[2%]">
                            {
                                location ? `${location}` : "no indicada"
                            }
                        </span>
                    </h4>

                    <h4 className="mb-[2%] font-bold">Observaciones
                        <span className="pb-[.3%] font-normal opacity-90 ml-[2%]">
                            {
                                observations ? `${observations}` : "sin observaciones"
                            }
                        </span>
                    </h4>

                    <div className="flex justify-end">
                        <DeleteButton
                            setOpenPop={setOpenPop}
                            id={dataPostulation.id}
                            setLocalPostulations={setLocalPostulations}
                        />
                    </div>

                </div>
            </PopoverContent>
        </Popover>
    );
}

export default PopoverCard;