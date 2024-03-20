import css from "./About.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { BsPersonFillCheck } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className={css.aboutMainContainer}>
      <h1 className={css.headingName}>Get to Know More About XYZ</h1>
      <div className={css.aboutContainer}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos veniam nobis consequatur quaerat alias laborum praesentium maxime ut animi eius sit itaque ab corrupti dolor earum quas, vel consequuntur asperiores odit. Magnam neque consequuntur qui dicta quos est assumenda voluptate? Neque totam, harum assumenda quaerat saepe esse possimus dolores dolor nesciunt animi nam, voluptas in voluptatum maxime tempore tempora. Quibusdam hic amet inventore consequatur aspernatur repellat fuga consectetur eligendi, quas voluptatem enim debitis mollitia sequi qui voluptates, quasi accusamus impedit sapiente natus, odit rerum error fugit distinctio! Impedit modi quidem exercitationem est atque expedita, dolorem, hic ipsa sequi minima tempora asperiores maxime quibusdam quos neque, nemo repellendus? Voluptatibus, excepturi labore placeat vitae dolor eum, illum doloremque corporis velit magni possimus, voluptatum ad error mollitia beatae! Vero qui illum voluptatum nobis aliquid, eum veritatis, excepturi explicabo aperiam cum officiis magnam modi, ipsa sint. Reiciendis laborum cupiditate quae impedit officia voluptas non.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, commodi? Aliquid dolores eos corrupti officia similique accusamus velit commodi. Nostrum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, excepturi.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dolorem sapiente eligendi eum nam sint.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur repellendus tempora doloremque, tenetur accusamus eos delectus nihil! Laborum culpa porro, autem mollitia molestias rem iste quia cum illum neque quo voluptatem nam asperiores, facere temporibus fuga quae nulla enim fugit consectetur odio cupiditate repellat. At maiores harum odio iusto eligendi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus adipisci deleniti at, nulla optio aspernatur ab suscipit. Quibusdam modi delectus quas nemo pariatur. Libero sit, velit id debitis voluptas incidunt perspiciatis quibusdam, porro, adipisci commodi quos? Recusandae suscipit esse velit doloribus est accusantium fuga laudantium rem atque ut aspernatur harum aliquam quis culpa ducimus nulla dolore mollitia eius, dolorum itaque maiores perferendis sapiente reiciendis! Consectetur porro veritatis quaerat magnam sequi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, numquam voluptates impedit nihil unde accusantium? Nam, maxime repellendus? Similique ex cumque voluptatem eaque natus. Labore vero quod sunt itaque nihil fuga repellat, culpa excepturi eius commodi officiis ipsa aperiam necessitatibus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae esse eligendi voluptas, optio quasi unde soluta fuga iure veritatis eum. Non praesentium omnis nemo minus illo corrupti enim ipsam quaerat, maxime molestias corporis tenetur tempore placeat laudantium amet perferendis quo error earum? Velit similique quam dolore voluptate! Mollitia, reprehenderit facere?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex tempora eos nihil. Veritatis aperiam nihil, ad, aut non incidunt et inventore fugit consequatur impedit qui asperiores a. Aliquam repellendus eos delectus sit vel cupiditate quasi ullam nulla voluptate. Quae, dolorum.
        </p>
      </div>
      <div className={css.achivementContainer}>
        <div className={`${css.branch} ${css.commonDiv}`}>
            <div className={css.map}>
            <FaLocationDot />
            </div>
            <div className={`${css.branchNumber} ${css.flexAchiveComp}`}>
                <h1>18+</h1>
                <h4>Branches</h4>
            </div>
        </div>
        <div className={`${css.passout} ${css.commonDiv}`}>
            <div className={css.passLogo}>
            <BsPersonFillCheck />
            </div>
            <div className={`${css.passoutDetail} ${css.flexAchiveComp}`}>
                <h1>6.2k+</h1>
                <h4>Pass out</h4>
            </div>
        </div>
        <div className={`${css.student} ${css.commonDiv}`}>
            <div className={css.studentLogo}>
            <FaBookReader />
            </div>
            <div className={`${css.studentDetails} ${css.flexAchiveComp}`}>
                <h1>2.3k+</h1>
                <h4>students</h4>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
