import "./clock.scss";

function Clock({ time }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div id="clock">
            <div className="clock-container">
              <div className="clock-items">
                <p id="minute">
                  {time?.minute >= 10
                    ? time?.minute
                    : time?.minute !== 0
                    ? "0" + time?.minute
                    : "00"}
                </p>
              </div>
              <div className="clock-items">
                <p id="second">
                  {time?.second >= 10
                    ? time?.second
                    : time?.second !== 0
                    ? "0" + time?.second
                    : "00"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
