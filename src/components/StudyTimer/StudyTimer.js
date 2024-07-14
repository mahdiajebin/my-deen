import React, { useState, useEffect } from 'react';
import './StudyTimer.css';
import duas from '../../Data/Duas'; 
import NatureSound from '../NatureSound/NatureSound';

const StudyTimer = () => {
  const [timeOptions] = useState([10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]); // Time options in minutes
  const [selectedTime, setSelectedTime] = useState(25); // Selected time in minutes
  const [time, setTime] = useState(selectedTime * 60); // Time in seconds
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [studyDua, setStudyDua] = useState(null); // State to hold the study dua
  const videoId = '_hdYGv4KuAU'; // Video ID for nature sound

  // Function to fetch dua by duaTitle
  const fetchDuaByTitle = (title) => {
    const foundDua = duas.find((dua) => dua.duaTitle === title);
    return foundDua || null;
  };

  // Fetch study dua on component mount
  useEffect(() => {
    if (duas.length > 0) {
      const fetchedDua = fetchDuaByTitle('Dua for Studying'); // Replace with your dua title
      setStudyDua(fetchedDua);
    }
  }, []); // Empty dependency array ensures this runs once on mount

  // Format time in MM:SS format
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Handle start button click
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  // Handle pause button click
  const handlePause = () => {
    setIsActive(false);
    setIsPaused(true);
  };

  // Handle reset button click
  const handleReset = () => {
    setTime(selectedTime * 60); // Reset time to selected time
    setIsActive(false); // Deactivate the timer
    setIsPaused(true); // Pause the timer
  };

  // Effect to handle timer logic
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
      }, 1000); // Update every second (1000 milliseconds)
    } else {
      clearInterval(interval); // Clear interval if not active or paused
    }
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [isActive, isPaused]);

  // Effect to update time when selectedTime changes
  useEffect(() => {
    setTime(selectedTime * 60);
    setIsPaused(true); // Pause timer when selectedTime changes
  }, [selectedTime]);

  return (
    <div className="study-timer-container">
      <p className="arabic-text-font">بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ</p>
      <div className="study-timer-header">
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
      <div className="study-timer-main-content">
        <div className="timer">
          <h1>{formatTime(time)}</h1>
        </div>
        <div className="timer-controls">
          <div>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(parseInt(e.target.value))}
            >
              {timeOptions.map((option) => (
                <option key={option} value={option}>
                  {option} minutes
                </option>
              ))}
            </select>
            {!isActive ? (
              <button className="btn btn-primary" onClick={handleStart}>
                Start Timer
              </button>
            ) : (
              <button className="btn btn-danger" onClick={handlePause}>
                Pause Timer
              </button>
            )}
            <button className="btn btn-secondary" onClick={handleReset}>
              Reset Timer
            </button>
            <NatureSound videoId={videoId} opts={{ autoplay: 0 }} />

          </div>
          {/* Render NatureSound component */}
        </div>
      </div>
    </div>
  );
};

export default StudyTimer;
