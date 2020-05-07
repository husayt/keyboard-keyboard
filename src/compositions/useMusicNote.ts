import { watch, Ref } from 'vue';
import { playNote, stopNote } from '/src/audio';

export const useMusicNote = (frequency: Ref<number>, isPlaying: Ref<boolean>) => {
  watch(() => {
    if (isPlaying.value) playNote(frequency.value);
    else stopNote(frequency.value);
  });

  watch(frequency, (_frequency, oldFrequency) => {
    stopNote(oldFrequency);
  });
};
