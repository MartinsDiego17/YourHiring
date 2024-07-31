import React from 'react';

interface CardAboutProps {
    classIcon: string;
    title: string;
    paragraph: string;
}

const CardAbout: React.FC<CardAboutProps> = ({ classIcon, title, paragraph }) => {
    return (
        <article className='max-sm:h-[40vh] boxCard bg-white 2xl:p-[30px] text-[#222] h-[50vh] p-[15px] rounded-[15px]'>
            <h1 className="2xl:text-[1.6rem] 2xl:mb-[4% ] font-[700] mb-[2%] textDark flex place-items-center">
                <i
                    className={`2xl:text-[2rem] 2xl:p-[4%] bg-[#b9edfe] rounded-full p-[3%] text-[1.5rem] text-[#0cbceb] mr-[3%] ${classIcon}`}
                ></i>
                <span>{title}</span>
            </h1>
            <p className='2xl:text-[1.2rem] text-[#777]' >{paragraph}</p>
        </article>
    );
};

export default CardAbout;
