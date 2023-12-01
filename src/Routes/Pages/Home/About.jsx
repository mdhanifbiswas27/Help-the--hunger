import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className="bg-[#BB272E] py-10">
            <div className="max-w-screen-xl mx-auto ">
                <div className="flex justify-center"><h2 className="text-[45px] inline font-bold text-center text-white  border-white">About Us</h2></div>
                <div className="flex justify-center my-5"><p className="text-[20px] text-white font-normal">We are working for making this society hungerless.</p></div>
                <div className=""><p className="text-justify py-10 text-white">In 1984, the Social Issues Committee of the United Church Presbytery investigated the issue of children in local schools who were showing signs of inadequate nutrition and the consequences on their learning. They discovered that three inner core schools were offering snacks courtesy of a teacher or donor, including an orange program that began in the 1970’s. The committee decided to create an organization to provide breakfast foods more widely in the school system to support students. In 1985, the Frontenac Food Sharing Project was incorporated and thus began the work of what is now The Food Sharing Project.

                    Fast forward to 2007: The Province of Ontario established a province-wide program to ensure all communities could offer healthy food at schools. The Ontario Student Nutrition Program provided important funding and support to agencies like The Food Sharing Project, who know served the City of Kingston, Frontenac County, and Lennox and Addington County. More schools began to offer in-school student nutrition programs, and The Food Sharing Project continued to provide more and more food, delivered right to the schools each week. In the 2018-19 school year (prior to the disruptive COVID-19 pandemic), the organization provided just over $400,000 in food, which provided for over half a million hearty snacks and meals served at schools across the region.

                    With the onset of the COVID-19 pandemic, and the first long-term school closure from March to June 2020, The Food Sharing Project quickly pivoted to providing boxes of healthy foods delivered bi-weekly to families of students who were now not able to take advantage of nutrition programs and food at school. School contacts referred families to receive food support; a small army of volunteers – including many from Rotary Clubs across Kingston – packed and delivered food to over 300 families each week on a bi-weekly schedule (a total of over 600 families, representing at least 1500 students). </p>
                </div>
                <div className="text-white font-bold text-xl">Share Your Extra Food Here---------------- <Link to='/AddFood'><button className="ml-5 px-10 py-2 bg-white rounded-2xl text-[#BB272E]">Donate</button></Link></div>

            </div>
        </div>
    );
};

export default About;