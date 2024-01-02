import React from "react";

import PersonCard from "../components/PersonCard";

const familyMembers = [
    { name: "John Doe", birthDate: "01/01/2001" },

    // Add the rest of the family
];

const calculateAge = (birthDate) => {
    try {
        const today = new Date();
        const [day, month, year] = birthDate.split("/");
        const birthDateObj = new Date(`${month}/${day}/${year}`);

        // Check if the date is invalid
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

const IndexPage = () => {
    return (
        <>
            <div>
                <main className='flex flex-wrap justify-center'>
                    {familyMembers.map((person, index) => {
                        const age = calculateAge(person.birthDate);
                        return (
                            <PersonCard
                                key={index}
                                name={person.name}
                                birthDate={person.birthDate}
                            />
                        );
                    })}
                </main>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "30vh", // Adjust as needed for the height of your page
                }}
            >
                <div>
                    <iframe
                        src='https://giphy.com/embed/Im6d35ebkCIiGzonjI'
                        width='280'
                        height='160'
                        frameBorder='0'
                        class='giphy-embed'
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default IndexPage;
