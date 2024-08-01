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
