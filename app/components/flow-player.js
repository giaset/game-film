/* global flowplayer */
import Component from '@ember/component';

export default Component.extend({
  elementId: 'flowplayer',

  didInsertElement() {
    flowplayer('#flowplayer', {
      clip: {
        sources: [
          {type: 'video/webm', src: '//edge.flowplayer.org/drive.webm'},
          {type: 'video/mp4', src: '//edge.flowplayer.org/drive.mp4'}
        ]
      }
    });
  }
});
