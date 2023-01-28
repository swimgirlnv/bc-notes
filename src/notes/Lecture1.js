import Return from "../buildingblocks/Return"
import "./notes.css"

export default function lecture1 () {

  return (
    <div className="note">
      <div className="content">
        <div className="header">
          <h2 className="title">No notes yet!</h2>
          <p>Slides can be found <a target="blank" href="">here</a></p>
        </div>

        {/* add in notes here */}

        <br></br>
        <Return></Return>
      </div>
    </div>
  )
}