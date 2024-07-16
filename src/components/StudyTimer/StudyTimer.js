import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudyTimer.css';
import duas from '../../Data/Duas'; 
import NatureSound from '../NatureSound/NatureSound';

const StudyTimer = () => {
  const [timeOptions] = useState([10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]);
  const [selectedTime, setSelectedTime] = useState(25);
  const [time, setTime] = useState(selectedTime * 60);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [studyDua, setStudyDua] = useState(null);
  const videoId = '_hdYGv4KuAU';

  const fetchDuaByTitle = (title) => {
    const foundDua = duas.find((dua) => dua.duaTitle === title);
    return foundDua || null;
  };

  useEffect(() => {
    if (duas.length > 0) {
      const fetchedDua = fetchDuaByTitle('Dua for Studying');
      setStudyDua(fetchedDua);
    }
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsActive(false);
    setIsPaused(true);
  };

  const handleReset = () => {
    setTime(selectedTime * 60);
    setIsActive(false);
    setIsPaused(true);
  };

  useEffect(() => {
    let interval;
    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(interval);
            setIsActive(false);
            setIsPaused(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  useEffect(() => {
    setTime(selectedTime * 60);
    setIsPaused(true);
  }, [selectedTime]);

  return (
    <div className="study-timer-container container">
      <p className="arabic-text-font text-center">بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ</p>
      <div className="study-ttimer-header text-center">
        {studyDua && (
          <>
            <h3>{studyDua.duaTitle}</h3>
            <p className="arabic-text-font">{studyDua.duaArabic}</p>
            <p>{studyDua.duaTransliteration}</p>
            <p>{studyDua.duaTranslation}</p>
            <p>{studyDua.duaCitation}</p>
          </>
        )}
      </div>
      <div className="study-timer-main-content text-center">
        <div className="timer">
          <h1>{formatTime(time)}</h1>
        </div>
        <div className="timer-controls d-flex justify-content-center align-items-center">
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(parseInt(e.target.value))}
            className="form-select mb-3 custom-select-width me-2"
          >
            {timeOptions.map((option) => (
              <option key={option} value={option}>
                {option} minutes
              </option>
            ))}
          </select>
          <div className="d-flex">
            {!isActive ? (
              <button className="btn btn-primary mx-2" onClick={handleStart}>
                Start Timer
              </button>
            ) : (
              <button className="btn btn-danger mx-2" onClick={handlePause}>
                Pause Timer
              </button>
            )}
            <button className="btn btn-secondary mx-2" onClick={handleReset}>
              Reset Timer
            </button>
          </div>
          <NatureSound videoId={videoId} opts={{ autoplay: 0 }} />
        </div>
      </div>
    </div>
  );
};

export default StudyTimer;