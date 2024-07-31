import "@fortawesome/fontawesome-free/css/all.css";

const EmptyPostulation = ({ notFound }) => {
    return (
        <div class="w-full h-full mt-[7.5%] max-sm:mt-[25%] ">
            <h3 class="max-sm:text-[1.2rem] text-balance text-center textLight text-[1.5rem]">
                {!notFound ? "Lo sentimos, no hay postulaciones para mostrar" : "No hemos podido encontrar esa postulación  "}
            </h3>
        </div>
    )
}

export default EmptyPostulation
