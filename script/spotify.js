window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQDk2WwEpwVZihD2hj_XPwcIzuUuIByqJeIrrXjUufRax4P2aefRRKvqd_WlZp-JjdTR-n4mZ1OlRXKviIJ3irP7cvMrctmC8f2VBrg606tHFKw-jptu1ccCNlabhTYevjA0HlA6OA5QD09S1VePDOkOyR43fBFumbJl';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); }
    });
  
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
  
    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });
  
    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });
  
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });
  
    // Connect to the player!
    player.connect();
    player.resume().then(() => {
        console.log('Resumed!');
      });
  };