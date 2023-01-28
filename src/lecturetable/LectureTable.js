import "./LectureTable.css"

export default function LectureTable() {

  return (
    <div className="lecturetable">
      <table className="table">
        <tr className="tr">
          <th className="th">Date</th>
          <th className="th">Lecture</th>
          <th className="th">Misc</th>
        </tr>
        {/* Add on to this as more lectures/notes */}
        <tr>
          <td className="td">1/26/2023</td>   
          <td className="td"><a target ="blank" href="https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=98c52451-b9d7-4c88-bdb0-af960160a697">Course Intro</a></td>
          <td className="td"><a target="blank" href="https://docs.google.com/presentation/d/1-KUG4WWtIYJxEanYuG0t9aAKXIy_F-7s/edit?usp=sharing&ouid=101326810319133453331&rtpof=true&sd=true">Slides</a></td>
        </tr>

      </table>
    </div>
  )

}