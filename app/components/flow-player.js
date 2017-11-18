/* global flowplayer */
import Component from '@ember/component';
import { observer } from '@ember/object';

export default Component.extend({
  elementId: 'flowplayer',

  didInsertElement() {
    this.updateVideo();
  },

  updateVideo: observer('gameId', function() {
    flowplayer('#flowplayer', {
      clip: {
        sources: [
          {type: 'video/webm', src: '//edge.flowplayer.org/drive.webm'},
          {type: 'video/mp4', src: '//edge.flowplayer.org/drive.mp4'}
        ]
      }
    });
  })
});
