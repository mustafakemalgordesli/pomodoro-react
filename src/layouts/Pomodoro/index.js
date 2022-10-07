import React, { useEffect, useState } from "react";
import "./pomodoro.scss";
import Clock from "../../components/Clock";
import StartButton from "../../components/Buttons/StartButton";
import PauseButton from "../../components/Buttons/PauseButton";
import ResetButton from "../../components/Buttons/ResetButton";

function Pomodoro() {
  const [workStatusEnum] = useState({
    Pomodoro: "pomodoro",
    ShortBreak: "shortbreak",
    LongBreak: "longbreak",
  });

  const [time, SetTime] = useState({ minute: 0, second: 0 });
  const [status, SetStatus] = useState(false);
  const [workStatus, SetWorkStatus] = useState(workStatusEnum.Pomodoro);

  const onPomodoro = () => {
    SetWorkStatus(workStatusEnum.Pomodoro);
  };

  const onShortBreak = () => {
    SetWorkStatus(workStatusEnum.ShortBreak);
  };

  const onLongBreak = () => {
    SetWorkStatus(workStatusEnum.LongBreak);
  };

  const start = () => {
    SetStatus((status) => !status);
  };

  const pause = () => {
    SetStatus((status) => !status);
  };

  const reset = () => {
    if (workStatus === workStatusEnum.Pomodoro)
      SetTime({
        minute: 25,
        second: 0,
      });
    else if (workStatus === workStatusEnum.LongBreak)
      SetTime({
        minute: 15,
        second: 0,
      });
    else
      SetTime({
        minute: 5,
        second: 0,
      });
    SetStatus(false);
  };

  const UpdateTime = (time) => {
    if (!(time.second === 0 && time.minute === 0)) {
      let minute = time.second === 0 ? time.minute - 1 : time.minute;
      let second = time.second > 0 ? time.second - 1 : 59;

      SetTime({
        minute,
        second,
      });
    } else {
      SetTime({
        minute: 0,
        second: 0,
      });
      SetStatus((s) => false);
      alert("Time's up!");
    }
  };

  useEffect(() => {
    let interval;
    if (status) {
      interval = setInterval(() => {
        SetTime((time) => {
          UpdateTime(time);
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [status]);

  useEffect(() => {
    const pomodoro_time = {
      minute: 25,
      second: 0,
    };

    const short_break_time = {
      minute: 5,
      second: 0,
    };

    const long_break_time = {
      minute: 15,
      second: 0,
    };
    if (workStatus === workStatusEnum.Pomodoro) {
      SetTime(pomodoro_time);
      SetStatus(false);
    } else if (workStatus === workStatusEnum.ShortBreak) {
      SetTime(short_break_time);
      SetStatus(false);
    } else if (workStatus === workStatusEnum.LongBreak) {
      SetTime(long_break_time);
      SetStatus(false);
    }
  }, [workStatus, workStatusEnum]);

  return (
    <main className="App-pomodoro container ml-auto mr-auto">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                className="btn btn-outline-info"
                onClick={onPomodoro}
              >
                Pomodoro
              </button>
              <button
                type="button"
                className="btn btn-outline-info"
                onClick={onShortBreak}
              >
                Short Break
              </button>
              <button
                type="button"
                className="btn btn-outline-info"
                onClick={onLongBreak}
              >
                Long Break
              </button>
            </div>
          </div>
        </div>
      </div>

      <Clock time={time} />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <StartButton status={status} onClick={start} />
            <PauseButton status={status} onClick={pause} />
            <ResetButton status={status} onClick={reset} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Pomodoro;
