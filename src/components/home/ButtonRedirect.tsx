import { Button, Link } from "@nextui-org/react"

const ButtonRedirect = () => {

    const smoothScroll = () => {
        document.querySelector("#postulations")?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <Link className="smooth-scroll mt-[1%]"
            onClick={smoothScroll}>
            <Button onClick={smoothScroll} className="2xl:text-[1.3rem] 2xl:py-[35px] 2xl:px-[40px] extraLight mt-[2%] buttonDefault rounded-full py-[25px] px-[30px] text-[1rem]" >
                Mis postulaciones <i className="iconAwesome fa-solid fa-arrow-right-long"></i>
            </Button>
        </Link>

    )
}

export default ButtonRedirect
