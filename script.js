(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist,this.mainPlayList]); this.playList_F48FB856_E456_6F7C_41D8_3C24C0152850.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF].forEach(function(component) { component.set('visible', false); }) }",
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E",
  "this.MapViewer",
  "this.IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF",
  "this.IconButton_DD3B0FDD_CC2C_CE04_41CC_8A134CB1896A",
  "this.Image_CAE00CC7_DA20_59CF_41E6_248AF0EE22D0",
  "this.Container_F51F756A_E452_7E4E_41DE_877A0078152A",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "vrPolyfillScale": 0.5,
 "width": "100%",
 "minHeight": 20,
 "propagateClick": false,
 "scripts": {
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getKey": function(key){  return window[key]; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "existsKey": function(key){  return key in window; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF",
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Player",
 "paddingTop": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Player475"
 },
 "overflow": "visible",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "definitions": [{
 "hfovMin": "120%",
 "label": "BARAT",
 "id": "panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4",
 "thumbnailUrl": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 2377.01,
   "angle": 95.11,
   "y": 2680.58,
   "class": "PanoramaMapLocation"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DA809F54_CBD5_4E04_41C0_3BC1488DB74A",
  "this.popup_D4ECE477_DA20_68C0_41CD_A106F075B430"
 ]
},
{
 "duration": 0,
 "label": "SITE PLAN OVERLAY CITRA-1",
 "id": "photo_D3C1307B_DF6C_B127_41E7_9B5123E8974C",
 "class": "Photo",
 "width": 4962,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_D3C1307B_DF6C_B127_41E7_9B5123E8974C.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3508,
 "thumbnailUrl": "media/photo_D3C1307B_DF6C_B127_41E7_9B5123E8974C_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -1.76,
  "class": "PanoramaCameraPosition",
  "pitch": -40.45
 }
},
{
 "duration": 0,
 "label": "SITE PLAN MONOCROME-1",
 "id": "photo_D3E22D1E_DF6C_931E_41C6_2B1D04E88604",
 "class": "Photo",
 "width": 4962,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_D3E22D1E_DF6C_931E_41C6_2B1D04E88604.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3508,
 "thumbnailUrl": "media/photo_D3E22D1E_DF6C_931E_41C6_2B1D04E88604_t.jpg"
},
{
 "duration": 0,
 "label": "PETA PENYESUAIAN KOORDINAT LAHAN",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_3",
 "class": "Photo",
 "width": 4961,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_3.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3508,
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_3_t.jpg"
},
{
 "duration": 0,
 "label": "PETA KOORDINAT LAHAN",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_2",
 "class": "Photo",
 "width": 4961,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_2.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3508,
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_2_t.jpg"
},
{
 "items": [
  "this.PanoramaPlayListItem_F48EC856_E456_6F7C_41C8_A6A2D2C53458",
  "this.PanoramaPlayListItem_F48D3856_E456_6F7C_41E7_E0311025439F",
  "this.PanoramaPlayListItem_F48D8856_E456_6F7C_41D4_66EEA580A17E",
  "this.PanoramaPlayListItem_F48C0856_E456_6F7C_41E9_CE8E56D0E1CA",
  "this.PanoramaPlayListItem_F48B6856_E456_6F7C_41D8_1592D587205D",
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.video_D35F3C5F_DF84_8B71_41DD_04EF32F90DDB",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 6, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 6)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "player": "this.MainViewerVideoPlayer",
   "end": "this.trigger('tourEnded')",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "hfovMin": "120%",
 "label": "UTARA",
 "id": "panorama_820D06B4_887A_31E3_41C0_3B358CD61033",
 "thumbnailUrl": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 3861.91,
   "angle": 180.67,
   "y": 437.02,
   "class": "PanoramaMapLocation"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C55F808D_CBD7_B204_41E2_7B6D59D53B18",
  "this.popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445"
 ]
},
{
 "hfovMin": "120%",
 "label": "TENGAH",
 "id": "panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9",
 "thumbnailUrl": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 4035.07,
   "angle": 0,
   "y": 2586.87,
   "class": "PanoramaMapLocation"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C466AC2B_CBD5_520C_41E7_4F96E79A6EA2",
  "this.popup_CB20064F_DA20_28DF_41E0_5603979D9489"
 ]
},
{
 "id": "ImageResource_C88A9E5E_DA20_58C0_41E2_57D3E2FAB3FD",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_0.jpg",
   "width": 15360,
   "class": "ImageResourceLevel",
   "height": 8640
  },
  {
   "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_1.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4608
  },
  {
   "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_2.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_3.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_4.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_5.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "shadowBlurRadius": 6,
 "id": "window_CE73AB68_DF6C_9721_41E7_82DE9F5DADF7",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "bodyPaddingRight": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "bodyBackgroundColorDirection": "vertical",
 "width": 400,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "minHeight": 20,
 "modal": true,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyPaddingTop": 0,
 "backgroundColorRatios": [],
 "closeButtonPaddingTop": 0,
 "titleFontColor": "#000000",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "height": 600,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "title": "",
 "headerBackgroundColorDirection": "vertical",
 "class": "Window",
 "minWidth": 20,
 "closeButtonBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "closeButtonPressedIconLineWidth": 3,
 "headerBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "shadow": true,
 "titlePaddingTop": 5,
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "closeButtonPressedBackgroundColor": [],
 "headerPaddingRight": 0,
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "shadowSpread": 1,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.container_F49AC854_E456_6F7C_41D1_9172AC965764"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 20,
 "backgroundOpacity": 1,
 "bodyBorderSize": 0,
 "shadowColor": "#000000",
 "footerHeight": 5,
 "titleFontWeight": "normal",
 "paddingRight": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 5,
 "propagateClick": false,
 "shadowVerticalLength": 0,
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "contentOpaque": false,
 "closeButtonPaddingRight": 0,
 "scrollBarMargin": 2,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonPaddingBottom": 0,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerPaddingTop": 10,
 "closeButtonPaddingLeft": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "footerBorderColor": "#000000",
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 11,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [],
 "layout": "vertical",
 "gap": 10,
 "headerBackgroundOpacity": 0,
 "titleTextDecoration": "none",
 "paddingTop": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "bodyBorderColor": "#000000",
 "bodyPaddingLeft": 0,
 "horizontalAlign": "center",
 "titlePaddingBottom": 5,
 "footerBorderSize": 0,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "data": {
  "name": "Window4199"
 }
},
{
 "minimumZoomFactor": 0.5,
 "label": "MAP FLOOR",
 "id": "map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "width": 8192,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A.jpeg",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 1907
   },
   {
    "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_lq.jpeg",
    "width": 331,
    "class": "ImageResourceLevel",
    "height": 198,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayRadiusScale": 0.14,
 "maximumZoomFactor": 1.2,
 "thumbnailUrl": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_t.jpg",
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "height": 4883,
 "overlays": [
  "this.overlay_97266B35_9AD4_56F1_41E0_5FEC6491E0E7",
  "this.overlay_8AA26D8D_9ADC_4D91_41C4_B242DE053430",
  "this.overlay_8A10C3E3_9ADC_5591_41D3_5727B8194571",
  "this.overlay_8A5672F0_9ADC_578F_41E1_8C1A9C619654",
  "this.overlay_8B108C64_9ADC_5297_41D5_141AEF8C1B24"
 ],
 "class": "Map"
},
{
 "duration": 0,
 "label": "PETA KESESUAIAN TATA RUANG",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_1",
 "class": "Photo",
 "width": 4961,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_1.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3508,
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_1_t.jpg"
},
{
 "duration": 0,
 "label": "SITE PLAN-1",
 "id": "photo_D41C13A7_DF6C_B72F_41D1_75C429856E23",
 "class": "Photo",
 "width": 4962,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_D41C13A7_DF6C_B72F_41D1_75C429856E23.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3508,
 "thumbnailUrl": "media/photo_D41C13A7_DF6C_B72F_41D1_75C429856E23_t.jpg"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_F48FB856_E456_6F7C_41D8_3C24C0152850",
 "class": "PlayList"
},
{
 "id": "ImageResource_C8841E57_DA20_58CF_41E8_6F67382DB7EF",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_0.jpg",
   "width": 15360,
   "class": "ImageResourceLevel",
   "height": 8640
  },
  {
   "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_1.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4608
  },
  {
   "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_2.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_3.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_4.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_5.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.35,
 "hideDuration": 500,
 "yaw": 0.34,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "id": "popup_CB20064F_DA20_28DF_41E0_5603979D9489",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_4.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -68.91,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "id": "ImageResource_C88B0E58_DA20_58C1_41E8_2F51AF5FB5D7",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_0.jpg",
   "width": 15360,
   "class": "ImageResourceLevel",
   "height": 8640
  },
  {
   "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_1.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4608
  },
  {
   "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_2.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_3.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_4.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_5.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "hfovMin": "120%",
 "label": "SELATAN",
 "id": "panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D",
 "thumbnailUrl": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 3364.7,
   "angle": 2.56,
   "y": 4377.87,
   "class": "PanoramaMapLocation"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DB3490F5_CBCE_A786_41CA_8CED96A15FC1",
  "this.popup_D4E689B2_DA20_D841_41AD_B793914B75CE"
 ]
},
{
 "label": "Photo Album PETA FOTO UDARA",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C",
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_t.png",
 "playList": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList",
 "class": "PhotoAlbum"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.58,
 "hideDuration": 500,
 "yaw": 3.49,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "id": "popup_D4E689B2_DA20_D841_41AD_B793914B75CE",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D4E689B2_DA20_D841_41AD_B793914B75CE_0_4.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -33.49,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "viewerArea": "this.MapViewer",
 "movementMode": "constrained",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.25,
  "class": "PanoramaCameraPosition",
  "pitch": -40.2
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 1.26,
  "class": "PanoramaCameraPosition",
  "pitch": -43.46
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_820D06B4_887A_31E3_41C0_3B358CD61033_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.75,
  "class": "PanoramaCameraPosition",
  "pitch": -30.9
 }
},
{
 "duration": 0,
 "label": "PETA FOTO UDARA",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_0",
 "class": "Photo",
 "width": 4961,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3508,
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_0_t.jpg"
},
{
 "items": [
  {
   "media": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist, 4, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist",
 "class": "PlayList"
},
{
 "duration": 0,
 "label": "PETA SELISIH LAHAN DAN PERIZINAN",
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_4",
 "class": "Photo",
 "width": 4961,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_4.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3508,
 "thumbnailUrl": "media/album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_4_t.jpg"
},
{
 "id": "ImageResource_C8899E5E_DA20_58C0_41DA_C3A6623CCF1A",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_0.jpg",
   "width": 15360,
   "class": "ImageResourceLevel",
   "height": 8640
  },
  {
   "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_1.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4608
  },
  {
   "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_2.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_3.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_4.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_5.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration"
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 0.25,
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "displayMovements": [
  {
   "duration": 1000,
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "targetPitch": -63.56,
   "duration": 3000,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.25,
  "class": "PanoramaCameraPosition",
  "pitch": -63.56
 }
},
{
 "hfovMin": "120%",
 "label": "TIMUR",
 "id": "panorama_82F58ECA_887A_11A7_41C3_CC78280C5471",
 "thumbnailUrl": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "mapLocations": [
  {
   "map": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "x": 5342.82,
   "angle": -80.46,
   "y": 3084.91,
   "class": "PanoramaMapLocation"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C687AB0B_CBBA_5E90_41CB_C5B9F4E6304C",
  "this.popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36"
 ]
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_F49AC854_E456_6F7C_41D1_9172AC965764, [this.htmltext_F498E854_E456_6F7C_41D2_71DF2926EC82,this.component_F4972856_E456_6F7C_41C8_97847C46A695,this.component_F4973856_E456_6F7C_41D0_422E70EE4B9F], 2000)",
 "items": [
  "this.albumitem_F49CD854_E456_6F7C_41E2_14E4D5FAE3B4"
 ],
 "id": "playList_EB82C0FE_E45A_9F2C_41E1_9DEBF6C59230",
 "class": "PlayList"
},
{
 "label": "3D Konsep Galangan",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_D35F3C5F_DF84_8B71_41DD_04EF32F90DDB_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_D35F3C5F_DF84_8B71_41DD_04EF32F90DDB",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_D35F3C5F_DF84_8B71_41DD_04EF32F90DDB.mp4"
 }
},
{
 "id": "ImageResource_C886EE57_DA20_58CF_41D1_63411F86D6F3",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_0.jpg",
   "width": 15360,
   "class": "ImageResourceLevel",
   "height": 8640
  },
  {
   "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_1.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4608
  },
  {
   "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_2.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2304
  },
  {
   "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_3.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_4.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_CB20064F_DA20_28DF_41E0_5603979D9489_0_5.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_948045FF_9AD4_3D71_41D3_949F4AE5E20A",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_F48FC856_E456_6F7C_41E1_D0500DC4F5BA",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.55,
 "hideDuration": 500,
 "yaw": -2.06,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "id": "popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445_0_4.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -33.9,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.58,
 "hideDuration": 500,
 "yaw": 3.49,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "id": "popup_D4ECE477_DA20_68C0_41CD_A106F075B430",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D4ECE477_DA20_68C0_41CD_A106F075B430_0_4.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -33.49,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.55,
 "hideDuration": 500,
 "yaw": -2.06,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "id": "popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36_0_4.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": -33.9,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "30px",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#333333",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingBottom": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionDuration": 500,
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "itemThumbnailShadowColor": "#000000",
 "rollOverItemLabelFontWeight": "bold",
 "id": "ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 20,
 "scrollBarColor": "#FFFFFF",
 "itemThumbnailWidth": 100,
 "paddingRight": 20,
 "itemLabelFontStyle": "normal",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "borderRadius": 5,
 "itemMode": "normal",
 "itemThumbnailOpacity": 1,
 "itemThumbnailShadowHorizontalLength": 3,
 "minHeight": 1,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "propagateClick": false,
 "itemLabelFontFamily": "Arial",
 "borderSize": 0,
 "playList": "this.ThumbnailList_96C85140_9ACD_D28F_41DA_AEB5717EBF0E_playlist",
 "itemLabelTextDecoration": "none",
 "verticalAlign": "top",
 "itemPaddingRight": 3,
 "width": "100%",
 "itemThumbnailShadowBlurRadius": 8,
 "bottom": "0%",
 "itemBorderRadius": 0,
 "minWidth": 1,
 "itemVerticalAlign": "middle",
 "itemThumbnailShadowOpacity": 0.57,
 "scrollBarMargin": 2,
 "itemLabelFontSize": 14,
 "height": 133.05,
 "itemPaddingLeft": 3,
 "itemLabelFontColor": "#FFFFFF",
 "itemThumbnailScaleMode": "fit_outside",
 "selectedItemLabelFontColor": "#FFCC00",
 "class": "ThumbnailList",
 "layout": "horizontal",
 "itemBackgroundOpacity": 0,
 "gap": 13,
 "itemThumbnailHeight": 75,
 "itemLabelPosition": "bottom",
 "itemThumbnailShadowSpread": 1,
 "itemBackgroundColorDirection": "vertical",
 "paddingTop": 10,
 "itemHorizontalAlign": "center",
 "itemOpacity": 1,
 "itemThumbnailBorderRadius": 5,
 "paddingBottom": 10,
 "itemPaddingTop": 3,
 "shadow": false,
 "itemBackgroundColor": [],
 "itemPaddingBottom": 3,
 "itemLabelGap": 8,
 "itemThumbnailShadowVerticalLength": 3,
 "data": {
  "name": "ThumbnailList35762"
 },
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "itemThumbnailShadow": true,
 "itemBackgroundColorRatios": []
},
{
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "24.487%",
 "progressBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 1,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "30px",
 "height": "31.643%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#333333",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingBottom": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionDuration": 500,
 "progressBorderSize": 0,
 "data": {
  "name": "MapViewer"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 128,
 "toolTipShadowColor": "#333333",
 "toolTipShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF",
 "backgroundOpacity": 0,
 "width": 48,
 "paddingRight": 0,
 "right": "4.96%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipFontStyle": "normal",
 "toolTipPaddingLeft": 6,
 "iconURL": "skin/IconButton_DB947932_CBD5_721C_4181_10D28E6E6BBF.png",
 "borderSize": 0,
 "toolTip": "Fullscreen",
 "propagateClick": false,
 "minHeight": 1,
 "toolTipBorderRadius": 3,
 "toolTipFontFamily": "Arial",
 "verticalAlign": "middle",
 "toolTipTextShadowOpacity": 0,
 "bottom": "5.62%",
 "minWidth": 1,
 "toolTipBorderColor": "#767676",
 "mode": "toggle",
 "toolTipShadowSpread": 0,
 "class": "IconButton",
 "toolTipOpacity": 1,
 "toolTipFontSize": "30px",
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "toolTipShadowOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "height": 61.04,
 "shadow": false,
 "paddingBottom": 0,
 "toolTipFontColor": "#333333",
 "horizontalAlign": "center",
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "data": {
  "name": "IconButton1493"
 },
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "maxWidth": 128
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "toolTipShadowColor": "#333333",
 "toolTipShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "IconButton_DD3B0FDD_CC2C_CE04_41CC_8A134CB1896A",
 "backgroundOpacity": 0,
 "width": 70,
 "paddingRight": 0,
 "right": "18.22%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipFontStyle": "normal",
 "toolTipPaddingLeft": 6,
 "iconURL": "skin/IconButton_DD3B0FDD_CC2C_CE04_41CC_8A134CB1896A.png",
 "borderSize": 0,
 "toolTip": "Album Peta",
 "propagateClick": false,
 "minHeight": 1,
 "toolTipBorderRadius": 3,
 "toolTipFontFamily": "Arial",
 "verticalAlign": "middle",
 "toolTipTextShadowOpacity": 0,
 "bottom": "4.63%",
 "minWidth": 1,
 "toolTipBorderColor": "#767676",
 "mode": "push",
 "toolTipShadowSpread": 0,
 "click": "this.showPopupMedia(this.window_CE73AB68_DF6C_9721_41E7_82DE9F5DADF7, this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C, this.playList_EB82C0FE_E45A_9F2C_41E1_9DEBF6C59230, '90%', '90%', false, false)",
 "class": "IconButton",
 "toolTipOpacity": 1,
 "toolTipFontSize": "30px",
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "toolTipShadowOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "height": 70,
 "shadow": false,
 "paddingBottom": 0,
 "toolTipFontColor": "#333333",
 "horizontalAlign": "center",
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "data": {
  "name": "IconButton12181"
 },
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "toolTipShadowColor": "#333333",
 "toolTipShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "Image_CAE00CC7_DA20_59CF_41E6_248AF0EE22D0",
 "backgroundOpacity": 0,
 "width": 70,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "right": "11.4%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipFontStyle": "normal",
 "toolTipPaddingLeft": 6,
 "url": "skin/Image_CAE00CC7_DA20_59CF_41E6_248AF0EE22D0.png",
 "borderSize": 0,
 "toolTip": "Putar Video",
 "propagateClick": false,
 "minHeight": 1,
 "toolTipBorderRadius": 3,
 "toolTipFontFamily": "Arial",
 "verticalAlign": "middle",
 "toolTipTextShadowOpacity": 0,
 "bottom": "4.85%",
 "minWidth": 1,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "click": "this.setComponentVisibility(this.Container_F51F756A_E452_7E4E_41DE_877A0078152A, true, 0, null, null, false)",
 "class": "Image",
 "toolTipOpacity": 1,
 "toolTipFontSize": "30px",
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "toolTipShadowOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "height": 70,
 "shadow": false,
 "paddingBottom": 0,
 "toolTipFontColor": "#333333",
 "horizontalAlign": "center",
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "data": {
  "name": "Image7438"
 },
 "toolTipShadowHorizontalLength": 0,
 "maxWidth": 101
},
{
 "children": [
  "this.WebFrame_F5389D50_E452_6E5A_41D3_A33765C58907",
  "this.Image_F5D7638F_E45E_DAC6_41DF_F72B0C65B898"
 ],
 "id": "Container_F51F756A_E452_7E4E_41DE_877A0078152A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "right": "5.25%",
 "width": "84.318%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": "6.35%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "height": "87.1%",
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "Container6886"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "bottom": 0,
 "minWidth": 0,
 "class": "UIComponent",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "UIComponent2752"
 }
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "class": "ZoomImage",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [],
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "ZoomImage2753"
 },
 "scaleMode": "custom"
},
{
 "fontFamily": "Arial",
 "data": {
  "name": "CloseButton2754"
 },
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "backgroundOpacity": 0.3,
 "paddingLeft": 5,
 "paddingRight": 5,
 "right": 10,
 "borderRadius": 0,
 "iconHeight": 20,
 "borderSize": 0,
 "iconColor": "#000000",
 "propagateClick": false,
 "minHeight": 0,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "top": 10,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "minWidth": 0,
 "iconLineWidth": 5,
 "mode": "push",
 "fontSize": "1.29vmin",
 "fontColor": "#FFFFFF",
 "class": "CloseButton",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "paddingTop": 5,
 "label": "",
 "fontStyle": "normal",
 "pressedIconColor": "#888888",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 5,
 "shadow": false,
 "paddingBottom": 5,
 "horizontalAlign": "center",
 "visible": false,
 "iconBeforeLabel": true,
 "iconWidth": 20,
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D4ECE477_DA20_68C0_41CD_A106F075B430, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingTop':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingBottom':5,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_C8841E57_DA20_58CF_41E8_6F67382DB7EF, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0_HS_0_0.png",
      "width": 206,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ]
   },
   "pitch": -33.49,
   "yaw": 3.49
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DA809F54_CBD5_4E04_41C0_3BC1488DB74A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.58,
   "yaw": 3.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_0_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "media": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F48EC856_E456_6F7C_41C8_A6A2D2C53458, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_camera",
 "id": "PanoramaPlayListItem_F48EC856_E456_6F7C_41C8_A6A2D2C53458",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F48D3856_E456_6F7C_41E7_E0311025439F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_82D2E428_887A_F0E4_41CC_A7BB7C6BC3A4_camera",
 "id": "PanoramaPlayListItem_F48D3856_E456_6F7C_41E7_E0311025439F",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F48D8856_E456_6F7C_41D4_66EEA580A17E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_camera",
 "id": "PanoramaPlayListItem_F48D8856_E456_6F7C_41D4_66EEA580A17E",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F48C0856_E456_6F7C_41E9_CE8E56D0E1CA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_camera",
 "id": "PanoramaPlayListItem_F48C0856_E456_6F7C_41E9_CE8E56D0E1CA",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F48B6856_E456_6F7C_41D8_1592D587205D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_820D06B4_887A_31E3_41C0_3B358CD61033_camera",
 "id": "PanoramaPlayListItem_F48B6856_E456_6F7C_41D8_1592D587205D",
 "class": "PanoramaPlayListItem"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D53CAF97_DA21_D84F_41DD_FDF7418A4445, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingTop':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingBottom':5,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_C8899E5E_DA20_58C0_41DA_C3A6623CCF1A, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0_HS_0_0.png",
      "width": 206,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ]
   },
   "pitch": -33.9,
   "yaw": -2.06
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_C55F808D_CBD7_B204_41E2_7B6D59D53B18",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.55,
   "yaw": -2.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06B4_887A_31E3_41C0_3B358CD61033_0_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_CB20064F_DA20_28DF_41E0_5603979D9489, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingTop':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingBottom':5,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_C886EE57_DA20_58CF_41D1_63411F86D6F3, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0_HS_0_0.png",
      "width": 338,
      "class": "ImageResourceLevel",
      "height": 238
     }
    ]
   },
   "pitch": -68.91,
   "yaw": 0.34
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_C466AC2B_CBD5_520C_41E7_4F96E79A6EA2",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.35,
   "yaw": 0.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -68.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_820D06E7_887A_116D_41E0_F5B60A1BF4E9_0_HS_0_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "children": [
  "this.viewer_uidF49CE854_E456_6F7C_41E6_0D5B23DDE91F",
  {
   "children": [
    "this.htmltext_F498E854_E456_6F7C_41D2_71DF2926EC82"
   ],
   "left": 0,
   "backgroundOpacity": 0.3,
   "paddingLeft": 0,
   "scrollBarColor": "#FFFFFF",
   "paddingRight": 0,
   "scrollBarVisible": "rollOver",
   "right": 0,
   "scrollBarOpacity": 0.5,
   "borderRadius": 0,
   "borderSize": 0,
   "minHeight": 20,
   "propagateClick": false,
   "backgroundColorRatios": [],
   "bottom": 0,
   "contentOpaque": true,
   "minWidth": 20,
   "verticalAlign": "bottom",
   "layout": "vertical",
   "scrollBarMargin": 2,
   "class": "Container",
   "backgroundColorDirection": "vertical",
   "paddingTop": 0,
   "backgroundColor": [],
   "gap": 10,
   "shadow": false,
   "paddingBottom": 0,
   "horizontalAlign": "left",
   "data": {
    "name": "Container2748"
   },
   "overflow": "scroll",
   "scrollBarWidth": 7,
   "height": "30%"
  },
  "this.component_F4972856_E456_6F7C_41C8_97847C46A695",
  "this.component_F4973856_E456_6F7C_41D0_422E70EE4B9F"
 ],
 "id": "container_F49AC854_E456_6F7C_41D1_9172AC965764",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 20,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Container2747"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "map": {
  "width": 386.99,
  "x": 3841.57,
  "height": 333.77,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_0_map.gif",
     "width": 18,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 2419.98
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 3841.57,
  "height": 333.77,
  "y": 2419.98,
  "width": 386.99,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_0.png",
     "width": 151,
     "class": "ImageResourceLevel",
     "height": 130
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_97266B35_9AD4_56F1_41E0_5FEC6491E0E7",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 386.99,
  "x": 2183.51,
  "height": 333.77,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_1_map.gif",
     "width": 18,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 2513.69
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 2183.51,
  "height": 333.77,
  "y": 2513.69,
  "width": 386.99,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_1.png",
     "width": 151,
     "class": "ImageResourceLevel",
     "height": 130
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_8AA26D8D_9ADC_4D91_41C4_B242DE053430",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 386.99,
  "x": 3668.42,
  "height": 333.77,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_2_map.gif",
     "width": 18,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 270.14
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 3668.42,
  "height": 333.77,
  "y": 270.14,
  "width": 386.99,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_2.png",
     "width": 151,
     "class": "ImageResourceLevel",
     "height": 130
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_8A10C3E3_9ADC_5591_41D3_5727B8194571",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 386.99,
  "x": 5149.33,
  "height": 333.77,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_3_map.gif",
     "width": 18,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 2918.02
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 5149.33,
  "height": 333.77,
  "y": 2918.02,
  "width": 386.99,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_3.png",
     "width": 151,
     "class": "ImageResourceLevel",
     "height": 130
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_8A5672F0_9ADC_578F_41E1_8C1A9C619654",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 386.99,
  "x": 3171.2,
  "height": 333.77,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_4_map.gif",
     "width": 18,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 4210.98
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 3171.2,
  "height": 333.77,
  "y": 4210.98,
  "width": 386.99,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_948045FF_9AD4_3D71_41D3_949F4AE5E20A_HS_4.png",
     "width": 151,
     "class": "ImageResourceLevel",
     "height": 130
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_8B108C64_9ADC_5297_41D5_141AEF8C1B24",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D4E689B2_DA20_D841_41AD_B793914B75CE, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingTop':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingBottom':5,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_C88B0E58_DA20_58C1_41E8_2F51AF5FB5D7, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0_HS_0_0.png",
      "width": 206,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ]
   },
   "pitch": -33.49,
   "yaw": 3.49
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DB3490F5_CBCE_A786_41CA_8CED96A15FC1",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.58,
   "yaw": 3.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FEEE74_887A_F163_41D0_4E317D39DC0D_0_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "items": [
  {
   "camera": {
    "duration": 0,
    "easing": "linear",
    "targetPosition": {
     "x": "0.47",
     "zoomFactor": 1.5,
     "class": "PhotoCameraPosition",
     "y": "0.40"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera"
   },
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_0",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 0,
    "easing": "linear",
    "targetPosition": {
     "x": "0.34",
     "zoomFactor": 1.5,
     "class": "PhotoCameraPosition",
     "y": "0.73"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera"
   },
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_1",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 0,
    "easing": "linear",
    "targetPosition": {
     "x": "0.36",
     "zoomFactor": 1.5,
     "class": "PhotoCameraPosition",
     "y": "0.28"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera"
   },
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_2",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 0,
    "easing": "linear",
    "targetPosition": {
     "x": "0.40",
     "zoomFactor": 1.5,
     "class": "PhotoCameraPosition",
     "y": "0.60"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera"
   },
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_3",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 0,
    "easing": "linear",
    "targetPosition": {
     "x": "0.42",
     "zoomFactor": 1.5,
     "class": "PhotoCameraPosition",
     "y": "0.64"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera"
   },
   "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_4",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 0,
    "easing": "linear",
    "targetPosition": {
     "x": "0.71",
     "zoomFactor": 1.5,
     "class": "PhotoCameraPosition",
     "y": "0.48"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera"
   },
   "media": "this.photo_D41C13A7_DF6C_B72F_41D1_75C429856E23",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 0,
    "easing": "linear",
    "targetPosition": {
     "x": "0.45",
     "zoomFactor": 1.5,
     "class": "PhotoCameraPosition",
     "y": "0.60"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera"
   },
   "media": "this.photo_D3C1307B_DF6C_B127_41E7_9B5123E8974C",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 0,
    "easing": "linear",
    "targetPosition": {
     "x": "0.61",
     "zoomFactor": 1.5,
     "class": "PhotoCameraPosition",
     "y": "0.73"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_inside",
    "class": "MovementPhotoCamera"
   },
   "media": "this.photo_D3E22D1E_DF6C_931E_41C6_2B1D04E88604",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D4FB5ACC_DA20_59C0_41BC_A38CC46EDC36, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingTop':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingBottom':5,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_C88A9E5E_DA20_58C0_41E2_57D3E2FAB3FD, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0_HS_0_0.png",
      "width": 206,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ]
   },
   "pitch": -33.9,
   "yaw": -2.06
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_C687AB0B_CBBA_5E90_41CB_C5B9F4E6304C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.55,
   "yaw": -2.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82F58ECA_887A_11A7_41C3_CC78280C5471_0_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "media": "this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C",
 "begin": "this.updateMediaLabelFromPlayList(this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList, this.htmltext_F498E854_E456_6F7C_41D2_71DF2926EC82, this.albumitem_F49CD854_E456_6F7C_41E2_14E4D5FAE3B4); this.loopAlbum(this.playList_EB82C0FE_E45A_9F2C_41E1_9DEBF6C59230, 0)",
 "player": "this.viewer_uidF49CE854_E456_6F7C_41E6_0D5B23DDE91FPhotoAlbumPlayer",
 "id": "albumitem_F49CD854_E456_6F7C_41E2_14E4D5FAE3B4",
 "class": "PhotoAlbumPlayListItem"
},
{
 "id": "WebFrame_F5389D50_E452_6E5A_41D3_A33765C58907",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "93.511%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "//www.youtube.com/embed/Hh8m4HHik1Q?si=z0LCQ-O0jFC2OoD_",
 "minHeight": 1,
 "scrollEnabled": true,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0.14%",
 "minWidth": 1,
 "class": "WebFrame",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame7000"
 },
 "insetBorder": false,
 "height": "99.18%"
},
{
 "maxHeight": 60,
 "id": "Image_F5D7638F_E45E_DAC6_41DF_F72B0C65B898",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "right": "3.34%",
 "width": "2.793%",
 "borderRadius": 0,
 "url": "skin/Image_F5D7638F_E45E_DAC6_41DF_F72B0C65B898.png",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "0.07%",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_F51F756A_E452_7E4E_41DE_877A0078152A, false, 0, null, null, false)",
 "class": "Image",
 "paddingTop": 0,
 "height": "5.443%",
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Image7021"
 },
 "maxWidth": 60
},
{
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uidF49CE854_E456_6F7C_41E6_0D5B23DDE91F",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingBottom": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionDuration": 500,
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea2746"
 }
},
{
 "id": "htmltext_F498E854_E456_6F7C_41D2_71DF2926EC82",
 "backgroundOpacity": 0.7,
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "minWidth": 0,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "backgroundColorDirection": "vertical",
 "paddingTop": 5,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "paddingBottom": 5,
 "html": "",
 "visible": false,
 "data": {
  "name": "HTMLText2749"
 },
 "scrollBarWidth": 10
},
{
 "transparencyActive": false,
 "id": "component_F4972856_E456_6F7C_41C8_97847C46A695",
 "left": 10,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "iconURL": "skin/album_left.png",
 "borderRadius": 0,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 0,
 "verticalAlign": "middle",
 "top": "45%",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "mode": "push",
 "minWidth": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList, -1)",
 "class": "IconButton",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "visible": false,
 "data": {
  "name": "IconButton2750"
 },
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "component_F4973856_E456_6F7C_41D0_422E70EE4B9F",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 10,
 "iconURL": "skin/album_right.png",
 "borderRadius": 0,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 0,
 "verticalAlign": "middle",
 "top": "45%",
 "showEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "hideEffect": {
  "duration": 250,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "mode": "push",
 "minWidth": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_D8F76256_CBEF_5605_41E4_DCA1BDEA730C_AlbumPlayList, 1)",
 "class": "IconButton",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "visible": false,
 "data": {
  "name": "IconButton2751"
 },
 "cursor": "hand"
},
{
 "viewerArea": "this.viewer_uidF49CE854_E456_6F7C_41E6_0D5B23DDE91F",
 "id": "viewer_uidF49CE854_E456_6F7C_41E6_0D5B23DDE91FPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
}],
 "height": "100%",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
