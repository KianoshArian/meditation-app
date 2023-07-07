import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import { useNavigate } from 'react-router-dom';

const boxContainer = {
    width: "100%",
    minHeight: "80px",
    boxSizing: "border-box",
    borderRadius: "15px",
    backgroundColor: "white",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "10px",
    gap: "10px",
    
}

const guides = [
    {}
]

export function Exercise({data, index}) {
  const navigate = useNavigate();
  return (
    <div style={boxContainer} onClick={() => navigate("exercise/" + index)}>
        <SelfImprovementIcon style={{backgroundColor: "blue", fontSize: "3rem", color: "white", borderRadius: "10px"}} />
        <div style={{display: "flex", flexDirection: "column"}}>
            <p1 style={{fontSize: "1.2rem"}}>{data.name}</p1>
            <p1 style={{fontSize: "1.1rem", color: "grey"}}>{data.duration}</p1>
        </div>
    </div>
  );
}

