import { createContext } from "react"

export const Data = createContext({
    courseList: [],
    // fullCourseList: [],
})

const MainDataPass = ({children}) => {
    

    return <Data.Provider
    value={{courseList, /*fullCourseList*/}}
    >
        {children}
    </Data.Provider>
}

const courseList = [
    {
        course: "Namaz",
        price: 2500,
        duration: 5,
        Image: 'https://www.quranteacher.net/public_html/course_images/25namaz-course.jpg',
    },
    {
        course: "Hifz Quran",
        price: 1800,
        duration: 3,
        Image: 'https://www.quranteacher.net/public_html/course_images/16hifz-e-quran1.jpg',
    },
    {
        course: "Hajj",
        price: 3000,
        duration: 2,
        Image: 'https://www.quranteacher.net/public_html/course_images/15hajj-course.jpg',
    },
    {
        course: "Imamat",
        price: 200,
        duration: 1,
        Image: 'https://www.quranteacher.net/public_html/course_images/WhatsApp_Image_2023-12-07_at_12_10_57_PM.jpeg',
    },
    {
        course: "Madani Qaida",
        price: 1500,
        duration: 3,
        Image: 'https://www.quranteacher.net/public_html/course_images/27nazra-quran.jpg',
    },
];

 


// const fullCourseList = [
//     {
//         course: "Tafseer",
//         price: 2500,
//         duration: 5,
//         Image: "https://www.quranteacher.net/public_html/course_images/tafseer_course.jpeg",
//         description: "No doubt the knowledge of Quran is the best of all knowledge and it is necessary for Muslims to not only learn the recitation of Holy Quran but als...",
//     },
//     {
//         course: "Tasawuf",
//         price: 2400,
//         duration: 3,
//         Image: "https://www.quranteacher.net/public_html/course_images/42tasawwuff-course.jpg",
//         description: "There is very much to learn from the lives of Sahaba, Tabieen, Taba Tabieen, and many Islamic saints who came after them. In Faizan-e-Tasawuf cours...",
//     },
//     {
//         course: "Fiqh",
//         price: 2100,
//         duration: 3,
//         Image: "https://www.quranteacher.net/public_html/course_images/Fiqh.jpeg",
//         description: "Bahar e Shariat a well-recognized religious book and this book is a source of becoming an Islamic scholar. In Faizan-e-Bahar e Shariat course you w...",
//     },
//     {
//         course: "Ahkam e Roza",
//         price: 1100,
//         duration: 2,
//         Image: "https://www.quranteacher.net/public_html/course_images/roza.jpeg",
//         description: "Fasting is one of the sacred pillars of Islam and observed in the month of Ramadan every lunar year by every sane male and female Muslim. Ahkam e R...",
//     },
//     {
//         course: "Zakat",
//         price: 700,
//         duration: 1,
//         Image: "https://www.quranteacher.net/public_html/course_images/47zakat.jpg",
//         description: "Zakat a very prominent pillar of Islam and it is obligatory upon those who reached the level of Nisab mentioned in Holy Quran. Zakat course will en...",
//     },
//     {
//         course: "Seerat e Mustafa",
//         price: 1800,
//         duration: 3,
//         Image: "https://www.quranteacher.net/public_html/course_images/32seerat.jpg",
//         description: "Seerat e Mustafa course will enlighten your heart and soul with the matchless biography of Holy Prophet. You will get to know the physical beautif...",
//     },
//     {
//         course: "Qurbani ke Ahkam",
//         price: 500,
//         duration: 1,
//         Image: "https://www.quranteacher.net/public_html/course_images/WhatsApp_Image_2023-11-08_at_3_40_30_PM.jpeg",
//         description: "Qurbani ke Ahkam course will clear all the doubts in your mind regarding Qurbani and sacrificial animals. So, in this course you will learn the con...",
//     },
//     {
//         course: "Sunnat e Nikah",
//         price: 550,
//         duration: 1,
//         Image: "https://www.quranteacher.net/public_html/course_images/WhatsApp_Image_2023-11-08_at_3_32_34_PM.jpeg",
//         description: "Nikah is a sweet Sunnah of our Beloved Prophet and in this Sunnat e Nikah course you will learn every Sunnah and rulings of Nikah like the cases in...",
//     },
//     {
//         course: "Tajheez o Takfeen",
//         price: 2500,
//         duration: 2,
//         Image: "https://www.quranteacher.net/public_html/course_images/20kafan-dafan.jpg",
//         description: "In Tajheez o Takfeen course you will learn all the methods and Sunnah of Funeral according to Sharia like detailed rulings for men and women shroud...",
//     },
//     {
//         course: "Arabic Grammar",
//         price: 5000,
//         duration: 5,
//         Image: "https://www.quranteacher.net/public_html/course_images/07arbi-grammer.jpg",
//         description: "This course not only enables you to learn Quran but you can also understand the meanings and wisdom of Quranic verses. Not only that, you can learn...",
//     },
//     {
//         course: "Farz Uloom",
//         price: 1500,
//         duration: 2,
//         Image: "https://www.quranteacher.net/public_html/course_images/11farz-uloom.jpg",
//         description: "In this Farz Uloom course, you will learn the basic fundamental rulings of Sharia via videos which is obligatory for every sane male and female to ...",
//     },
//     {
//         course: "New Muslim",
//         price: 2000,
//         duration: 10,
//         Image: "https://www.quranteacher.net/public_html/course_images/new-muslim-course-370x208.jpg",
//         description: "This course is very helpful for those who revert to Islam and in this course; you will get to know the excellence of Islam over other religions. Th...",
//     },
//     {
//         course: "Taharat",
//         price: 3000,
//         duration: 4,
//         Image: "https://www.quranteacher.net/public_html/course_images/39taharat.jpg",
//         description: "Seeking Islamic knowledge is obligatory upon every Muslim in the same manner; a Muslim should stay clean as it is prescribed by Sharia. So in this",
//     },
//     {
//         course: "Hajj Short",
//         price: 500,
//         duration: 1,
//         Image: "https://www.quranteacher.net/public_html/course_images/hajj-short-course.jpg",
//         description: "In this Hajj course, you will acknowledge and learn the brief method of Hajj from a renowned book on this topic Rafiq ul Haramain written by Ameer-...",
//     },
//     {
//         course: "Umrah",
//         price: 900,
//         duration: 1,
//         Image: "https://www.quranteacher.net/public_html/course_images/45umrah.jpg",
//         description: "In this umrah course, you will acknowledge and learn the method of Umrah, precautions of Ahram, how to pay a visit to the blessed shrine of Beloved...",
//     },
//     {
//         course: "Aalim",
//         price: 10000,
//         duration: 10,
//         Image: "https://www.quranteacher.net/public_html/course_images/Aalim_course.jpg",
//         description: "Darse Nizami a course for those persons who has a desire to become Islamic scholar and serve the Ummah of Beloved Prophet (peace and blessings be u...",
//     },
//     {
//         course: "Umrah Short",
//         price: 600,
//         duration: 1,
//         Image: "https://www.quranteacher.net/public_html/course_images/Faizan-e-Umrah-Course-(Short).jpg",
//         description: "In this course, you will acknowledge and learn the method of Umrah, precautions of Ahram, how to pay a visit to the blessed shrine of Beloved Proph...",
//     },
//     {
//         course: "Tafseer Surat ul Noor",
//         price: 2000,
//         duration: 4,
//         Image: "https://www.quranteacher.net/public_html/course_images/38tafseer-surah-noor.jpg",
//         description: "No doubt every letter of Holy Quran contains numerous blessings of Almighty so, in this course, you will learn a very beautiful Surah of the Holy Q...",
//     },
//     {
//         course: "Tariqat",
//         price: 1800,
//         duration: 3,
//         Image: "https://www.quranteacher.net/public_html/course_images/tariqat-course.jpg",
//         description: "Faizan-e-Tariqat course will give you Islamic knowledge regarding spiritual leadership and importance of being a disciple. You will also learn abou...",
//     },
//     {
//         course: "Hadith",
//         price: 6000,
//         duration: 6,
//         Image: "https://www.quranteacher.net/public_html/course_images/13hadees.jpg",
//         description: "With Hadith Course you will get all the proofs in the light of Ahadith about the practices of Ahlesunnat and full satisfaction in your school of th...",
//     },
// ]

export default MainDataPass;


