import "./Timeline.scss";

const Timeline = () => {
  return (
    <div className="timeline">
      <h3 className="timeline_title">Օրվա ծրագիր</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

        <div className="timeline_item">
          <div className="timeline_item_top">
            <p style={{ margin: 0 }}>Եկեղեցի</p>
            <p style={{ margin: 0 }}>12:30</p>
          </div>
          <div className="timeline_item_middle">
            <div className="line"></div>
            <div className="circle"></div>
          </div>
          <div className="timeline_text">
            Սուրբ Հովհաննես եկեղեցի, ք. Աբովյան
          </div>
        </div>

        <div className="timeline_item">
          <div className="timeline_item_top">
            <p style={{ margin: 0 }}>Ռեստորան</p>
            <p style={{ margin: 0 }}>18:00</p>
          </div>
          <div className="timeline_item_middle">
            <div className="line"></div>
            <div className="circle"></div>
          </div>
          <div className="timeline_text">
           Բագինյա Հոլլ, գ. Հովտաշատ, Գայի խճուղի 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
