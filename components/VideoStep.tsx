import { TVideoStep } from '@/types/StepTypes'
import { saveAnswer } from '@/utils/answers'
import { useEvent } from 'expo'
import { useVideoPlayer, VideoView } from 'expo-video'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native'
import Header from './Header'
import NextStepNavigator from './NextStepNavigator'
import Title from './Title'
interface VideoStepProps {
  videoStep: TVideoStep
  stage: number
  step: number
}

const VideoStep = ({ videoStep, stage, step }: VideoStepProps) => {
  const [nextActive, setNextActive] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const player = useVideoPlayer(videoStep.videoUrls['en-EN'], (player) => {
    player.loop = false
  })

  const { isPlaying } = useEvent(player, 'playingChange', {
    isPlaying: player.playing,
  })

  useEffect(() => {
    if (isPlaying) {
      setNextActive(true)
    }
  }, [isPlaying])

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

  return (
    <View style={{ flex: 1 }}>
      <Header title={`Stage ${stage + 1} - Step ${step + 1}`} />
      <View style={styles.container}>
        <Title>{videoStep.description}</Title>

        <Image source={{ uri: videoStep.imageUrl }} style={styles.image} />

        <View style={{ position: 'relative' }}>
          {isLoading && <ActivityIndicator />}
          <VideoView
            style={{ width: '100%', aspectRatio: 1.68 }}
            player={player}
            allowsFullscreen
            onFirstFrameRender={() => setIsLoading(false)}
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
