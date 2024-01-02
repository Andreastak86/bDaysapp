import React, { useState } from "react";

const PersonCard = ({ name, birthDate }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const calculateAge = (birthDate) => {
        try {
            const today = new Date();
            const [day, month, year] = birthDate.split("/");
            const birthDateObj = new Date(`${month}/${day}/${year}`);

            if (isNaN(birthDateObj.getTime())) {
                throw new Error(`Invalid date: ${birthDate}`);
            }

            let age = today.getFullYear() - birthDateObj.getFullYear();
            const monthDiff = today.getMonth() - birthDateObj.getMonth();

            if (
                monthDiff < 0 ||
                (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
            ) {
                age--;
            }

            return age;
        } catch (error) {
            console.error(`Error calculating age: ${error.message}`);
            return "Error";
        }
    };
    const calculateDaysUntilBirthday = (birthDate) => {
        try {
            const today = new Date();
            const [day, month] = birthDate.split("/");

            // Create a birthday date for the current year
            const birthdayThisYear = new Date(
                today.getFullYear(),
                month - 1,
                day
            );

            // If the birthday has already occurred this year, calculate for next year
            const nextBirthday =
                today > birthdayThisYear
                    ? new Date(today.getFullYear() + 1, month - 1, day)
                    : birthdayThisYear;

            const daysUntilBirthday = Math.ceil(
                (nextBirthday - today) / (1000 * 60 * 60 * 24)
            );

            return daysUntilBirthday;
        } catch (error) {
            console.error(
                `Error calculating days until birthday: ${error.message}`
            );
            return "Error";
        }
    };

    return (
        <div
            className={`max-w-sm rounded overflow-hidden shadow-lg m-4 ${
                isExpanded ? "expand" : ""
            }`}
            onClick={toggleExpand}
        >
            <div
                className={`expand-card-inner border-double border-4 border-[#DAA49A] rounded bg-[#A9BCD0]  ${
                    isExpanded ? "expanded" : ""
                }`}
            >
                <div className='expand-card-front '>
                    <div className='px-6 py-4'>
                        <div className='font-bold text-2xl mb-2 text-center'>
                            {name}
                        </div>
                        <p className='text-gray-700 text-base'>
                            Født: {birthDate}
                        </p>
                        <p className='text-gray-700 text-base text-center font-bold'>
                            Alder: {calculateAge(birthDate)} år
                        </p>
                    </div>
                </div>
                <div className='expand-card-back '>
                    <div className='px-10 py-4 text-center'>
                        <p className=' font-bold text-2xl mb-2 text-center'>
                            {name}
                        </p>
                        Blir {calculateAge(birthDate) + 1} år <br /> om{" "}
                        {calculateDaysUntilBirthday(birthDate)} dager
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PersonCard;
