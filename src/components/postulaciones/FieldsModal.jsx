import { Input, Select, SelectItem, DatePicker, Textarea } from "@nextui-org/react"
import { fieldsPostulations } from "../../data/fieldsPostulations";
const { selectJobOptions, modalityOptions, stateOptions } = fieldsPostulations;
import { getLocalTimeZone, today } from "@internationalized/date";

const FieldsModal = ({ dataPostulation, setDataPostulation }) => {

    const handleData = (e) => {

        if (e.day === undefined) {
            const { name, value } = e.target;
            setDataPostulation({
                ...dataPostulation,
                [name]: value
            })
        }

        else {
            const { day, month, year } = e;
            setDataPostulation({
                ...dataPostulation,
                date: {
                    day,
                    month,
                    year
                }
            })
        }
    }

    return (
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
            <Input
                name="brandName"
                value={dataPostulation.brandName}
                onChange={handleData}
                autoFocus
                label={"Nombre de la empresa"}
                placeholder={"Ingresar el nombre de la empresa"}
                variant="bordered"
            />

            <Input
                name="link"
                value={dataPostulation.link}
                onChange={handleData}
                autoFocus
                label={"Link de la postulación"}
                placeholder={"Ingresar el link de la postulación"}
                variant="bordered"
            />

            <Select
                name="typeJob"
                value={dataPostulation.typeJob}
                onChange={handleData}
                isRequired
                label="Cargo del trabajo"
                placeholder="Selecciona el cargo"
                defaultSelectedKeys={[!dataPostulation.typeJob.length ? "" : dataPostulation.typeJob]}
            >
                {selectJobOptions.map((optionWork) => (
                    <SelectItem key={optionWork}>
                        {optionWork}
                    </SelectItem>
                ))}
            </Select>

            <DatePicker
                name="date"
                label="Fecha de la postulación"
                onChange={handleData}
                defaultValue={today(getLocalTimeZone()).add({ days: 1 })}
            />


            <Select
                name="mode"
                value={dataPostulation.mode}
                onChange={handleData}
                isRequired
                label="Modalidad del trabajo"
                placeholder="Selecciona la modalidad"
                defaultSelectedKeys={[!dataPostulation.mode.length ? "" : dataPostulation.mode]}
            >
                {modalityOptions.map((optionModality) => (
                    <SelectItem key={optionModality} >
                        {optionModality}
                    </SelectItem>
                ))}
            </Select>

            <Select
                name="state"
                value={dataPostulation.state}
                onChange={handleData}
                isRequired
                label="Estado de la postulación"
                placeholder="Selecciona el estado"
                defaultSelectedKeys={[!dataPostulation.state.length ? "" : dataPostulation.state]}
            >
                {stateOptions.map((optionState) => (
                    <SelectItem key={optionState} >
                        {optionState}
                    </SelectItem>
                ))}
            </Select>

            <Input
                name="salary"
                value={dataPostulation.salary}
                onChange={handleData}
                type="number"
                label="Salario (opcional)"
                placeholder="0.00"
                labelPlacement="outside"
                startContent={
                    <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">$ </span>
                    </div>
                }
            />

            <Input
                name="location"
                value={dataPostulation.location}
                onChange={handleData}
                autoFocus
                label={"Ubicación del trabajo (opcional)"}
                placeholder={"Ingresar la ubicación del trabajo"}
                variant="bordered"
            />

            <Textarea
                value={dataPostulation.observations}
                onChange={handleData}
                name="observations"
                key="underlined"
                variant="underlined"
                label="Observaciones (opcionales)"
                labelPlacement="outside"
                placeholder="Ingresar observaciones"
            />

        </div>
    )
}

export default FieldsModal
