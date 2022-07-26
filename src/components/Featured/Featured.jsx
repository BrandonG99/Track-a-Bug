import './Featured.scss';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Urgent Bugs (Last 30 Days)</h1>
        <BugReportOutlinedIcon fontSize="small" style={{color: "#00c871"}} />
      </div>
    <div className="bottom">
    <p className="title">Urgent Bugs Account for</p>
      <div className="featuredChart">
        <CircularProgressbar value={29} text="29%" strokeWidth={5}/>
      </div>
      <p className="title">of All Bugs This Month</p>
      <div className="summary">
        <div className="item">
          <div className="item-title">Urgent</div>
          <div className="item-urgent negative">
            <KeyboardArrowDownIcon fontSize="small"/>
            <div className="item-amount">114 Bugs</div>
          </div>
        </div>
        <div className="item">
          <div className="item-title">Non-urgent</div>
          <div className="item-urgent positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
            <div className="item-amount">284 Bugs</div>
          </div>
        </div>
        <div className="item">
          <div className="item-title">Total</div>
          <div className="item-urgent positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
            <div className="item-amount">398 Bugs</div>
          </div>
        </div>
      </div>
    </div>    
  </div>
  )
}

export default Featured;  