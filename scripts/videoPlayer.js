export const videoPlayerInit = () => {
    const videoPlayer = document.querySelector('.video-player')
    const videoButtonPlay = document.querySelector('.video-button__play')
    const videoButtonStop = document.querySelector('.video-button__stop')
    const videoTimePassed = document.querySelector('.video-time__passed')
    const videoProgress = document.querySelector('.video-progress')
    const videoTimeTotal = document.querySelector('.video-time__total')
    const volumeProgress = document.querySelector('.volume-progress')

    const toggleIcon = () => {
        if (videoPlayer.paused) {
            videoButtonPlay.classList.remove('fa-pause')
            videoButtonPlay.classList.add('fa-play')
        } else {
            videoButtonPlay.classList.add('fa-pause')
            videoButtonPlay.classList.remove('fa-play')
        }
    }

    const togglePlay = () => {
        if (videoPlayer.paused) {
            videoPlayer.play()
        } else {
            videoPlayer.pause()
        }

        toggleIcon()
    }

    const stopPlay = () => {
        videoPlayer.pause()
        videoPlayer.currentTime = 0
        toggleIcon()
    }

    const addZero = (n) => {
        return n < 10 ? '0' + n : n
    }

    videoPlayer.addEventListener('click', togglePlay)
    videoButtonPlay.addEventListener('click', togglePlay)
    videoButtonStop.addEventListener('click', stopPlay)

    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime
        const duration = videoPlayer.duration

        videoProgress.value = (currentTime / duration) * 100

        let minutePassed = Math.floor(currentTime / 60)
        let secondsPassed = Math.floor(currentTime % 60)

        let minuteTotal = Math.floor(duration / 60)
        let secondsTotal = Math.floor(duration % 60)

        videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`
        videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`
    })

    videoProgress.addEventListener('change', () => {
        const duration = videoPlayer.duration
        const value = videoProgress.value
        videoPlayer.currentTime = (value * duration) / 100
    })

    volumeProgress.addEventListener('input', () => {
        const volumeValue = volumeProgress.value
        videoPlayer.volume = volumeValue / 100
    })

    videoPlayerInit.stop = () => {
        if (!videoPlayer.paused) {
            stopPlay()
        }
    }
}