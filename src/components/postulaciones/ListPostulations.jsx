import { Input, Select, SelectItem } from "@nextui-org/react";
import "@fortawesome/fontawesome-free/css/all.css";
import Card from "./Card";
import EmptyPostulation from "./EmptyPostulation.jsx";
import { sortPostulations } from "../../utils/sortPostulations.ts";
import { optionsSelects } from "../../data/optionsSelects.ts";
import { useEffect, useState } from "react";
import { filterPostulations } from "../../utils/filterPostulations.ts";

export default function ListPostulations({
    localPostulations,
    setLocalPostulations,
    handleSubmit,
    dataPostulation,
    setDataPostulation,
    errorSubmit,
    messageSuccess,
    handleSearch,
    valueText,
    notFound
}) {

    const { optionsSort, optionsCharge, optionsState } = optionsSelects;
    const [localDisabled, setLocalDisabled] = useState(true);
    const [hasFilter, setHasFilter] = useState(false);

    useEffect(() => {
        if (hasFilter) return;
        if (!localPostulations.length) setLocalDisabled(true);
        else setLocalDisabled(false);
    }, [localPostulations, setLocalPostulations]);

    const handleSort = (e) => {
        const { value } = e.target;
        const sorteredPostulations = sortPostulations(value);
        setLocalPostulations(sorteredPostulations);
    };

    const handleCharge = (e) => {
        const { value } = e.target;
        setHasFilter(true);
        const filteredPostulations = filterPostulations(value, "charge");
        setLocalPostulations(filteredPostulations);
    };

    const handleState = (e) => {
        const { value } = e.target;
        setHasFilter(true);
        const filteredPostulations = filterPostulations(value, "state");
        setLocalPostulations(filteredPostulations);
    };

    return (
        <>
            <div className="max-sm:flex-col max-sm:place-items-center flex justify-between place-items-end mt-[2.5%] mb-[5%]">

                <Input
                    value={valueText}
                    onChange={handleSearch}
                    className="w-[30%] max-sm:w-4/5"
                    type="text"
                    variant="underlined"
                    label="Buscar postulación"
                />

                <div className="max-sm:w-full max-sm:grid max-sm:grid-cols-1 max-sm:mt-[4%] flex justify-between w-1/2" >
                    <Select
                        variant="underlined"
                        placeholder="Ordenar por"
                        className={`w-[30%] max-sm:w-full`}
                        isDisabled={localDisabled}
                        onChange={handleSort}
                    >
                        {
                            optionsSort.map(op => (
                                <SelectItem className="max-sm:min-w-[80vw]" key={op}>
                                    {op}
                                </SelectItem>
                            ))
                        }
                    </Select>

                    <Select
                        variant="underlined"
                        placeholder="Cargo"
                        className="w-[30%] max-sm:w-full"
                        onChange={handleCharge}
                        isDisabled={localDisabled}
                    >
                        {
                            optionsCharge.map(op => (
                                <SelectItem key={op}>
                                    {op}
                                </SelectItem>
                            ))
                        }
                    </Select>

                    <Select
                        variant="underlined"
                        placeholder="Estado"
                        className="w-[30%] max-sm:w-full"
                        onChange={handleState}
                        isDisabled={localDisabled}
                    >
                        {
                            optionsState.map(op => (
                                <SelectItem key={op}>
                                    {op}
                                </SelectItem>
                            ))
                        }
                    </Select>
                </div>

            </div>

            {
                localPostulations.length ?
                    <article className="max-sm:mt-[10vh] place-items-center flex justify-between rounded-t-sm w-[75vw] p-[2%] py-[1%] bg-[#b9edfe]" >
                        <p className="max-sm:text-[.8rem] 2xl:text-[1.15rem] w-1/4 text-[#222] text-[.9rem]" >Empresa</p>
                        <p className="max-sm:text-[.8rem] 2xl:text-[1.15rem] w-1/4 text-[#222] text-center text-[.9rem]" >Cargo</p>
                        <p className="max-sm:text-[.8rem] 2xl:text-[1.15rem] w-1/4 text-[#222] text-center text-[.9rem]" >Modalidad</p>
                        <p className="max-sm:text-[.8rem] 2xl:text-[1.15rem] w-1/4 text-[#222] text-right text-[.9rem]" >
                            <span className="max-sm:hidden">Fecha de postulación</span>
                            <span className="max-sm:visible xl:hidden">Fecha</span>
                        </p>
                    </article> : <></>
            }
            <div
                className={`${localPostulations.length && "containerList"} w-[80vw] m-0  mr-auto min-h-[50vh] h-[50vh] max-h-[50vh]`}
                id="container-list"
            >
                {
                    localPostulations.length ?
                        localPostulations.map((post, index) => (
                            <Card
                                id={post.id}
                                index={index}
                                key={index}
                                brandName={post.brandName}
                                link={post.link}
                                typeJob={post.typeJob}
                                date={post.date}
                                mode={post.mode}
                                state={post.state}
                                salary={post.salary}
                                location={post.location}
                                observations={post.observations}
                                handleSubmit={handleSubmit}
                                dataPostulation={dataPostulation}
                                setDataPostulation={setDataPostulation}
                                errorSubmit={errorSubmit}
                                messageSuccess={messageSuccess}
                                setLocalPostulations={setLocalPostulations}
                            />
                        )) : <EmptyPostulation notFound={notFound} />
                }
            </div>
        </>
    )
}
