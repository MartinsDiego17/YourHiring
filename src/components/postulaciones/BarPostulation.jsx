import "@fortawesome/fontawesome-free/css/all.css";
import ModalPostulation from "./ModalPostulation";
import ListPostulations from "./ListPostulations";
import { useEffect, useState } from "react";
import { getPostulations } from "../../utils/getPostulations";
import { validationsForm } from "../../utils/validationsForm";
import { searchPostulation } from "../../utils/searchPostulation";
const postulations = getPostulations();

const BarPostulation = () => {

    const [localPostulations, setLocalPostulations] = useState(postulations);
    const [emptyList, setEmptyList] = useState(false);
    const [dataPostulation, setDataPostulation] = useState({
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
    });
    const [errorSubmit, setErrorSubmit] = useState(false);
    const [messageSuccess, setMessageSuccess] = useState(false);
    const [valueText, setValueText] = useState("");
    const [notFound, setNotFound] = useState(false);

    const handleSearch = (e) => {
        const { value } = e.target;
        setValueText(value);
        const foundPost = searchPostulation(value);
        setLocalPostulations(foundPost);
        if (value.length < 4) {
            setLocalPostulations(getPostulations());
            setNotFound(false);
        }
        else if (value.length >= 4 && !foundPost.length && localPostulations.length) setNotFound(true);
    };

    const handleSubmit = (fn, createOrUpdate) => {
        const hasErrorData = validationsForm(dataPostulation);

        if (!hasErrorData) {
            const updatedPostulations = getPostulations();
            setLocalPostulations(updatedPostulations);
            setDataPostulation({
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
            });
            setErrorSubmit(false);
            setMessageSuccess(true);
            createOrUpdate(dataPostulation);
            setTimeout(() => {
                fn();
                setMessageSuccess(false);
            }, 2000);
        } else {
            setErrorSubmit(true);
        }
    };

    useEffect(() => {
        if (valueText.length > 4) return;
        setLocalPostulations(getPostulations());
    }, [errorSubmit, setErrorSubmit, dataPostulation, setDataPostulation, messageSuccess, setMessageSuccess]);

    return (
        <>
            <div className="containerList flex max-sm:flex-col justify-between place-items-center" >
                <h2 class="max-sm:text-[1.5rem] 2xl:text-[3rem] totalDark text-[2rem] font-extrabold">
                    Postulaciones <span className="font-light opacity-50 max-sm:text-[1rem] 2xl:text-[2rem] text-[1.5rem]" >({getPostulations().length})</span>
                </h2>
                <ModalPostulation
                    handleSubmit={handleSubmit}
                    dataPostulation={dataPostulation}
                    setDataPostulation={setDataPostulation}
                    errorSubmit={errorSubmit}
                    messageSuccess={messageSuccess}
                    setErrorSubmit={setErrorSubmit}
                    setMessageSuccess={setMessageSuccess}
                    buttonText={"agregar postulación"}
                    classIconButton={"fa-solid fa-plus"}
                    localPostulations={localPostulations}
                    setLocalPostulations={setLocalPostulations}
                    emptyList={emptyList}
                    setEmptyList={setEmptyList}
                />
            </div>
            <ListPostulations
                localPostulations={localPostulations}
                setLocalPostulations={setLocalPostulations}
                emptyList={emptyList}
                setEmptyList={setEmptyList}
                handleSubmit={handleSubmit}
                dataPostulation={dataPostulation}
                setDataPostulation={setDataPostulation}
                errorSubmit={errorSubmit}
                messageSuccess={messageSuccess}
                handleSearch={handleSearch}
                valueText={valueText}
                notFound={notFound}
            />
        </>
    )
}

export default BarPostulation