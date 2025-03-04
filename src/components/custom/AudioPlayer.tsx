"use client";

import { Audio, formatTime } from '@sina_byn/re-audio';
import {IoIosSkipBackward, IoIosSkipForward  } from 'react-icons/io'
import { BsSkipBackwardFill, BsFillSkipForwardFill  } from "react-icons/bs";
import { CiPause1, CiPlay1  } from "react-icons/ci";
import { TbVolume, TbVolume2 } from "react-icons/tb";



export default function AudioPlayer() {
    return (
       
        <Audio
          playlist={[
            { id: 1, src: 'https://cdn.pixabay.com/audio/2025/01/31/audio_7737066b01.mp3', name: 'funky-jam by T.S. Jones' },
          ]}
        >
          {({
            loading,
            trackIndex,
            playlist,
            playing,
            togglePlay,
            duration,
            currentTime,
            volume,
            setVolume,
            prevTrack,
            nextTrack,
            rewindTrack,
            forwardTrack,
            setCurrentTime,
          }) => (
            <div>
              <div className='flex'>
                <div className='flex max-md:flex-col justify-center gap-4 w-full'>
                  <div className='flex items-center gap-4'>
                    <div className='size-[60px] bg-[#c4c4c4] rounded' />

                    <div className='flex flex-col text-zinc-100'>
                      <span className='capitalize'>
                        {/* @ts-expect-error "WIP"*/}
                        {playlist[trackIndex].name.split(/-/).join(' ')}
                      </span>
                      <span>{formatTime(currentTime)}</span>
                    </div>
                  </div>

                  <div className="flex flex-row  gap-x-8">

                    <button type='button' onClick={rewindTrack.bind(null, 10)}>
                      <IoIosSkipBackward />
                    </button>

                    <button type='button' onClick={prevTrack}>
                      <BsSkipBackwardFill  />
                    </button>

                    <button type='button' onClick={togglePlay}>
                      {playing ? <CiPause1  /> : <CiPlay1  />}
                    </button>

                    <button type='button' onClick={nextTrack}>
                      <BsFillSkipForwardFill  />
                    </button>

                    <button type='button' onClick={forwardTrack.bind(null, 10)}>
                      <IoIosSkipForward  />
                    </button>
                  </div>
                </div>
              </div>

              <div className='mt-4'>
                <input
                  type='range'
                  min='0'
                  max={duration}
                  step='1'
                  className='w-full'
                  value={currentTime}
                  onChange={e => setCurrentTime(+e.currentTarget.value)}
                />
              </div>

              <div className='flex items-center justify-between gap-x-4'>
                <div className='flex items-center gap-x-2 mt-4'>
                  <TbVolume2 />

                  <input
                    type='range'
                    min='0'
                    max='100'
                    className='w-full md:w-[150px]'
                    value={volume}
                    onChange={e => setVolume(+e.currentTarget.value)}
                  />

                  <TbVolume />
                </div>

                {loading && <span className='max-lg:text-sm mt-2'>loading...</span>}
              </div>
            </div>
          )}
        </Audio>
    );
};