import { COLORS } from '@/constants/COLORS'
import { TVideoStep } from '@/types/StepTypes'
import { AntDesign } from '@expo/vector-icons'
import { useEvent, useEventListener } from 'expo'
import { useVideoPlayer, VideoView } from 'expo-video'
import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import NextStepNavigator from './NextStepNavigator'
import Title from './Title'
interface VideoStepProps {
  videoStep: TVideoStep
  stage: number
  step: number
}

const VideoStep = ({ videoStep, stage, step }: VideoStepProps) => {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null)
  const [videoFinished, setVideoFinished] = useState(false)
  const player = useVideoPlayer(videoStep.videoUrls['en-EN'], (player) => {
    player.loop = false
  })

  const sourceLoad = useEvent(player, 'sourceLoad')

  useEffect(() => {
    if (sourceLoad?.availableVideoTracks?.length) {
      const { width, height } = sourceLoad.availableVideoTracks[0].size
      setAspectRatio(width / height)
    }
  }, [sourceLoad])

  const { isPlaying } = useEvent(player, 'playingChange', {
    isPlaying: player.playing,
  })

  useEventListener(player, 'playToEnd', () => {
    setVideoFinished(true)
  })

  return (
    <View style={styles.container}>
      <Title>{videoStep.description}</Title>

      <TouchableWithoutFeedback
        onPress={() => (isPlaying ? player.pause() : player.play())}
      >
        <View style={{ position: 'relative' }}>
          {!isPlaying && (
            <View
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: [{ translateX: -37.5 }, { translateY: -37.5 }],
                backgroundColor: 'white',
                borderRadius: 100,
                zIndex: 100,
              }}
            >
              <AntDesign name='play' size={75} color={COLORS.dark} />
            </View>
          )}
          <VideoView
            style={{ width: '100%', aspectRatio: aspectRatio || 1 }}
            player={player}
            allowsFullscreen
            nativeControls={false}
          />
        </View>
      </TouchableWithoutFeedback>

      <NextStepNavigator
        currentStage={stage}
        currentStep={step}
        onNext={() => {}}
        disabled={!videoFinished}
      />
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
})
