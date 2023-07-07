import bear from "../images/bear.png"
import { Exercise } from "./components/Exercise"
import { guides } from "../Global/global"
import { useNavigate } from "react-router-dom"

const pageContainer = {
    width: "100%",
    height: "100vh",
}

const pageHeader = {
    width: "100%",
    height: "200px",
    boxSizing: "border-box",
    padding: "10px 20px 10px 10px",
    backgroundColor: "#9a9aff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    boxShadow: '0px 0px 0px 2px #0000001c',
    borderRadius: '10px'
}

const pageBody = {
    width: "100%",
    height: "calc(100vh - 200px)",
    boxSizing: "border-box",
    padding: "35px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    overflow: "auto"
}

export function Home() {

  return (
    <div style={pageContainer}>
        <div style={pageHeader}>
            <div style={{display: "flex", flexDirection: "column", marginTop: "40px", gap: "10px"}}>
                <p1 style={{fontSize: "1.8rem", fontWeight: "bold"}}>مدیتیشن من</p1>
                <p3>با مدیتیشن به آرامش درونی برس!</p3>
            </div>
            <img style = {{width: "170px", objectFit: "contain"}} src={bear}></img>
        </div>
        <div style={pageBody}>
            <p1 style={{fontSize: "1.4rem", fontWeight: "bold", marginBottom: "10px"}}>تمرین ها</p1>
            {guides.map((item, index) => <Exercise key={index} data={item} index={index} />)}
        </div>
    </div>
  );
}

