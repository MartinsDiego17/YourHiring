import PopoverCard from "./PopoverCard"

const Card = ({
  id,
  index,
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
}) => {

  const truncString = (sword) => {
    sword = sword.split("");
    sword = sword.slice(0, 8);
    sword.push("...");
    return sword.join("");
  }

  return (
    <>
      {
        index === 0 &&
        <article className="max-sm:mt-[10vh] place-items-center flex justify-between rounded-t-sm w-[75vw] p-[2%] py-[1%] bg-[#b9edfe]" >
          <p className="max-sm:text-[.8rem] 2xl:text-[1.15rem] w-1/4 text-[#222] text-[.9rem]" >Empresa</p>
          <p className="max-sm:text-[.8rem] 2xl:text-[1.15rem] w-1/4 text-[#222] text-center text-[.9rem]" >Cargo</p>
          <p className="max-sm:text-[.8rem] 2xl:text-[1.15rem] w-1/4 text-[#222] text-center text-[.9rem]" >Modalidad</p>
          <p className="max-sm:text-[.8rem] 2xl:text-[1.15rem] w-1/4 text-[#222] text-right text-[.9rem]" >
            <span className="max-sm:hidden">Fecha de postulación</span>
            <span className="max-sm:visible xl:hidden">Fecha</span>
          </p>
        </article>
      }
      <article className="flex w-[75vw]">
        <div className="cardContainer  text-[#444] flex hover:bg-[#eee] transition duration-150 justify-between place-items-center bg-[white] p-[2%] py-[1.7%]">
          <h2 className="max-sm:text-[.8rem] 2xl:text-[1.1rem] font-bold w-1/4 cursor-pointer">{brandName}</h2>
          <p className="max-sm:text-[.8rem] 2xl:text-[1.1rem] text-[.9rem] w-1/4 text-center " >
            <span className="max-sm:hidden">{typeJob}</span>
            <span className="max-sm:visible xl:hidden">{truncString(typeJob )}</span>
          </p>
          <p className="max-sm:text-[.8rem] 2xl:text-[1.1rem] text-[.9rem] w-1/4 text-center " >{mode}</p>
          <p className="max-sm:text-[.8rem] 2xl:text-[1.1rem] text-[.9rem] w-1/4 text-right " >{date.day}/{date.month}/{date.year}</p>
        </div>
        <PopoverCard
          id={id}
          index={index}
          brandName={brandName}
          link={link}
          typeJob={typeJob}
          date={date}
          mode={mode}
          state={state}
          salary={salary}
          location={location}
          observations={observations}
          handleSubmit={handleSubmit}
          dataPostulation={dataPostulation}
          setDataPostulation={setDataPostulation}
          errorSubmit={errorSubmit}
          messageSuccess={messageSuccess}
        />
      </article>
    </>
  )
}

export default Card
