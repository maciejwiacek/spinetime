import { TVideoStep } from '@/types/StepTypes'
import { saveAnswer } from '@/utils/answers'
import { useEvent } from 'expo'
import { useVideoPlayer, VideoView } from 'expo-video'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Header from './Header'
import NextStepNavigator from './NextStepNavigator'
import Title from './Title'
interface VideoStepProps {
  videoStep: TVideoStep
  stage: number
  step: number
}

const VideoStep = ({ videoStep, stage, step }: VideoStepProps) => {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null)
  const player = useVideoPlayer(videoStep.videoUrls['en-EN'], (player) => {
    player.loop = false
  })
  const [nextActive, setNextActive] = useState(false)

  const sourceLoad = useEvent(player, 'sourceLoad')
  const { isPlaying } = useEvent(player, 'playingChange', {
    isPlaying: player.playing,
  })

  const handleAddAnswer = () => {
    saveAnswer({
      selectedOption: 'video_step',
      stage,
      step,
      videoWatched: true,
      videoLang: 'en-EN',
      videoUrl: videoStep.videoUrls['en-EN'],
    } as const)
  }

  useEffect(() => {
    if (sourceLoad?.availableVideoTracks?.length) {
      const { width, height } = sourceLoad.availableVideoTracks[0].size
      setAspectRatio(width / height)
    }
  }, [sourceLoad])

  useEffect(() => {
    if (isPlaying) {
      setNextActive(true)
    }
  }, [isPlaying])

  return (
    <View style={{ flex: 1 }}>
      <Header title={`Stage ${stage + 1} - Step ${step + 1}`} />
      <View style={styles.container}>
        <Title>{videoStep.description}</Title>

        <Image source={{ uri: videoStep.imageUrl }} style={styles.image} />

        <View style={{ position: 'relative' }}>
          <VideoView
            style={{ width: '100%', aspectRatio: aspectRatio || 1 }}
            player={player}
            allowsFullscreen
          />
        </View>

        <NextStepNavigator
          currentStage={stage}
          currentStep={step}
          onNext={handleAddAnswer}
          disabled={!nextActive}
        />
      </View>
    </View>
  )
}

export default VideoStep

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
})
