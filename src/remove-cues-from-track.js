/**
 * @file remove-cues-from-track.js
 */

/**
 * remove cues from a track
 *
 * @param {Number} start start of where we should remove the cue
 * @param {Number} end end of where the we should remove the cue
 * @param {Object} track the text track to remove the cues from
 * @private
 */
const removeCuesFromTrack = function(start, end, track) {
  let i;
  let cue;

  if (!track) {
    return;
  }

  i = track.cues.length;

  while (i--) {
    cue = track.cues[i];

    // Remove any overlapping cue
    if (cue.startTime <= end && cue.endTime >= start) {
      track.removeCue(cue);
    }
  }
};

export default removeCuesFromTrack;
