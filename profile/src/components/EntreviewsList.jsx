import "../Styles/EntreviewsList.css";
import Entreviews from "../components/Entreviews";
import data from "../data";

const EntreviewsList = () => {
  return (
    <div className="el">
      <div className="el-texts">
        <h1 className="el-title">Entrevistas & conversatorios</h1>
      </div>
      <div className="el-list">
        {data?.map((item) => (
          <Entreviews key={item.id} img={item.img} link={item.link}/>
        ))}
      </div>
    </div>
  );
};

export default EntreviewsList;
